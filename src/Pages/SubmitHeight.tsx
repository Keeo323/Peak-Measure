import { Button, Input } from "@nextui-org/react";
import { Link } from "react-router-dom";

const LogIn = () => {
  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [height, setHeight] = useState("");

  // const user = {
  //   heightName: username,
  //   heightEmail: email,
  //   height: height,
  //   password: password,
  // };

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
            type="text"
            label="Username"
            placeholder="Enter your username"
            fullWidth
            //value={height}
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
