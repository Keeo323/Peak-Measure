import { Button, Input } from "@nextui-org/react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import apiClient from "../services/api-endpoints";

const SubmitHeight: React.FC = () => {
  const [height, setHeight] = useState<string>("");
  const [error, setError] = useState<string>("");
  const location = useLocation();
  const navigate = useNavigate();
  const user = location.state?.user;

  if (!user) {
    navigate("/login");
    return null;
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    try {
      const response = await apiClient.post("/heights", null, {
        params: { id: user.id, height: parseFloat(height) },
      });
      console.log("Response data:", response.data);
      alert("Height submitted successfully!");
    } catch (error: unknown) {
      setError("An error occurred. Please try again.");
      console.error("Submit height error:", error);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await apiClient.delete(`/heights/${user.id}`);
      console.log("Response data:", response.data);
      alert("Data deleted successfully!");
      navigate("/");
    } catch (error: unknown) {
      setError("An error occurred. Please try again.");
      console.error("Delete data error:", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-default-100 p-6 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          Enter Your Height
        </h2>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <div className="mb-4">
          <Input
            readOnly
            type="email"
            label="Email"
            value={user.heightEmail}
            className="max-w-xs"
          />
        </div>
        <div className="mb-6">
          <Input
            required
            label="Height (m)"
            placeholder="Enter your height in meters. Example: 1.6"
            fullWidth
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <div className="flex justify-between">
          <Button type="submit" color="primary">
            Submit
          </Button>
          <Button type="button" color="danger" onClick={handleDelete}>
            Delete
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SubmitHeight;
