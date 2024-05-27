import axios from 'axios';


const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, 
  withCredentials: true, 
});



// const refreshToken = async () => {
//   try {
//     const response = await api.post('/auth/refresh-token');
//     console.log(response)   
//      return response.data; 
//   } catch (error) {
//     console.error("Unable to refresh token:", error);
//     return null;
//   }
// };

// api.interceptors.response.use(
//   response => response,
//   async error => {
//     const originalRequest = error.config

//     if (error.response  && !originalRequest._retry) {
//       originalRequest._retry = true;
//       const result = await refreshToken();
//       if (result) {
    
//         return api(originalRequest);
//       }
//     }
//     return Promise.reject(error);
//   }
// );

export default api;
