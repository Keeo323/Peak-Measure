import { Button } from "@nextui-org/react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import PeakMeasureLogo from "../assets/PeakMeasureLogo.webp";

const NavBar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 flex items-center justify-between bg-black p-4 shadow-lg rounded-b-lg z-50 h-16">
      <div className="flex items-center gap-2">
        <Link to="/" className="relative">
          <div className="bg-white p-2 rounded-full shadow-md">
            <img
              src={PeakMeasureLogo}
              alt="Peak Measure Logo"
              className="h-8 w-8 rounded-full"
            />
          </div>
        </Link>
        <span className="text-white text-xl font-semibold">Peak Measure</span>
      </div>
      <div className="flex gap-4">
        <Link to="/signup">
          <Button color="primary" variant="solid" startContent={<FaUser />}>
            Sign Up
          </Button>
        </Link>
        <Link to="/login">
          <Button color="secondary" variant="solid" startContent={<FaUser />}>
            Log In
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
