import { Button, Input } from "@nextui-org/react";
import { useState } from "react";
import { IoMdEyeOff } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import apiClient from "../services/api-endpoints";

const LogIn: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(""); // Clear previous errors

    const user = {
      heightEmail: email,
      password: password,
    };

    try {
      console.log("Sending user data to /login:", user);
      const response = await apiClient.post("/login", user);
      console.log("Response data:", response.data);

      if (response.status === 200) {
        alert("Login successful!");
        // Pass user data to SubmitHeight page
        navigate("/submit-height", { state: { user: response.data } });
      } else {
        setError("Login failed. Please try again.");
      }
    } catch (error: any) {
      if (error.response && error.response.status === 401) {
        setError("Invalid email or password");
      } else {
        setError("An error occurred. Please try again.");
      }
      console.error("Login error:", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-default-100 p-6 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Log In</h2>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <div className="mb-4">
          <Input
            required
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
            required
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
