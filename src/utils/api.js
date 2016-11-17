import axios from 'axios';
import {
  API_URL
} from '../constants';

// Create API instance
const api = axios.create({
  baseURL: API_URL,
  timeout: 1000,
});

export default api;
