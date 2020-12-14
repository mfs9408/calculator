import React, {
  createContext,
  PropsWithChildren,
  useState,
} from "react";

interface OtherProps {}
type ContextProps = PropsWithChildren<OtherProps>;

export const ContextStore = createContext<any>(null);

const CalcProvider = ({ children }: ContextProps) => {
  const [number, setNumber] = useState<any>(0);
  const [type, setType] = useState<string>();
  const [firstOperand, setFirstOperand] = useState<number>(0);
  const [secondOperand, setSecondOperand] = useState<number>(0);

  const calculateExpression = (numeric: number) => {
    const stringValue = number.toString() + numeric.toString();
    const numberValue = Number(stringValue);
    setNumber(numberValue);
    setFirstOperand(numberValue);
  };

  const plusFunction = () => {
    setNumber(0);
    setSecondOperand(number);
    setType("+");
  };

  const minusFunction = () => {
    setNumber(0);
    setSecondOperand(number);
    setType("-");
  };

  const divisionFunction = () => {
    setNumber(0);
    setSecondOperand(number);
    setType("/");
  };

  const multiplyFunction = () => {
    setNumber(0);
    setSecondOperand(number);
    setType("*");
  };

  const clearAllFunction = () => {
    setNumber(0);
    setFirstOperand(0);
    setSecondOperand(0);
  };

  const equalFunction = () => {
    switch (type) {
      case "+":
        setNumber(firstOperand + secondOperand);
        break;
      case "-":
        setNumber(secondOperand - firstOperand);
        break;
      case "/":
        setNumber(secondOperand / firstOperand);
        break;
      case "*":
        setNumber(firstOperand * secondOperand);
        break;
    }
  };

  return (
    <ContextStore.Provider
      value={{
        number,
        calculateExpression,
        plusFunction,
        equalFunction,
        minusFunction,
        divisionFunction,
        multiplyFunction,
        clearAllFunction,
        firstOperand,
      }}
    >
      {children}
    </ContextStore.Provider>
  );
};

export default CalcProvider;
