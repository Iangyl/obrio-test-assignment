import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { APP_ROUTES } from 'utils/constants';

import PageWrapper from 'components/PageWrapper/PageWrapper';
import LoadingBody from 'components/LoadingComponents/LoadingBody/LoadingBody';
import LoadingHead from 'components/LoadingComponents/LoadingHead/LoadingHead';

import { Theme } from 'components/PageWrapper/PageWrapper.types';

const Loading = () => {
  let theme = 'light' as Theme;
  const navigate = useNavigate();
  const location = useLocation();
  if (location.pathname === '/loading') theme = 'dark';

  useEffect(() => {
    const timeoutId = setTimeout(
      () => navigate(APP_ROUTES.RELATIONSHIP_Q),
      3000
    );
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <PageWrapper theme={theme}>
      <LoadingHead />
      <LoadingBody />
    </PageWrapper>
  );
};

export default Loading;
