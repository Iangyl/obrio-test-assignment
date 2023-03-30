import { Route, Routes } from 'react-router-dom';

import { APP_ROUTES } from 'utils/constants';

import Home from 'pages/Home';
import Profile from 'pages/Profile';
import Loading from 'pages/Loading';
import Question from 'pages/Question';
import Conclusion from 'pages/Conclusion';
import Summary from 'pages/Summary';

const App = () => (
  <Routes>
    <Route path={APP_ROUTES.HOME} element={<Home />} />
    <Route path={APP_ROUTES.PROFILE} element={<Profile />} />
    <Route path={APP_ROUTES.LOADING} element={<Loading />} />
    <Route path={APP_ROUTES.QUESTIONS} element={<Question />} />
    <Route path={APP_ROUTES.CONCLUSION} element={<Conclusion />} />
    <Route path={APP_ROUTES.SUMMARY} element={<Summary />} />
  </Routes>
);

export default App;
