export default ($axios: any, logger: any) => ({
  async login(credentials: { email: string; password: string }) {
    try {
      const response = await $axios.post('/auth/login', credentials);
      return response;
    } catch (error) {
      logger.error('loginError', 'auth');
      throw error;
    }
  },

  async register(userData: any) {
    try {
      const response = await $axios.post('/auth/register', userData);
      return response;
    } catch (error) {
      logger.error('registerError', 'auth');
      throw error;
    }
  },

  async logout() {
    try {
      const response = await $axios.post('/auth/logout');
      return response;
    } catch (error) {
      logger.error('logoutError', 'auth');
      throw error;
    }
  },

  async getProfile() {
    try {
      const response = await $axios.get('/auth/profile');
      return response;
    } catch (error) {
      logger.error('profileError', 'auth');
      throw error;
    }
  },

  async refreshToken() {
    try {
      const response = await $axios.post('/auth/refresh');
      return response;
    } catch (error) {
      logger.error('refreshError', 'auth');
      throw error;
    }
  },
});