import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: null,
    loading: false,
  }),
  
  getters: {
    isAuthenticated: (state) => !!state.token,
    username: (state) => state.user?.name || 'User',
  },
  
  actions: {
    async login(credentials) {
      this.loading = true;
      try {
        const { $api } = useNuxtApp();
        const response = await $api.auth.login(credentials);
        this.token = response.data.token;
        this.user = response.data.user;
        return response;
      } catch (error) {
        throw error;
      } finally {
        this.loading = false;
      }
    },
    
    async logout() {
      this.loading = true;
      try {
        const { $api } = useNuxtApp();
        await $api.auth.logout();
        this.token = null;
        this.user = null;
      } catch (error) {
        console.error('Logout error:', error);
      } finally {
        this.loading = false;
      }
    },
    
    setUser(user) {
      this.user = user;
    },
    
    setToken(token) {
      this.token = token;
    },
  },
  
  persist: {
    storage: persistedState.localStorage,
  },
});