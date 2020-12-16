import React, {
  createContext,
  PropsWithChildren,
  useState,
} from "react";
import Example from "../../Example";

interface OtherProps {}
type ContextProps = PropsWithChildren<OtherProps>;

export const ContextStore = createContext<any>(null);

const CalcProvider = ({ children }: ContextProps) => {
  const [enteredNumber, setEnteredNumber] = useState<any>(0);
  const [firstOperand, setFirstOperand] = useState<any>(0);
  const [type, setType] = useState<string | null>(null);

  const clickButton = (num: number) => {
    setEnteredNumber(`${enteredNumber + num}`);
  };

  const handleSetFirstOperand = () => {
    setFirstOperand(enteredNumber);
    setEnteredNumber(0);
  };

  const calculationFunction = (type: string) => {
    if (enteredNumber) {
      handleSetFirstOperand();
      setType(type);
    }
    if (firstOperand) {
      setType(type);
    }
  };

  const clearAll = () => {
    setEnteredNumber(0);
    setFirstOperand(0);
  };

  const equalFunction = () => {
    if (enteredNumber && firstOperand) {
      switch (type) {
        case "+":
          setFirstOperand(parseFloat(enteredNumber) + parseFloat(firstOperand));
          break;
        case "-":
          setFirstOperand(parseFloat(firstOperand) - parseFloat(enteredNumber));
          break;
        case "/":
          setFirstOperand(parseFloat(firstOperand) / parseFloat(enteredNumber));
          break;
        case "*":
          setFirstOperand(parseFloat(enteredNumber) * parseFloat(firstOperand));
          break;
      }
    }
    setEnteredNumber(0);
  };

  // Example();

  return (
    <ContextStore.Provider
      value={{
        enteredNumber,
        firstOperand,
        clickButton,
        calculationFunction,
        equalFunction,
        clearAll,
      }}
    >
      {children}
    </ContextStore.Provider>
  );
};

export default CalcProvider;
