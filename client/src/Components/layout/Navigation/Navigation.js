import { useState } from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import logo from './logo.png'
import { NavLink, Link } from 'react-router-dom'
import AuthService from '../../../Service/auth.service'
import './Navigation.css'


const Navigation = ({ storeUser, loggedUser, isAdmin }) => {

    const [changeClass, setChangeClass] = useState(false)

    const authService = new AuthService()
    document.addEventListener('scroll', (e) => scrollNav(e))
    const logoutUser = () => {

        authService
            .logout()
            .then(() => storeUser(undefined))
            .catch(err => console.log(err))
    }

    function scrollNav(e) {
        const scrollTop = window.pageYOffset
        if (scrollTop > 65) setChangeClass(true)
        else if (scrollTop === 0) setChangeClass(false)
    }
    return (
        <Navbar id="navbar" variant="light" expand="md" className={changeClass ? "navb filled" : "navb"} fixed='top'>
            <Link to="/" >
                <Navbar.Brand> <img
                    alt="logo"
                    src={logo}
                    width="70"
                    height="50"
                    style={{ marginLeft: 15 }}
                    className="d-inline-block align-top"
                />{' '} </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">

                    <NavLink to="/media" >
                        <Nav.Link as="span" >Features</Nav.Link>
                    </NavLink>
                    <NavLink to="/news" >
                        <Nav.Link as="span" >About</Nav.Link>
                    </NavLink>
                    {
                        loggedUser
                            ?
                            isAdmin === 'admin' ?
                                <>
                                    <NavDropdown title="Private" id="basic-nav-dropdown">
                                        <NavDropdown.Item > <Link to="/profile"  >Profile</Link></NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item ><Link to="/admin-page" >Admin page</Link></NavDropdown.Item>
                                    </NavDropdown>
                                    <Nav.Link as="span" onClick={() => logoutUser()}>Log out</Nav.Link>

                                </>
                                :
                                <>
                                    <NavLink to="/profile">
                                        <Nav.Link as="span" >Profile ({loggedUser.username})</Nav.Link>
                                    </NavLink>
                                    <Nav.Link as="span" onClick={() => logoutUser()}>Log out</Nav.Link>

                                </>
                            :
                            <>
                                <NavLink to="/login">
                                    <Nav.Link as="span" >Log in</Nav.Link>
                                </NavLink>
                                <NavLink to="/signup">
                                    <Nav.Link as="span" >Sign up</Nav.Link>
                                </NavLink>
                            </>
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    )
}

export default Navigation