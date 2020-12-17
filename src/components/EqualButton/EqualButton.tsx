import React, { useContext } from 'react';
import { Button } from '@material-ui/core';
import { CalcContext } from '../CalcProvider/CalcProvider';
import calculate from '../../calculate';

const EqualButton = () => {
  const {
    firstOperand,
    secondOperand,
    setFirstOperand,
    setSecondOperand,
    operator,
  } = useContext(CalcContext);

  const handleClick = () => {
    if (!operator) return;

    if (firstOperand && secondOperand) {
      setFirstOperand(
        calculate(+firstOperand, +setSecondOperand, operator).toString()
      );
    }

    setSecondOperand(null);
  };

  return (
    <Button style={{ background: '#ff952d' }} onClick={handleClick}>
      =
    </Button>
  );
};

export default EqualButton;
