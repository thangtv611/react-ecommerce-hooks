import { Navbar, Container, FormControl, Dropdown, Nav, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
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
                    <Dropdown align="end">
                        <Dropdown.Toggle variant="success" className="dropdown-area">
                            <FaShoppingCart />
                            <Badge bg="success" style={{marginLeft: 10}}>10</Badge>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <span style={{ padding: 10 }}>Cart is Empty!</span>
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;
