import { Route, Routes } from 'react-router-dom';

import { APP_ROUTES } from 'utils/constants';

import Home from 'pages/Home';
import Profile from 'pages/Profile';
import Loading from 'pages/Loading';
import Summary from 'pages/Summary';
import Conclusion from 'pages/Conclusion';
import Parent from 'pages/Questions/Parent';
import Relationship from 'pages/Questions/Relationship';
import DecisionCenter from 'pages/Questions/DecisionCenter';
import LastRelationship from 'pages/Questions/LastRelationship';
import DescribingStatement from 'pages/Questions/DescribingStatement';

const App = () => (
  <Routes>
    <Route path={APP_ROUTES.HOME} element={<Home />} />
    <Route path={APP_ROUTES.PROFILE} element={<Profile />} />
    <Route path={APP_ROUTES.LOADING} element={<Loading />} />
    <Route path={APP_ROUTES.RELATIONSHIP_Q} element={<Relationship />} />
    <Route path={APP_ROUTES.PARENT_Q} element={<Parent />} />
    <Route
      path={APP_ROUTES.LAST_RELATIONSHIP_Q}
      element={<LastRelationship />}
    />
    <Route
      path={APP_ROUTES.DESCRIBING_STATEMENT_Q}
      element={<DescribingStatement />}
    />
    <Route path={APP_ROUTES.DECISION_CENTER_Q} element={<DecisionCenter />} />
    <Route path={APP_ROUTES.CONCLUSION} element={<Conclusion />} />
    <Route path={APP_ROUTES.SUMMARY} element={<Summary />} />
  </Routes>
);

export default App;
