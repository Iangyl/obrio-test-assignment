import { Route, Routes } from 'react-router-dom';

import Home from 'pages/Home';
import Profile from 'pages/Profile';
import Loading from 'pages/Loading';

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/loading" element={<Loading />} />
  </Routes>
);

export default App;
