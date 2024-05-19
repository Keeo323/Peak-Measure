import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from "@nextui-org/react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import PMLogo from "../assets/PeakMeasureLogo.webp"; // Ensure this path is correct

const NavBar = () => {
  return (
    <Navbar isBordered className="bg-black fixed top-0 left-0 right-0 z-50">
      <NavbarContent className="flex items-center gap-2">
        <NavbarBrand>
          <Link to="/" className="flex items-center gap-2">
            <div className="flex items-center justify-center h-10 w-10">
              <img
                src={PMLogo}
                alt="Peak Measure Logo"
                className="h-full w-full object-contain"
              />
            </div>
            <span className="text-white text-xl font-semibold">
              Peak Measure
            </span>
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="flex-grow" />
      <NavbarContent justify="end" className="flex gap-2 items-center">
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
    </Navbar>
  );
};

export default NavBar;
