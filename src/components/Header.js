import {
    Navbar,
    Container,
    FormControl,
    Dropdown,
    Nav,
    Badge,
    Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { CartState } from "../store/Provider";
import { REMOVE_FROM_CART } from "../store/Action";

const Header = () => {
    const {
        state: { carts },
        dispatch,
    } = CartState();

    return (
        <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
            <Container>
                <Navbar.Brand>
                    <Link to="/">E-commerce</Link>
                </Navbar.Brand>
                <Navbar.Text className="search">
                    <FormControl
                        placeholder="Search erverything"
                        className="m-auto"
                        style={{ minWidth: 500 }}
                    />
                </Navbar.Text>
                <Nav>
                    <Dropdown alignRight>
                        <Dropdown.Toggle
                            variant="success"
                            className="dropdown-area"
                        >
                            <FaShoppingCart />
                            <Badge bg="success" style={{ marginLeft: 10 }}>
                                {carts.length}{" "}
                            </Badge>
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={{ minWidth: 320 }}>
                            {carts.length ? (
                                carts.map((cart) => (
                                    <span className="cartItem" key={cart.id}>
                                        <img
                                            className="cartImg"
                                            src={cart.image}
                                            alt={cart.name}
                                        />
                                        <div className="cartItemDetail">
                                            <span>{cart.name}</span>
                                            <span>${cart.price}</span>
                                        </div>
                                        <AiFillDelete
                                            style={{ cursor: "pointer" }}
                                            onClick={() =>
                                                dispatch({
                                                    type: REMOVE_FROM_CART,
                                                    payload: cart,
                                                })
                                            }
                                        />
                                    </span>
                                ))
                            ) : (
                                <span style={{ padding: 10 }}>
                                    Cart is Empty!
                                </span>
                            )}
                            <span className="cartItem">
                                <Button style={{ margin: '0 auto', width: '95%'}}>
                                    <Link to="/cart">Go to carts</Link>
                                </Button>
                            </span>
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;
