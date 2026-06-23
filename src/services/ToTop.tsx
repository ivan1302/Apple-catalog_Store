import { ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

type Props = {
  children: ReactNode;
};

export const ScrollToTop: React.FC<Props> = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return <>{children}</>;
};
