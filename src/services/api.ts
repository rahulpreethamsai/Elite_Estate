import axios from 'axios';

const API = axios.create({ 
  baseURL: 'https://ee-backend-rt70.onrender.com/api' 
});


API.interceptors.request.use((req) => {

  const user = JSON.parse(localStorage.getItem('user') as string);
  if (user && user.token) {
    req.headers.Authorization = `Bearer ${user.token}`;
  }
  return req;
});

export default API;