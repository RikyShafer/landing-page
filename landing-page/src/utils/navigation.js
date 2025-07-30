export const createPageUrl = (pageName) => {
  const routes = {
    'Home': '/',
    'About': '/about',
    'Blog': '/blog',
    'FAQ': '/faq',
    'Contact': '/contact'
  };
  
  return routes[pageName] || '/';
};

export const navigationItems = [
  { title: 'בית', url: '/', icon: 'Home' },
  { title: 'אודות', url: '/about', icon: 'User' },
  { title: 'בלוג', url: '/blog', icon: 'FileText' },
  { title: 'שאלות נפוצות', url: '/faq', icon: 'HelpCircle' },
  { title: 'צור קשר', url: '/contact', icon: 'Phone' },
];