import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import { ContextStore } from "../CalcProvider/CalcProvider";

const ClearButton = () => {
  const { clearAllFunction, firstOperand } = useContext(ContextStore);

  return (
    <Button onClick={() => clearAllFunction()}>
      {firstOperand === 0 ? "AC" : "C"}
    </Button>
  );
};

export default ClearButton;
