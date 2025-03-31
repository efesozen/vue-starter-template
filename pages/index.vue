<template>
  <div class="container mx-auto px-4 py-6">
    <h1 class="text-2xl font-bold mb-6">Dashboard</h1>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <!-- Stats Cards -->
      <div class="bg-white rounded-lg shadow p-6">
        <div class="flex items-center">
          <div class="p-3 rounded-full bg-blue-100 text-blue-600">
            <Icon name="file-text" size="24" />
          </div>
          <div class="ml-4">
            <p class="text-gray-500">Total Posts</p>
            <p class="text-2xl font-semibold">15</p>
          </div>
        </div>
      </div>
      
      <div class="bg-white rounded-lg shadow p-6">
        <div class="flex items-center">
          <div class="p-3 rounded-full bg-green-100 text-green-600">
            <Icon name="users" size="24" />
          </div>
          <div class="ml-4">
            <p class="text-gray-500">Users</p>
            <p class="text-2xl font-semibold">24</p>
          </div>
        </div>
      </div>
      
      <div class="bg-white rounded-lg shadow p-6">
        <div class="flex items-center">
          <div class="p-3 rounded-full bg-purple-100 text-purple-600">
            <Icon name="message-circle" size="24" />
          </div>
          <div class="ml-4">
            <p class="text-gray-500">Comments</p>
            <p class="text-2xl font-semibold">42</p>
          </div>
        </div>
      </div>
      
      <div class="bg-white rounded-lg shadow p-6">
        <div class="flex items-center">
          <div class="p-3 rounded-full bg-yellow-100 text-yellow-600">
            <Icon name="eye" size="24" />
          </div>
          <div class="ml-4">
            <p class="text-gray-500">Page Views</p>
            <p class="text-2xl font-semibold">1,243</p>
          </div>
        </div>
      </div>
    </div>
    
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <!-- Recent Posts -->
      <div class="bg-white rounded-lg shadow">
        <div class="px-6 py-4 border-b">
          <h2 class="font-bold">Recent Posts</h2>
        </div>
        <div class="p-4">
          <ul class="divide-y">
            <li v-for="i in 5" :key="i" class="py-3">
              <div class="flex items-center">
                <div class="flex-1">
                  <p class="font-medium">Example Post Title {{ i }}</p>
                  <p class="text-sm text-gray-500">Created 3 days ago</p>
                </div>
                <div>
                  <NuxtLink to="/examples/posts/1" class="text-blue-600 hover:text-blue-800">
                    <Icon name="chevron-right" />
                  </NuxtLink>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      
      <!-- Activity -->
      <div class="bg-white rounded-lg shadow">
        <div class="px-6 py-4 border-b">
          <h2 class="font-bold">Recent Activity</h2>
        </div>
        <div class="p-4">
          <ul class="divide-y">
            <li v-for="i in 5" :key="i" class="py-3">
              <div class="flex">
                <div class="flex-shrink-0 mr-3">
                  <div class="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                    <Icon name="user" class="text-gray-600" />
                  </div>
                </div>
                <div>
                  <p class="font-medium">User Activity {{ i }}</p>
                  <p class="text-sm text-gray-500">Just now</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "default"
});
</script>