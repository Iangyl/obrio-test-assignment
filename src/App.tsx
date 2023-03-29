import ArrowIcon from 'assets/Arrow';
import ManIcon from 'assets/Man';
import WomanIcon from 'assets/Woman';
import ButtonBottom from 'components/GenderButton/ButtonBottom/ButtonBottom';
import GenderButton from 'components/GenderButton/GenderButton';
import React from 'react';

function App() {
  return (
    <div className="App">
      <GenderButton btnType="male" />
      <GenderButton btnType="female" />
    </div>
  );
}

export default App;
