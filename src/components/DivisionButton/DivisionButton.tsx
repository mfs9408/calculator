import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import { ContextStore } from "../CalcProvider/CalcProvider";

const DivisionButton = () => {
  const { divisionFunction } = useContext(ContextStore);

  return <Button onClick={() => divisionFunction()}>/</Button>;
};

export default DivisionButton;
