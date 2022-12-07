const express = require("express");
const cors = require("cors");
const { PRODUCTS } = require("./db");
const app = express();

app.use(cors());

app.get("/api/products", (req, res) => {
    const {
        rating = "0",
        fastDelivery = "false",
        includeInStock = "false",
        orderBy = "asc",
    } = req.query;

    let products = PRODUCTS;
    if (rating !== '' && ["0", "1", "2", "3", "4", "5"].includes(rating)) {
        products = products.filter((p) => {
            return p.rating >= parseInt(rating);
        });
    }

    if (fastDelivery !== '' && ["true", "falase"].includes(fastDelivery)) {
        products = products.filter(
            (p) => p.fastDelivery === (fastDelivery === "true")
        );
    }

    if (includeInStock !== '' && ["true", "false"].includes(includeInStock)) {
        if (includeInStock === 'true') {
            products = products.filter(p => p.inStock > 0);
        }
    }

    if (orderBy && ["asc", "desc"].includes(orderBy)) {
        products.sort((a, b) => {
            return orderBy === "asc" ? a.price - b.price : b.price - a.price;
        });
    }

    return res.status(200).json(products);
});

app.listen(process.env.PORT || "3001", () => {
    console.log("listening...");
});
