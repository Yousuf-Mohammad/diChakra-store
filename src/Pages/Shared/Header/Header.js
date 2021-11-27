import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import img from "../../../images/cycling.png"

import './Header.css'


const Header = () => {
    const { user, logout } = useAuth();

    return (
        <>

            <Navbar className="text-light" bg="secondary" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="/" style={{ fontWeight: "bold", fontSize: '30px' }}><img
                        alt=""
                        src={img} style={{ width: '90px', height: '80px', marginRight: "10px" }}


                    />diChakra</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link className="text-light" as={Link} to="/allProducts">Explore </Nav.Link>
                        {user?.email ? <Nav.Link className="text-light" as={Link} to="/dashboard">DashBoard </Nav.Link> : ""}




                        <Navbar.Text>
                            <Nav.Link as={Link} to="/login" className="text-warning" >{user?.displayName}</Nav.Link>
                        </Navbar.Text>
                        {user?.email ?
                            <Button onClick={logout} variant="secondary">LogOut</Button> :
                            <Nav.Link className="text-light" as={Link} to="/login">Login </Nav.Link>
                        }
                        {user?.email ?
                            <></> :
                            <Nav.Link className="text-light" as={Link} to="/register">Register </Nav.Link>
                        }



                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
};

export default Header;

