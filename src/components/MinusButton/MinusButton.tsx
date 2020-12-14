import React, {useContext} from "react";
import { Button } from "@material-ui/core";
import {ContextStore} from "../CalcProvider/CalcProvider";

const MinusButton = () => {
    const { minusFunction } = useContext(ContextStore);

  return (
    <Button style={{ background: "#ff952d" }} onClick={() => minusFunction()}>
      -
    </Button>
  );
};

export default MinusButton;
