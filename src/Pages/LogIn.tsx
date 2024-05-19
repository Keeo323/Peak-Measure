import { Button, Input } from "@nextui-org/react";
import { useState } from "react";
import { IoMdEyeOff } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import { Link } from "react-router-dom";

const LogIn = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form className="bg-default-100 p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Log In</h2>
        <div className="mb-4">
          <Input
            isRequired
            type="email"
            label="Email"
            placeholder="Enter your email"
            className="max-w-xs"
          />
        </div>
        <div className="mb-6">
          <Input
            label="Password"
            placeholder="Enter your password"
            endContent={
              <button
                className="focus:outline-none"
                type="button"
                onClick={toggleVisibility}
              >
                {isVisible ? (
                  <IoEye className="text-2xl text-default-400 pointer-events-none" />
                ) : (
                  <IoMdEyeOff className="text-2xl text-default-400 pointer-events-none" />
                )}
              </button>
            }
            type={isVisible ? "text" : "password"}
            fullWidth
          />
        </div>
        <div className="flex justify-between">
          <Link to="/signup">
            <Button color="primary">Sign up</Button>
          </Link>
          <Button type="submit" color="primary">
            Log in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
