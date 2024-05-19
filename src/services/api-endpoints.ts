import axios from "axios";

const apiClient = axios.create({
  //baseURL: 'http://localhost:8082',
  baseURL: 'http://enhapp-dev-env.eba-pvtq6ayz.eu-north-1.elasticbeanstalk.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;