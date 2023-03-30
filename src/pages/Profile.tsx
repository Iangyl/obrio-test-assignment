import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from 'redux/hooks';
import { APP_ROUTES } from 'utils/constants';
import { setBirthday } from 'redux/user/userSlice';

import PageWrapper from 'components/PageWrapper/PageWrapper';
import ProfileBody from 'components/ProfileComponents/ProfileBody/ProfileBody';
import ProfileHead from 'components/ProfileComponents/ProfileHead/ProfileHead';
import ProfileBottom from 'components/ProfileComponents/ProfileBottom/ProfileBottom';

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [date, setDate] = useState<Date>(new Date());

  const handleChange = (value: Date) => setDate(value);
  const handleClick = () => {
    dispatch(setBirthday(date.toString()));
    navigate(APP_ROUTES.LOADING);
  };

  return (
    <PageWrapper theme="light">
      <ProfileHead />
      <ProfileBody onChange={handleChange} />
      <ProfileBottom onClick={handleClick} />
    </PageWrapper>
  );
};

export default Profile;
