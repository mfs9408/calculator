import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import { ContextStore } from "../CalcProvider/CalcProvider";

type NumberProp = {
  buttonValue: number;
};

const NumberButton = ({ buttonValue }: NumberProp) => {
  const { calculateExpression } = useContext(ContextStore);

  return (
    <div>
      <Button onClick={() => calculateExpression(buttonValue)}>{buttonValue}</Button>
    </div>
  );
};

export default NumberButton;
