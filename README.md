# Nuxt 3 Tailwind Starter Template

A clean, minimal starter template for Nuxt 3 applications with Tailwind CSS.

## Features

- 🚀 [Nuxt 3](https://nuxt.com/) - The Vue Framework
- 💨 [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- 🔄 CRUD Architecture - Built-in service layer and composables
- 🌐 i18n - Internationalization support
- 🔐 Authentication - Basic auth setup
- 📱 Responsive - Mobile-friendly design
- 🧩 Reusable Components - Common UI components
- 📝 Form Handling - Validation with Yup
- 🧪 Mock API - Built-in mock services for demo mode

## Architecture

This template implements a clean service layer architecture:

1. **Service Layer** - API communication with a factory pattern
2. **Composables** - Reusable Vue composition functions
3. **Components** - Modular UI components
4. **Pages** - Route-based Vue components

## Getting Started

```bash
# Clone the repository
git clone https://github.com/efesozen/vue-starter-template.git

# Navigate to the project
cd vue-starter-template

# Install dependencies
npm install

# Start development server
npm run dev
```

## Directory Structure

```
├── assets/            # Static assets
├── components/        # Vue components 
│   ├── Common/        # Reusable UI components
│   └── Filter/        # Filter components
├── composables/       # Vue composables
├── layouts/           # Page layouts
├── middleware/        # Route middleware
├── pages/             # Application pages
│   └── examples/      # Example implementations
├── plugins/           # Nuxt plugins
│   └── mock/          # Mock services for demo mode
├── public/            # Public static assets
├── schemas/           # Validation schemas
├── services/          # API services
└── stores/            # Pinia stores
```

## Example Data Model

The template includes an example "Post" data model to demonstrate:
- List view with pagination and filtering
- Detail view
- Create/edit forms
- Form validation
- Service integration

## Mock API for Development

This template includes a built-in mock API for development and demo purposes. 

### Features
- No backend required for initial development
- Realistic API responses with proper structure
- Support for CRUD operations
- Pagination, filtering, and search
- Mock authentication

### Usage
Mock API is enabled by default for easier getting started. To use:

1. Login with demo credentials:
   - Email: `john@example.com`
   - Password: any value will work

2. Use the Posts example to see CRUD operations in action

### Switching Between Mock and Real API
You can toggle between mock and real API in `nuxt.config.ts`:

```js
runtimeConfig: {
  public: {
    useMockApi: true, // Set to false to use real API
  }
}
```

Or using environment variables:
```
USE_MOCK_API=false npm run dev
```

## Documentation

For detailed documentation, see the `/docs` directory:

- [Getting Started](./docs/GETTING_STARTED.md)
- [Architecture](./docs/ARCHITECTURE.md)
- [Components](./docs/COMPONENTS.md)
- [Mock API](./docs/MOCK_API.md)
- [Extending the Template](./docs/EXTENDING.md)

## License

MIT