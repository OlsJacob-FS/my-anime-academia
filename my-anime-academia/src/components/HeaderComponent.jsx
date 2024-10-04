import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { Link } from "react-router-dom";

function HeaderComponent() {
  return (
    <>
      <Navbar shouldHideOnScroll className="headerComp">
        <img
          src="../../src/assets/images/logo-png.png"
          alt="My Anime Academia Logo"
          className="h-10 relative left-0"
        />
        <NavbarBrand>
          <p className="font-bold text-inherit headerText">My Anime Academia</p>
        </NavbarBrand>
        <NavbarContent className="sm:flex gap-4" justify="end">
          <NavbarItem>
            <Link className="text-white" to="/">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="text-white" to="/profile">
              Profile
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link to="/forms" className="text-white">
              Forms
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link to="./stash" className="text-white">
              Stash
            </Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </>
  );
}

export default HeaderComponent;
