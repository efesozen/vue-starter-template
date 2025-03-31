<template>
  <header class="bg-white shadow">
    <div class="flex items-center justify-between px-6 py-4">
      <div class="flex items-center">
        <button type="button" class="text-gray-500 hover:text-gray-600 lg:hidden">
          <Icon name="menu" size="24" />
        </button>
        <h1 class="text-xl font-bold ml-4 lg:ml-0">Dashboard</h1>
      </div>
      <div class="flex items-center">
        <div class="relative">
          <button class="flex items-center text-gray-700 focus:outline-none">
            <img class="h-8 w-8 rounded-full object-cover" src="https://ui-avatars.com/api/?name=User&background=0D8ABC&color=fff" alt="avatar" />
            <span class="mx-2 font-medium">User</span>
            <Icon name="chevron-down" size="16" />
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
// Header-specific logic here
</script>