import React from 'react';
import { Navbar, Container, Offcanvas, Nav, Button } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';



const DashboardHeader = () => {
    const { user, logout } = useAuth();
    return (





        <div>

            <Navbar bg="secondary" expand={false}>
                <Container fluid>
                    <Navbar.Brand as={Link} to='/'>DashBoard</Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">DashBoard</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                {user.email ? <Nav.Link className="text-dark" as={Link} to='/'>Home</Nav.Link> : ""}
                                {user.role !== 'admin' ? <Nav.Link className="text-dark" as={Link} to='/addService'>Add NewService</Nav.Link> : ""}
                                {user.role !== 'admin' ? <Nav.Link className="text-dark" as={Link} to='/adminmaker'>Make Admin</Nav.Link> : ""}
                                {user.role !== 'admin' ? <Nav.Link className="text-dark" as={Link} to='/reviews'>Review</Nav.Link> : ""}

                                {(user.role === "admin") ? <Nav.Link className="text-dark" as={Link} to='/myOrders'>My Orders</Nav.Link> : ""}
                                {(user.role !== "admin") ? <Nav.Link className="text-dark" as={Link} to='/manageService'>Manage All Orders</Nav.Link> : ""}
                                {(user.role !== "admin") ? <Nav.Link className="text-dark" as={Link} to='/products'>Manage All Product</Nav.Link> : ""}
                                {(user.role !== "admin") ? <Nav.Link className="text-dark" as={Link} to='/paynow'>Pay Now</Nav.Link> : ""}
                                {(user.role !== "admin") ? <Nav.Link className="text-dark" as={Link} to='/products'>Manage All Product</Nav.Link> : ""}

                                <Button style={{ marginTop: "20px" }} onClick={logout} variant="secondary">LogOut</Button>


                            </Nav>

                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>

        </div>
    )
};

export default DashboardHeader;