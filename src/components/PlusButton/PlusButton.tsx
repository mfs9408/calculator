import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import { ContextStore } from "../CalcProvider/CalcProvider";
import useStyles from "../commonStyles";

const PlusButton = () => {
  const { calculationFunction } = useContext(ContextStore);
  const classes = useStyles();

  return (
    <Button className={classes.button} onClick={() => calculationFunction("+")}>
      +
    </Button>
  );
};

export default PlusButton;
