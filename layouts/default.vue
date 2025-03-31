<template>
  <div class="min-h-screen bg-gray-100">
    <Sidebar />
    <div class="lg:pl-64">
      <Header />
      <main class="min-h-screen py-6">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup>
// Any layout-specific logic here
</script>