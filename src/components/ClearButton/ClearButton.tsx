import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import { ContextStore } from "../CalcProvider/CalcProvider";

const ClearButton = () => {
  const { clearAllFunction, cleanButtonName } = useContext(ContextStore);

  return (
    <Button onClick={() => clearAllFunction()}>
      {cleanButtonName ? "AC" : "C"}
    </Button>
  );
};

export default ClearButton;
