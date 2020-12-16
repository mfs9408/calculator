import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import { ContextStore } from "../CalcProvider/CalcProvider";

const ClearButton = () => {
  const { clearAll, enteredNumber, firstOperand } = useContext(ContextStore);

  return (
    <Button onClick={() => clearAll()}>
      {enteredNumber === 0 && firstOperand === 0 ? "AC" : "C"}
    </Button>
  );
};

export default ClearButton;
