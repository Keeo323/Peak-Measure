import axios from "axios";

const apiClient = axios.create({
  //baseURL: 'http://localhost:8082',
  //baseURL: 'http://enhapp-dev-env.eba-pvtq6ayz.eu-north-1.elasticbeanstalk.com',
  baseURL: 'https://40b5-2c0f-f528-41-feec-d169-3b53-c3de-c493.ngrok-free.app',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;