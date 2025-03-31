# Mock API Documentation

This document explains how the mock API system works and how to use it effectively in development.

## Overview

The mock API system simulates a backend API without requiring a real server. It provides:

1. Sample data for testing and development
2. Realistic API behavior including pagination, filtering, and error handling
3. Simulated network delay for a more realistic experience
4. Authentication simulation with user sessions

## How It Works

The mock API is implemented through several components:

### 1. Mock Data Store

Located in `plugins/mock/mockData.ts`, this file contains the sample data used by mock services:

```typescript
// Mock data store for demo purposes
export const mockData = {
  // Users
  users: [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'admin' },
    // more users...
  ],

  // Posts
  posts: [
    { 
      id: 1, 
      title: 'Getting Started with Nuxt 3', 
      // more fields...
    },
    // more posts...
  ],

  // Products
  products: [
    // product data...
  ],

  // Authentication tokens (for demo)
  tokens: {
    'john@example.com': 'mock-token-john',
    // more tokens...
  }
};
```

### 2. Mock Service Implementations

Located in `plugins/mock/mockService.ts` and `plugins/mock/mockAuthService.ts`, these files implement the service interfaces using the mock data:

```typescript
export const createMockCrudService = (resource: string, logger: any) => {
  // Check if the resource exists in mock data
  if (!mockData[resource]) {
    console.warn(`Mock data for resource "${resource}" not found. Creating empty collection.`);
    mockData[resource] = [];
  }

  // Get a reference to the mock data collection
  const collection = mockData[resource];

  return {
    // Service methods that simulate API behavior...
    async fetchAll() {
      // Implementation...
    },
    // More methods...
  };
};
```

### 3. Service Provider

The `plugins/api.ts` file determines whether to use mock or real services:

```typescript
export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  const { $axios, $logger } = nuxtApp;
  
  // Check if we should use mock services
  const useMockApi = config.public.useMockApi || process.env.USE_MOCK_API === 'true';
  
  // Create API services (real or mock)
  const api = {
    posts: useMockApi 
      ? createMockCrudService('posts', $logger)
      : createCrudService($axios, 'posts', $logger),
    // More services...
  };

  // Return API for use in app
  return {
    provide: {
      api,
      useMockApi
    }
  };
});
```

## Using the Mock API

### Enabling/Disabling Mock Mode

Mock mode is enabled by default in the template. To toggle it:

1. In `nuxt.config.ts`:
```javascript
runtimeConfig: {
  public: {
    useMockApi: true, // Change to false to use real API
  }
}
```

2. Using environment variables when starting the development server:
```bash
USE_MOCK_API=false npm run dev
```

### Logging In with Mock Credentials

When mock mode is enabled, you can log in with these credentials:
- Email: `john@example.com`, `jane@example.com`, or `bob@example.com`
- Password: Any value will work (passwords aren't verified in mock mode)

### Demo UI Indicators

The UI shows indicators when in mock mode:
- Login page displays demo credentials
- A banner may appear on certain pages to indicate mock mode

### Extending Mock Data

To add more mock data for a new resource:

1. Add the data to `mockData` in `plugins/mock/mockData.ts`:
```typescript
export const mockData = {
  // Existing resources...
  
  // New resource
  categories: [
    { id: 1, name: 'Category 1' },
    { id: 2, name: 'Category 2' },
    // Add more items...
  ]
};
```

2. Register the service in `plugins/api.ts`:
```typescript
const api = {
  // Existing services...
  
  // New service
  categories: useMockApi 
    ? createMockCrudService('categories', $logger)
    : createCrudService($axios, 'categories', $logger),
};
```

### Mock Service Customization

For custom mock behavior beyond the standard CRUD operations:

1. Create a custom mock service in `plugins/mock/`:
```typescript
// plugins/mock/customMockService.ts
import { mockData } from './mockData';

export const createCustomMockService = (logger: any) => {
  return {
    // Custom methods...
    async specialOperation() {
      try {
        // Custom implementation...
        return { /* response data */ };
      } catch (error) {
        logger.error('specialOperationError', 'customService');
        throw error;
      }
    }
  };
};
```

2. Register it in `plugins/api.ts`:
```typescript
import { createCustomMockService } from './mock/customMockService';

// In the plugin...
const api = {
  // Other services...
  custom: useMockApi
    ? createCustomMockService($logger)
    : customService($axios, $logger),
};
```

## Limitations

The mock API has some limitations to be aware of:

1. **No Persistence**: Data is stored in memory and resets when the app is reloaded
2. **Limited Validation**: Only basic validation is performed
3. **Simple Filtering**: Advanced query capabilities may not be fully implemented
4. **No File Uploads**: File upload operations are simulated but don't actually store files