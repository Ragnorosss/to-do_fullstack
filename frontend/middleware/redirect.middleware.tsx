import useAuthStore from 'store/zustand';
import { useNavigate, useLocation } from 'react-router';
import { useEffect } from 'react';
import type { PropsWithChildren } from 'react';

export const RedirectMiddleware = ({ children }: PropsWithChildren) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuth, isHydrated, setIsHydrate } = useAuthStore();

  const isToDoPage = location.pathname.startsWith('/to-do');
  const isAuthPage = location.pathname.startsWith('/auth/');

  useEffect(() => {
    console.log('isHydrated:', isHydrated, setIsHydrate(true));
    console.log('isAuth:', isAuth);
    console.log('Location:', location.pathname);

    if (!isHydrated) {
      console.log('isHydrated is false, skipping redirection.');
      return;
    }

    if (!isAuth && isToDoPage) {
      console.log('Redirecting to login...');
      navigate('/auth/log-in', { replace: true, state: { from: location } });
    }

    if (isAuth && isAuthPage) {
      console.log('Redirecting to home...');
      navigate('/', { replace: true });
    }
  }, [isAuth, isToDoPage, isAuthPage, isHydrated, location, navigate]);

  if (!isHydrated) {
    console.log('isHydrated is false, returning null to prevent render');
    return null; 
  }

  return children;
};
