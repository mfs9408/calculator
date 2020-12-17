import React from 'react';
import Calculator from './components/Calculator/Calculator';
import CalcProvider from './components/CalcProvider';

const App = () => {
  return (
    <CalcProvider>
      <Calculator />
    </CalcProvider>
  );
};

export default App;
