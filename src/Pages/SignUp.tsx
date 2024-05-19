import { Input, Button } from "@nextui-org/react";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import { useState } from "react";
import { Link } from "react-router-dom";
import apiClient from "../services/api-endpoints";

const SignUp = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const user = {
      heightName: username,
      heightEmail: email,
      height: null,
      password: password,
    };

    console.log("Sending user data to /sign-in:", user);
    const response = await apiClient.post("/sign-in", user);
    console.log("Response data:", response.data);
    alert("Sign up successful!");
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-default-100 p-6 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <div className="mb-4">
          <Input
            type="text"
            label="Username"
            placeholder="Enter your username"
            fullWidth
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <Input
            isRequired
            type="email"
            label="Email"
            placeholder="Enter your email"
            className="max-w-xs"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex justify-between items-center">
          <Button type="submit" color="primary">
            Sign up
          </Button>
          <div className="flex items-center space-x-2">
            <span className="text-gray-400 text-sm">Already a user?</span>
            <Link to="/login">
              <Button color="primary">Log in</Button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
