import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import { ContextStore } from "../CalcProvider/CalcProvider";

const DivisionButton = () => {
  const { calculationFunction } = useContext(ContextStore);

  return <Button onClick={() => calculationFunction("/")}>/</Button>;
};

export default DivisionButton;
