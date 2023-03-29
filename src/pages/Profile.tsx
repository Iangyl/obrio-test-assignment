import PageWrapper from 'components/PageWrapper/PageWrapper';
import ProfileBody from 'components/ProfileComponents/ProfileBody/ProfileBody';
import ProfileHead from 'components/ProfileComponents/ProfileHead/ProfileHead';
import ProfileBottom from 'components/ProfileComponents/ProfileBottom/ProfileBottom';

const Profile = () => {
  return (
    <PageWrapper theme="light">
      <ProfileHead />
      <ProfileBody />
      <ProfileBottom />
    </PageWrapper>
  );
};

export default Profile;
