import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import { ContextStore } from "../CalcProvider/CalcProvider";

const MultiplyButton = () => {
  const { multiplyFunction } = useContext(ContextStore);

  return <Button onClick={() => multiplyFunction()}>X</Button>;
};

export default MultiplyButton;
