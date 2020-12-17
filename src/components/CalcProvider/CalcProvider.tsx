import React, {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useState,
} from 'react';

export enum Operator {
  Plus,
  Minus,
  Multiple,
  Divide,
}

export type OperatorUnion = keyof typeof Operator;

interface CalcContextValue {
  operator: Operator | null;
  firstOperand: string | null;
  secondOperand: string | null;
  setFirstOperand: Dispatch<SetStateAction<string | null>>;
  setSecondOperand: Dispatch<SetStateAction<string | null>>;
  setOperator: Dispatch<SetStateAction<Operator | null>>;
  displayText: string;
}

const initialState = {
  operator: null,
  firstOperand: null,
  secondOperand: null,
  setFirstOperand: () => {},
  setSecondOperand: () => {},
  setOperator: () => {},
  displayText: '0',
};

export const CalcContext = createContext<CalcContextValue>(initialState);

const CalcProvider = ({ children }: PropsWithChildren<{}>) => {
  const [firstOperand, setFirstOperand] = useState<string | null>(null);
  const [secondOperand, setSecondOperand] = useState<string | null>(null);
  const [operator, setOperator] = useState<Operator | null>(null);

  const displayText = firstOperand || '0';

  return (
    <CalcContext.Provider
      value={{
        operator,
        firstOperand,
        secondOperand,
        setFirstOperand,
        setSecondOperand,
        setOperator,
        displayText,
      }}
    >
      {children}
    </CalcContext.Provider>
  );
};

export default CalcProvider;
