import {
  CalcContext,
  Operator,
  OperatorUnion,
} from './components/CalcProvider/CalcProvider';
import { useContext } from 'react';

export const useHandleOperatorButtonClick = (key: OperatorUnion) => {
  const {
    setOperator,
    firstOperand,
    setFirstOperand,
    setSecondOperand,
  } = useContext(CalcContext);

  return () => {
    setOperator(Operator[key]);

    setSecondOperand(firstOperand);
    setFirstOperand('0');
  };
};
