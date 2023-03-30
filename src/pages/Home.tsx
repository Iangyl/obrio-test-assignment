import { useAppDispatch } from 'redux/hooks';
import { useNavigate } from 'react-router-dom';
import { setGender } from 'redux/user/userSlice';

import { APP_ROUTES } from 'utils/constants';

import PageWrapper from 'components/PageWrapper/PageWrapper';
import HomeHead from 'components/HomeComponents/HomeHead/HomeHead';
import HomeBody from 'components/HomeComponents/HomeBody/HomeBody';
import HomeFooter from 'components/HomeComponents/HomeFooter/HomeFooter';

import { Gender } from 'redux/user/user.types';

const Home = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleClick = (value: Gender) => {
    dispatch(setGender(value));
    navigate(APP_ROUTES.PROFILE);
  };

  return (
    <PageWrapper theme="light">
      <HomeHead />
      <HomeBody onClick={handleClick} />
      <HomeFooter />
    </PageWrapper>
  );
};

export default Home;
