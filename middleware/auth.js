export default defineNuxtRouteMiddleware((to, from) => {
  const { $pinia } = useNuxtApp();
  const authStore = useAuthStore($pinia);
  
  // If user is not authenticated and trying to access a protected route
  if (!authStore.isAuthenticated && to.path !== '/login' && to.path !== '/register') {
    return navigateTo('/login');
  }
  
  // If user is authenticated and trying to access login/register page
  if (authStore.isAuthenticated && (to.path === '/login' || to.path === '/register')) {
    return navigateTo('/');
  }
});