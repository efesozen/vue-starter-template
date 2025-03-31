# Extending the Template

This guide explains how to extend the starter template with new features and customizations.

## Adding a New Resource

To add a new resource (e.g., "Categories"), follow these steps:

### 1. Create a Schema

Create a validation schema in `schemas/categorySchema.ts`:

```typescript
import * as yup from 'yup';

export const categorySchema = yup.object({
  name: yup.string().required('Name is required').min(2, 'Name must be at least 2 characters'),
  description: yup.string(),
  active: yup.boolean().default(true),
});

export type CategoryFormData = yup.InferType<typeof categorySchema>;
```

### 2. Register the API Service

Add the service to your API provider in `plugins/api.ts`:

```typescript
const api = {
  // Existing services...
  categories: useMockApi 
    ? createMockCrudService('categories', $logger)
    : createCrudService($axios, 'categories', $logger),
};
```

### 3. Add Mock Data (for development)

Add sample data in `plugins/mock/mockData.ts`:

```typescript
export const mockData = {
  // Existing mock data...
  
  categories: [
    { 
      id: 1, 
      name: 'Development', 
      description: 'Development related topics',
      active: true
    },
    { 
      id: 2, 
      name: 'Design', 
      description: 'Design related topics',
      active: true
    },
    // Add more sample categories...
  ],
};
```

### 4. Create CRUD Pages

#### List Page
Create `pages/examples/categories/index.vue`:

```vue
<template>
  <div class="container mx-auto p-4">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold">Categories</h1>
      <NuxtLink to="/examples/categories/create" class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Create Category
      </NuxtLink>
    </div>
    
    <!-- Table component -->
    <!-- Pagination component -->
  </div>
</template>

<script setup>
const { $api } = useNuxtApp();
// Use the same patterns as in the posts example
</script>
```

#### Create Page
Create `pages/examples/categories/create.vue`:

```vue
<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-6">Create Category</h1>
    
    <form @submit.prevent="submitForm" class="bg-white rounded-lg shadow p-6">
      <!-- Form fields based on your schema -->
    </form>
  </div>
</template>

<script setup>
import { categorySchema } from '~/schemas/categorySchema';
// Use form handling pattern from other examples
</script>
```

#### Edit/Detail Pages
Create similar pages for edit and detail views following the same patterns.

## Adding Custom Functionality

### 1. Create a Custom Service

For specialized functionality beyond CRUD:

```typescript
// services/reportService.ts
export default ($axios: any, logger: any) => ({
  async generateReport(params: any) {
    try {
      const response = await $axios.post('/reports/generate', params);
      return response;
    } catch (error) {
      logger.error("reportGenerationError", "report");
      throw error;
    }
  },
  
  // More methods...
});
```

### 2. Register the Custom Service

Add it to your API provider:

```typescript
import reportService from '~/services/reportService';
import { createMockReportService } from './mock/mockReportService';

// In the plugin...
const api = {
  // Existing services...
  reports: useMockApi
    ? createMockReportService($logger)
    : reportService($axios, $logger),
};
```

### 3. Create a Composable (if needed)

For complex functionality:

```typescript
// composables/useReports.ts
export function useReports() {
  const { $api } = useNuxtApp();
  const report = ref(null);
  const loading = ref(false);
  
  const generateReport = async (params) => {
    loading.value = true;
    try {
      const { data } = await $api.reports.generateReport(params);
      report.value = data.data;
      return data.data;
    } catch (error) {
      console.error('Error generating report:', error);
      throw error;
    } finally {
      loading.value = false;
    }
  };
  
  return {
    report,
    loading,
    generateReport
  };
}
```

## Customizing UI Components

### 1. Create Custom Design Components

Create your own components in the `components/` directory:

```vue
<!-- components/MyCustomCard.vue -->
<template>
  <div class="bg-white rounded-lg shadow overflow-hidden">
    <div class="px-6 py-4 border-b" v-if="title">
      <h3 class="font-bold">{{ title }}</h3>
    </div>
    <div class="p-6">
      <slot></slot>
    </div>
    <div class="px-6 py-4 bg-gray-50" v-if="$slots.footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: ''
  }
});
</script>
```

### 2. Customize Tailwind Theme

Modify `tailwind.config.js` to match your design system:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          // Add your color palette...
          900: '#0c4a6e',
        },
        // Add more custom colors...
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        // Add more fonts...
      },
      // Add more customizations...
    },
  },
  // Other Tailwind config...
};
```

### 3. Add Custom CSS Utilities

Add your own utility classes in `assets/css/tailwind.css`:

```css
@layer components {
  .custom-card {
    @apply bg-white rounded-lg shadow-md p-6 my-4;
  }
  
  /* Add more custom utilities... */
}
```

## Adding Authentication Features

### 1. Extend the Auth Store

Enhance `stores/auth.js` with additional features:

```javascript
export const useAuthStore = defineStore('auth', {
  state: () => ({
    // Existing state...
    permissions: [],
    refreshTokenPromise: null,
  }),
  
  getters: {
    // Existing getters...
    hasPermission: (state) => (permission) => {
      return state.permissions.includes(permission);
    },
  },
  
  actions: {
    // Existing actions...
    async fetchPermissions() {
      // Implementation...
    },
  },
});
```

### 2. Add Role-Based Access Control

Create a permissions system:

```typescript
// composables/usePermissions.ts
export function usePermissions() {
  const authStore = useAuthStore();
  
  const canView = (resource) => {
    return authStore.hasPermission(`view:${resource}`);
  };
  
  const canEdit = (resource) => {
    return authStore.hasPermission(`edit:${resource}`);
  };
  
  // More permission helpers...
  
  return {
    canView,
    canEdit,
    // Export more helpers...
  };
}
```

## Integrating Third-Party Services

### 1. Install Required Packages

```bash
npm install @some-package/service
```

### 2. Create a Plugin

```typescript
// plugins/thirdPartyService.ts
import { SomeService } from '@some-package/service';

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  
  const service = new SomeService({
    apiKey: config.thirdPartyApiKey,
    // More configuration...
  });
  
  return {
    provide: {
      thirdPartyService: service
    }
  };
});
```

### 3. Add to Nuxt Config

```javascript
// nuxt.config.ts
export default defineNuxtConfig({
  // Existing config...
  plugins: [
    // Existing plugins...
    '~/plugins/thirdPartyService.ts'
  ],
  runtimeConfig: {
    thirdPartyApiKey: process.env.THIRD_PARTY_API_KEY,
    // Public keys...
    public: {
      // Existing public keys...
    }
  },
});
```

## Best Practices

1. **Consistent Patterns**: Follow the established patterns for services, composables, and components
2. **Type Safety**: Use TypeScript interfaces and types for better code quality
3. **Component Reuse**: Create generic components for common UI elements
4. **Documentation**: Document new features and custom behavior
5. **Testing**: Add tests for critical functionality