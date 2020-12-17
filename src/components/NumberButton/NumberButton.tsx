import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import { CalcContext } from '../CalcProvider/CalcProvider';

type NumberButtonProps = {
  buttonValue: number;
};

const NumberButton = ({ buttonValue }: NumberButtonProps) => {
  const { setFirstOperand, firstOperand } = useContext(CalcContext);

  const handleNumberButtonClick = () => {
    setFirstOperand(
      firstOperand !== null && firstOperand !== '0'
        ? `${firstOperand + buttonValue}`
        : buttonValue.toString()
    );
  };

  return <Button onClick={handleNumberButtonClick}>{buttonValue}</Button>;
};

export default NumberButton;
