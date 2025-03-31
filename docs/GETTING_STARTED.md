# Getting Started

This guide will help you get up and running with the Nuxt 3 Tailwind Starter Template.

## Prerequisites

Before you begin, make sure you have the following installed:

- Node.js (v16.0.0 or higher)
- npm or yarn

## Installation

1. Clone or download the template:

```bash
# Clone from repository
git clone https://github.com/efesozen/vue-starter-template.git my-project

# Or create a new repository from this template on GitHub
# Then clone your new repository
```

2. Navigate to the project directory:

```bash
cd my-project
```

3. Install dependencies:

```bash
npm install
# or
yarn install
```

## Development Server

Start the development server:

```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:3000`.

## Exploring the Template

Here's a quick tour to help you get familiar with the template:

### 1. Home Page

The main dashboard is at `/` (the index page). It demonstrates:
- Layout with sidebar and header
- Dashboard cards and statistics
- Basic UI components

### 2. Example CRUD

The Posts example at `/examples/posts` shows:
- Data listing with filtering and pagination
- Creating, editing, and deleting records
- Form validation
- API integration

### 3. Authentication

The `/login` page demonstrates:
- Form handling with validation
- Authentication flow
- Redirects based on authentication state

## Working with Mock API

By default, the template uses a mock API for demonstration purposes, allowing you to develop without a real backend.

### Using Demo Credentials

1. Navigate to the login page at `/login`
2. Use these credentials:
   - Email: `john@example.com`
   - Password: any value will work

### Switching to a Real API

When you're ready to connect to a real API:

1. Update the API base URL in `nuxt.config.ts`:

```javascript
runtimeConfig: {
  public: {
    apiBase: 'https://your-real-api.com',
    useMockApi: false,
  }
}
```

2. Make sure your real API follows the same response structure expected by the template.

## Project Structure

Here's a breakdown of the key directories and their purpose:

```
├── assets/           # CSS and static assets
├── components/       # Vue components
├── composables/      # Reusable Vue composition functions
├── docs/             # Documentation
├── layouts/          # Page layouts
├── middleware/       # Navigation guards
├── pages/            # Application pages and routes
├── plugins/          # Nuxt plugins
│   └── mock/         # Mock API implementation
├── public/           # Public static files
├── schemas/          # Validation schemas
├── services/         # API services
└── stores/           # Pinia stores
```

## Command Reference

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Generate static site
npm run generate

# Lint code
npm run lint
```

## Next Steps

Here are some suggested next steps after getting familiar with the template:

1. **Customize the Branding**: Update the logo, colors, and other branding elements.

2. **Add Your Own Models**: Follow the patterns in the Posts example to create your own data models.

3. **Set Up Your API**: Either implement a real backend API or extend the mock API for your needs.

4. **Adjust the Authentication**: Configure the authentication to work with your auth provider.

5. **Learn More**: Dive deeper into the [Architecture Documentation](./ARCHITECTURE.md) and [Component Documentation](./COMPONENTS.md).

## Troubleshooting

### Common Issues

#### Module Not Found Errors
If you encounter module not found errors, try:
```bash
npm install
npm run dev
```

#### Mock API Not Working
If the mock API isn't working as expected:
1. Check that `useMockApi` is set to `true` in `nuxt.config.ts`
2. Make sure you've run `npm install` to install all dependencies
3. Try restarting the development server

#### Other Issues
For other issues, check:
1. Ensure Node.js version is compatible (v16+)
2. Check console for specific error messages
3. Review the Nuxt 3 documentation for general Nuxt issues