import { useState, useEffect } from 'react';
import HomePage from './pages/HomePage';
import TermsPage from './pages/TermsPage';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'terms'>('home');

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path === '/terms') {
        setCurrentPage('terms');
      } else {
        setCurrentPage('home');
      }
    };

    handlePopState();
    window.addEventListener('popstate', handlePopState);

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      if (link && link.href) {
        const url = new URL(link.href);
        if (url.origin === window.location.origin && !url.hash) {
          if (url.pathname === '/terms') {
            e.preventDefault();
            window.history.pushState({}, '', '/terms');
            setCurrentPage('terms');
            window.scrollTo(0, 0);
          } else if (url.pathname === '/') {
            e.preventDefault();
            window.history.pushState({}, '', '/');
            setCurrentPage('home');
            window.scrollTo(0, 0);
          }
        }
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return currentPage === 'terms' ? <TermsPage /> : <HomePage />;
}

export default App;
