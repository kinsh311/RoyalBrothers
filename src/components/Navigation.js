import React from "react";
import rbLogo from "./img/rbLogo.png";
import newb from "./img/w3newbie.png";
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
  Container,
  DropdownItem,
  Button
} from "reactstrap";

const Navigation = () => {
  return (
    <Navbar expand="lg">
      <Container fluid>
        <NavbarBrand href="#">
          <img src={rbLogo} class="logo" />
        </NavbarBrand>
        <NavbarToggler
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          
        >
          <span class="navbar-toggler-icon nav-default-color">
            <i class="fa fa-bars"></i>
          </span>
        </NavbarToggler>
        <UncontrolledDropdown nav inNavbar className="dropdown">
          <DropdownToggle nav caret>
            Bikes in Bangalore
          </DropdownToggle>
          <DropdownMenu left>
            <DropdownItem>Agra</DropdownItem>
            <DropdownItem>Ahemdabad</DropdownItem>
            <DropdownItem>Chandigarh</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
        <Collapse navbar id="navbarNav" className="ml-auto">
          <Nav className="ml-auto">
            <NavItem>
              <NavLink href="#">Tariff</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Package</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Bike</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar className="dropdown">
              <DropdownToggle nav caret>
                Menu
              </DropdownToggle>
              <DropdownMenu left>
                <DropdownItem>Blog</DropdownItem>
                <DropdownItem>Rides</DropdownItem>
                <DropdownItem>FAQ</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <Button outline>Sign up</Button> <Button outline>Log in</Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};
export default Navigation;
