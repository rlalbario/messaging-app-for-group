import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    Button,
    Container
} from 'reactstrap';

class AppNavbar extends Component {

    state = {
        isOpen: false
    };

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen

        });
    };

    render() {
        return (
            <div>
                <Navbar className="mainNav light" light expand="md">
                    <Container>
                        <NavbarBrand href="#">Messaging App</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="#" className="navs">Contact</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#" className="navs">About Us</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#" className="navs">FAQ</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#" className="navs">Login</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>

                    </Container>

                </Navbar>
            </div>
        )
    }
}

export default AppNavbar;