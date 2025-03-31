import axios from 'axios';

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  
  // Create axios instance
  const axiosInstance = axios.create({
    baseURL: config.public.apiBase || 'http://localhost:3000/api',
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  
  // Request interceptor
  axiosInstance.interceptors.request.use(
    (config) => {
      const authStore = useAuthStore();
      
      // Add token to request if available
      if (authStore.token) {
        config.headers.Authorization = `Bearer ${authStore.token}`;
      }
      
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  
  // Response interceptor
  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      // Handle authentication errors
      if (error.response && error.response.status === 401) {
        const authStore = useAuthStore();
        authStore.token = null;
        authStore.user = null;
        navigateTo('/login');
      }
      
      return Promise.reject(error);
    }
  );
  
  return {
    provide: {
      axios: axiosInstance,
    },
  };
});