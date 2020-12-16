import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import { ContextStore } from "../CalcProvider/CalcProvider";

type NumberProp = {
  buttonValue: number;
};

const NumberButton = ({ buttonValue }: NumberProp) => {
  const { clickButton } = useContext(ContextStore);

  return (
    <div>
      <Button onClick={() => clickButton(buttonValue)}>{buttonValue}</Button>
    </div>
  );
};

export default NumberButton;
