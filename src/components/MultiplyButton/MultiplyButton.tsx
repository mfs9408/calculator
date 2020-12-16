import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import { ContextStore } from "../CalcProvider/CalcProvider";

const MultiplyButton = () => {
  const { calculationFunction } = useContext(ContextStore);

  return <Button onClick={() => calculationFunction("*")}>X</Button>;
};

export default MultiplyButton;
