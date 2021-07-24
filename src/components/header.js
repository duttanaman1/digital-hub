import React, { useState } from "react";
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
} from "reactstrap";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

function Header() {
  // Declare a new state variable, which we'll call "count"
  const [curr, setCurr] = useState("USD");
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav className="sticky-top">
      <Navbar
        color="white"
        light
        expand="md"
        style={{ boxShadow: "5px 5px 5px #ccc" }}
      >
        <NavbarBrand href="/">Market Presso</NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="/" className="mx-2">
              Blog
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/" className="mx-2">
              Cart
            </NavLink>
          </NavItem>
          <NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                {curr}
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem onClick={() => setCurr("USD")}>USD</DropdownItem>
                <DropdownItem onClick={() => setCurr("IND")}>IND</DropdownItem>
                <DropdownItem onClick={() => setCurr("EUR")}>EUR</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </NavItem>
          <NavItem>
            <NavLink href="/" className="mx-2">
              Sign In
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>/</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/" className="mx-2">
              Register
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
      <Navbar
        color="light"
        light
        expand="md"
        style={{ borderBottom: "1px solid black" }}
      >
        <Nav className="mr-auto" navbar>
          <NavItem className="mx-2">
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onMouseOver={handleClick}
            >
              Music & Audio
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Voice Over</MenuItem>
              <MenuItem onClick={handleClose}>Podcast</MenuItem>
            </Menu>
          </NavItem>
          <NavItem className="mx-2">
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onMouseOver={handleClick}
            >
              Programming & tech
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Voice Over</MenuItem>
              <MenuItem onClick={handleClose}>Podcast</MenuItem>
            </Menu>
          </NavItem>
          <NavItem className="mx-2">
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onMouseOver={handleClick}
            >
              Digital Marketing
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Voice Over</MenuItem>
              <MenuItem onClick={handleClose}>Podcast</MenuItem>
            </Menu>
          </NavItem>
          <NavItem className="mx-2">
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onMouseOver={handleClick}
            >
              Writing & Translation
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Voice Over</MenuItem>
              <MenuItem onClick={handleClose}>Podcast</MenuItem>
            </Menu>
          </NavItem>
          <NavItem className="mx-2">
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onMouseOver={handleClick}
            >
              Graphics & Design
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Logo Brand Identity</MenuItem>
              <MenuItem onClick={handleClose}>Visual Design</MenuItem>
              <MenuItem onClick={handleClose}>print Design</MenuItem>
            </Menu>
          </NavItem>
        </Nav>
      </Navbar>
    </nav>
  );
}

export default Header;
