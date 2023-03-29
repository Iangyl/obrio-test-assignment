import { useLocation } from 'react-router-dom';

import PageWrapper from 'components/PageWrapper/PageWrapper';
import LoadingBody from 'components/LoadingComponents/LoadingBody/LoadingBody';
import LoadingHead from 'components/LoadingComponents/LoadingHead/LoadingHead';

import { Theme } from 'components/PageWrapper/PageWrapper.types';

const Loading = () => {
  let theme = 'light' as Theme;
  const location = useLocation();
  if (location.pathname === '/loading') theme = 'dark';

  return (
    <PageWrapper theme={theme}>
      <LoadingHead />
      <LoadingBody />
    </PageWrapper>
  );
};

export default Loading;
