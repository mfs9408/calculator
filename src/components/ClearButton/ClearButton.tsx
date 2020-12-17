import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import { CalcContext } from "../CalcProvider/CalcProvider";

const ClearButton = () => {
  const {firstOperand, secondOperand, setFirstOperand, setSecondOperand } = useContext(CalcContext);

  const handleClearButtonClick = () => {
    setFirstOperand('0');
    setSecondOperand('0');
  };

  return (
    <Button onClick={handleClearButtonClick}>
      {firstOperand === '0' && secondOperand === '0' ? "AC" : "C"}
    </Button>
  );
};

export default ClearButton;
