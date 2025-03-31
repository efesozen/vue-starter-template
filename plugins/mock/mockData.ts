// Mock data store for demo purposes
export const mockData = {
  // Users
  users: [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'admin', avatar: 'https://ui-avatars.com/api/?name=John+Doe' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'user', avatar: 'https://ui-avatars.com/api/?name=Jane+Smith' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'user', avatar: 'https://ui-avatars.com/api/?name=Bob+Johnson' },
  ],

  // Posts
  posts: [
    { 
      id: 1, 
      title: 'Getting Started with Nuxt 3', 
      content: 'Nuxt 3 is a powerful framework for building Vue.js applications with server-side rendering capabilities...',
      category: 'Tutorial',
      tags: ['vue', 'nuxt', 'javascript'],
      published: true,
      publishDate: '2023-10-15',
      author: 1
    },
    { 
      id: 2, 
      title: 'Service Layer Architecture', 
      content: 'A service layer provides a clean separation between your UI components and your API or backend services...',
      category: 'Architecture',
      tags: ['architecture', 'patterns', 'javascript'],
      published: true,
      publishDate: '2023-10-20',
      author: 1
    },
    { 
      id: 3, 
      title: 'Advanced Tailwind CSS Techniques', 
      content: 'Learn advanced techniques for customizing Tailwind to create unique designs while maintaining consistency...',
      category: 'CSS',
      tags: ['css', 'tailwind', 'design'],
      published: true,
      publishDate: '2023-10-25',
      author: 2
    },
    { 
      id: 4, 
      title: 'Form Validation Strategies', 
      content: 'Implementing robust form validation is essential for any application. In this post, we explore...',
      category: 'Development',
      tags: ['forms', 'validation', 'yup'],
      published: false,
      publishDate: null,
      author: 2
    },
    { 
      id: 5, 
      title: 'State Management with Pinia', 
      content: 'Pinia provides a more intuitive and type-safe API compared to Vuex, making it easier to manage state...',
      category: 'State Management',
      tags: ['vue', 'pinia', 'state'],
      published: true,
      publishDate: '2023-11-01',
      author: 1
    },
  ],

  // Products
  products: [
    {
      id: 1,
      name: 'Laptop Pro X1',
      description: 'High-performance laptop for professionals',
      price: 1299.99,
      category: 'Electronics',
      inStock: true,
      imageUrl: 'https://via.placeholder.com/300'
    },
    {
      id: 2,
      name: 'Smartphone Z10',
      description: 'Latest smartphone with advanced camera',
      price: 799.99,
      category: 'Electronics',
      inStock: true,
      imageUrl: 'https://via.placeholder.com/300'
    },
    {
      id: 3,
      name: 'Wireless Headphones',
      description: 'Noise-cancelling wireless headphones',
      price: 249.99,
      category: 'Audio',
      inStock: false,
      imageUrl: 'https://via.placeholder.com/300'
    },
  ],

  // Authentication tokens (for demo)
  tokens: {
    'john@example.com': 'mock-token-john',
    'jane@example.com': 'mock-token-jane',
    'bob@example.com': 'mock-token-bob'
  }
};

// Helper to generate a random ID for new items
export const generateId = (collection: any[]) => {
  return Math.max(0, ...collection.map(item => item.id)) + 1;
};