import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import { ContextStore } from "../CalcProvider/CalcProvider";

const PlusButton = () => {
  const { plusFunction } = useContext(ContextStore);

  return (
    <Button style={{ background: "#ff952d" }} onClick={() => plusFunction()}>
      +
    </Button>
  );
};

export default PlusButton;
