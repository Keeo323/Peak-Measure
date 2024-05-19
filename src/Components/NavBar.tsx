import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from "@nextui-org/react";
import { FaUser } from "react-icons/fa";
import PeakMeasureLogo from "../assets/PeakMeasureLogo.webp";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar position="static" isBordered className="bg-black">
      <NavbarContent justify="end">
        <NavbarBrand>
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-white p-2 rounded-full shadow-md">
              <img
                src={PeakMeasureLogo}
                alt="Peak Measure Logo"
                className="h-8 w-8 rounded-full"
              />
            </div>
            <p className="font-bold text-inherit">PEAK MEASURE</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="flex-grow" />
      <NavbarContent justify="end">
        <NavbarItem>
          <Link to="/login">
            <Button
              color="primary"
              href="#"
              variant="flat"
              startContent={<FaUser />}
            >
              Log In
            </Button>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link to="/signup">
            <Button
              color="secondary"
              href="#"
              variant="flat"
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
