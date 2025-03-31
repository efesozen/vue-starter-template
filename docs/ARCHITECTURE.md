# Architecture Documentation

This document provides an in-depth overview of the architecture patterns used in this Nuxt 3 starter template.

## Service Layer Architecture

The template implements a clean service layer architecture that separates API communication from UI components.

### Key Components

#### 1. Services (~/services/*)

Services handle all API communication and are designed as factory functions that receive dependencies (axios, logger).

**Example: crudService.ts**
```typescript
export default ($axios: any, resource: string, logger: any) => ({
  async fetchAll() {
    try {
      const response = await $axios.get(`/${resource}`);
      return response;
    } catch (error) {
      logger.error("fetchError", resource);
      throw error;
    }
  },
  // ... other methods
});
```

Services create a contract that can be implemented by either real API services or mocks:

- **Real API implementation**: Uses Axios to make HTTP requests
- **Mock implementation**: Uses in-memory data

#### 2. Composables (~/composables/*)

Composables provide a reactive layer over services using Vue's Composition API:

**Example: useCrud.ts**
```typescript
export function useCrud(resource: string) {
  const items = ref([]);
  const item = ref([]);
  const { $api }: any = useNuxtApp();
  const model = $api[`${resource}`];

  const fetchItems = async () => {
    const { data } = await model.fetchAll();
    items.value = data.items;
  };
  // ... other methods
  
  return {
    items,
    item,
    fetchItems,
    // ... other methods
  };
}
```

#### 3. Plugins (~/plugins/*)

Plugins wire everything together:

- **api.ts**: Registers and provides services
- **axios.ts**: Configures axios with interceptors
- **logger.ts**: Provides logging functions

#### 4. Stores (~/stores/*)

Pinia stores manage global state:

- **auth.js**: Manages authentication state and credentials

## Data Flow

The typical data flow in this architecture is:

1. Component calls composable (e.g., `useCrud('posts').fetchItems()`)
2. Composable calls API service via `$api`
3. Service makes HTTP request (real API) or returns mock data
4. Composable updates reactive state
5. Component reactively updates UI based on state changes

## Mock API Architecture

The mock API mirrors the real API structure:

1. **Mock Data Store (~/plugins/mock/mockData.ts)**:
   - Contains sample data for resources like posts, users, etc.

2. **Mock Services (~/plugins/mock/mockService.ts)**:
   - Implements the same interface as real services
   - Simulates API behavior (filtering, pagination, etc.)
   - Adds realistic delay for better simulation

3. **API Provider (~/plugins/api.ts)**:
   - Dynamically selects between real and mock services
   - Controlled via configuration or environment variables

## Directory Structure Logic

The directory structure follows Nuxt conventions with additional organization for better maintainability:

- **components/**: Organized by feature and type
  - **Common/**: Reusable UI components 
  - **Filter/**: Components for filtering data

- **pages/**: Follows Nuxt file-based routing
  - **examples/**: Demo implementations

- **composables/**: Shared reactive logic 

- **services/**: API service modules

- **schemas/**: Validation schemas using Yup

- **plugins/**: Nuxt plugins and mock implementation

## Configuration

Configuration is managed through Nuxt's runtime config system in `nuxt.config.ts`:

```javascript
runtimeConfig: {
  public: {
    apiBase: process.env.API_BASE || 'http://localhost:3000/api',
    useMockApi: process.env.USE_MOCK_API === 'true' || true,
  }
}
```

This allows for environment-specific settings.