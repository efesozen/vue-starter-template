# Components Documentation

This document describes the key components provided in the starter template and how to use them effectively.

## Layout Components

### Sidebar.vue

The sidebar provides the main navigation for the application.

**Usage:**
```vue
<template>
  <Sidebar />
</template>
```

**Customization:**
- Edit the links in the component to match your application's routes
- Modify styling as needed using Tailwind classes

### Header.vue

The header appears at the top of each page when using the default layout.

**Usage:**
```vue
<template>
  <Header />
</template>
```

## Page Layouts

### default.vue

The main layout with sidebar and header.

**Usage:**
```js
definePageMeta({
  layout: "default"
});
```

### empty.vue

A clean layout without navigation, useful for login/register pages.

**Usage:**
```js
definePageMeta({
  layout: "empty"
});
```

## Common UI Components

These components provide consistent UI elements throughout the application.

### DataTable.vue (planned)

A reusable table component with sorting, filtering, and pagination.

**Planned Usage:**
```vue
<DataTable 
  :columns="columns"
  :items="items"
  :loading="loading"
  @page-change="handlePageChange"
/>
```

### Pagination

Pagination controls for tables and lists.

**Usage in example posts page:**
```vue
<div v-if="pagination.totalPages > 1" class="mt-4 flex justify-end">
  <div class="flex space-x-1">
    <button 
      @click="changePage(pagination.currentPage - 1)" 
      :disabled="pagination.currentPage === 1"
      class="px-3 py-1 rounded border" 
      :class="pagination.currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-blue-600 hover:bg-blue-50'"
    >
      <Icon name="chevron-left" />
    </button>
    
    <!-- Page buttons -->
    
    <button 
      @click="changePage(pagination.currentPage + 1)" 
      :disabled="pagination.currentPage === pagination.totalPages"
      class="px-3 py-1 rounded border" 
      :class="pagination.currentPage === pagination.totalPages ? 'text-gray-400 cursor-not-allowed' : 'text-blue-600 hover:bg-blue-50'"
    >
      <Icon name="chevron-right" />
    </button>
  </div>
</div>
```

## Form Components

### Form Inputs (planned)

Common form input components with built-in validation.

**Basic Pattern:**
```vue
<div>
  <label class="form-label">Field Name</label>
  <input class="form-input" v-model="field" />
  <p v-if="errors.field" class="text-red-500 text-sm mt-1">{{ errors.field }}</p>
</div>
```

## Icons

The template uses Lucide icons through the `nuxt-lucide-icons` module.

**Usage:**
```vue
<Icon name="user" />
<Icon name="lock" size="24" />
<Icon name="chevron-down" class="text-gray-500" />
```

Available icons can be found at [Lucide Icons](https://lucide.dev/icons/).

## Utility Classes

The template provides common utility classes through Tailwind CSS with custom extensions in `assets/css/tailwind.css`:

```css
@layer components {
  .btn {
    @apply px-4 py-2 rounded font-medium focus:outline-none focus:ring-2 focus:ring-opacity-50;
  }
  
  .btn-primary {
    @apply btn bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500;
  }
  
  /* Other utility classes... */
}
```

**Usage:**
```vue
<button class="btn btn-primary">Submit</button>
<button class="btn btn-secondary">Cancel</button>
<div class="card">Card content</div>
```

## Best Practices

1. **Component Organization**
   - Keep components focused on a single responsibility
   - Use composables for shared logic

2. **Naming Conventions**
   - Use PascalCase for component names
   - Use kebab-case for custom events

3. **Props and Events**
   - Document props with proper types and defaults
   - Use events for child-to-parent communication

4. **Styling**
   - Use Tailwind classes for most styling
   - Create custom utility classes for repeated patterns

5. **Component Communication**
   - For complex state, use Pinia stores
   - For simple parent-child communication, use props and events