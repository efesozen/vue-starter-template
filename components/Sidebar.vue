<template>
  <aside class="fixed inset-y-0 left-0 bg-white shadow-md max-h-screen w-64 hidden lg:block">
    <div class="flex flex-col justify-between h-full">
      <div class="flex-grow">
        <div class="px-4 py-6 text-center border-b">
          <h1 class="text-xl font-bold leading-none">Nuxt Starter</h1>
        </div>
        <div class="p-4">
          <ul class="space-y-1">
            <li>
              <NuxtLink to="/" class="flex items-center bg-blue-500 rounded-xl font-bold text-sm text-white py-3 px-4">
                <Icon name="layout-dashboard" class="mr-4" />Dashboard
              </NuxtLink>
            </li>
            
            <!-- Examples Section -->
            <li class="mt-4">
              <span class="text-gray-400 text-xs uppercase font-semibold px-2">Examples</span>
            </li>
            <li>
              <NuxtLink to="/examples/posts" class="flex bg-white hover:bg-blue-50 rounded-xl font-bold text-sm text-gray-900 py-3 px-4">
                <Icon name="file-text" class="mr-4" />Posts
              </NuxtLink>
            </li>
            
            <!-- Settings Section -->
            <li class="mt-4">
              <span class="text-gray-400 text-xs uppercase font-semibold px-2">Settings</span>
            </li>
            <li>
              <NuxtLink to="/profile" class="flex bg-white hover:bg-blue-50 rounded-xl font-bold text-sm text-gray-900 py-3 px-4">
                <Icon name="user" class="mr-4" />Profile
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
      <div class="p-4 border-t">
        <button type="button" class="flex items-center w-full rounded-xl font-bold text-sm text-gray-900 py-3 px-4">
          <Icon name="log-out" class="mr-4" />Logout
        </button>
      </div>
    </div>
  </aside>
</template>

<script setup>
// Any sidebar-specific logic here
</script>