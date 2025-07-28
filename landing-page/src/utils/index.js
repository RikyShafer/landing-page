// Utility functions for the application

export const createPageUrl = (pageName) => {
  return `/${pageName.toLowerCase()}`;
};

export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('he-IL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};