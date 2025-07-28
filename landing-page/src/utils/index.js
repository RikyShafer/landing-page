// Utility function to create page URLs
export const createPageUrl = (pageName) => {
  const routes = {
    Home: '/',
    About: '/about',
    Blog: '/blog',
    FAQ: '/faq',
    Contact: '/contact'
  };
  
  return routes[pageName] || '/';
};

// You can add more utility functions here as needed
export default {
  createPageUrl
};