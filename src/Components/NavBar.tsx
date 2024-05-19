import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
} from "@nextui-org/react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import PMLogo from "../assets/PeakMeasureLogo.webp";

const NavBar = () => {
  return (
    <Navbar isBordered className="bg-black fixed top-0 left-0 right-0 z-50">
      <NavbarContent className="flex items-center gap-2 navbar-content">
        <NavbarBrand>
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-black p-1 rounded-full shadow-md flex items-center justify-center h-10 w-10">
              <img
                src={PMLogo}
                alt="Peak Measure Logo"
                className="h-full w-full object-contain"
              />
            </div>
            <span className="text-white text-xl font-semibold navbar-logo-text">
              Peak Measure
            </span>
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="flex-grow" />
      <NavbarContent
        justify="end"
        className="flex gap-2 items-center navbar-buttons hidden sm:flex"
      >
        <NavbarItem>
          <Link to="/login">
            <Button
              href="#"
              variant="flat"
              color="primary"
              startContent={<FaUser />}
            >
              Log In
            </Button>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link to="/signup">
            <Button
              href="#"
              variant="flat"
              color="secondary"
              startContent={<FaUser />}
            >
              Sign Up
            </Button>
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end" className="sm:hidden">
        <Dropdown>
          <DropdownTrigger>
            <Button href="#" variant="flat" color="success">
              <FaUser />
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="User actions">
            <DropdownItem key="login">
              <Link to="/login">Log In</Link>
            </DropdownItem>
            <DropdownItem key="signup">
              <Link to="/signup">Sign Up</Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
};

export default NavBar;
