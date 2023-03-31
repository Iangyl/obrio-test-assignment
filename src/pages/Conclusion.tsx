import { useLocation, useNavigate } from 'react-router-dom';

import PageWrapper from 'components/PageWrapper/PageWrapper';
import ConclusionHead from 'components/ConclusionComponents/ConclusionHead/ConclusionHead';
import ConclusionBody from 'components/ConclusionComponents/ConclusionBody/ConclusionBody';

import { Theme } from 'components/PageWrapper/PageWrapper.types';
import { APP_ROUTES } from 'utils/constants';

const Conclusion = () => {
  let theme = 'light' as Theme;
  const navigate = useNavigate();
  const location = useLocation();
  if (location.pathname === '/conclusion') theme = 'dark';

  const handleNext = () => navigate(APP_ROUTES.SUMMARY);
  const handleBack = () => navigate(-1);

  return (
    <PageWrapper theme={theme}>
      <ConclusionHead />
      <ConclusionBody handleNext={handleNext} handleBack={handleBack} />
    </PageWrapper>
  );
};

export default Conclusion;
