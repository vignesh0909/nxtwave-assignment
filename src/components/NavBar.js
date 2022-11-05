import React, { useContext } from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LoginContext } from '../context/LoginContext';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {

    const { login, setLogin } = useContext(LoginContext);
    const navigate = useNavigate();
    const handleAddItem = () => {
        navigate('/resource/create/');
    }
    return (<>
        <h1>{login}</h1>

        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className=''>
            <Navbar.Brand href="/">
                <img
                    src="https://react-bootstrap.github.io/logo.svg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top m-1"
                    alt="Comp Logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/" className=''><span className='h4 text-dark'>NXT Wave</span></Nav.Link>
                </Nav>

                {login === "true" &&
                    <Nav>
                        <Nav.Link >
                            <button className='btn btn-success mr-3' onClick={handleAddItem}>ADD ITEM</button>
                        </Nav.Link>
                        <Nav.Link eventKey={2} >
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                            </svg>
                        </Nav.Link>
                        <Nav.Link>
                            <button className='btn btn-danger mr-3' onClick={() => { setLogin("false"); navigate('/') }}>Log out</button>
                        </Nav.Link>
                    </Nav>
                }
            </Navbar.Collapse>
        </Navbar>
    </>)
}

export default NavBar