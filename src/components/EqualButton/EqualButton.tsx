import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import { ContextStore } from "../CalcProvider/CalcProvider";

const EqualButton = () => {
  const { equalFunction } = useContext(ContextStore);

  return (
    <Button style={{ background: "#ff952d" }} onClick={() => equalFunction()}>
      =
    </Button>
  );
};

export default EqualButton;
