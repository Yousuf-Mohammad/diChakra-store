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

            <Navbar className="text-light" bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="/" style={{ fontWeight: "bold", fontSize: '30px' }}><img
                        alt=""
                        src={img} style={{ width: '90px', height: '80px', marginRight: "10px" }}


                    />diChakra</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        
                  

                        {user?.email ?<Navbar.Text>
                            <Nav.Link className="text-light" as={Link} to="/dashboard">DashBoard </Nav.Link>
                            </Navbar.Text> : null}

                        <Navbar.Text>
                            <Nav.Link as={Link} to="/login" className="text-warning" >{user?.displayName}</Nav.Link>
                        </Navbar.Text>

                        {user?.email ?
                            <Button onClick={logout} variant="secondary">LogOut</Button> :
                            <Navbar.Text>
                            <Nav.Link className="text-light" as={Link} to="/login">Login </Nav.Link>
                            </Navbar.Text>
                        }
                        {user?.email ?
                            null :
                            <Navbar.Text>
                            <Nav.Link className="text-light" as={Link} to="/register">Register </Nav.Link>
                            </Navbar.Text>
                        }



                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
};

export default Header;

