import PageWrapper from 'components/PageWrapper/PageWrapper';
import HomeHead from 'components/HomeComponents/HomeHead/HomeHead';
import HomeBody from 'components/HomeComponents/HomeBody/HomeBody';
import HomeFooter from 'components/HomeComponents/HomeFooter/HomeFooter';

const Home = () => (
  <PageWrapper theme="light">
    <HomeHead />
    <HomeBody />
    <HomeFooter />
  </PageWrapper>
);

export default Home;
