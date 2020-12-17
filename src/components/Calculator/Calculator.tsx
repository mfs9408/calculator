import React, { useContext } from "react";
import Grid from "@material-ui/core/Grid";
import ClearButton from "../ClearButton";
import { CalcContext } from "../CalcProvider/CalcProvider";
import useStyles from "./Calculator.styles";
import NumberButton from "../NumberButton";
import PlusButton from "../PlusButton";
import EqualButton from "../EqualButton";
import MinusButton from "../MinusButton/MinusButton";
import DivisionButton from "../DivisionButton";
import MultiplyButton from "../MultiplyButton";

const Calculator = () => {
  const { displayText } = useContext(CalcContext);
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <Grid container justify="flex-end">
        {displayText}
      </Grid>
      <Grid>
        <ClearButton />
        <MultiplyButton />
        <DivisionButton />
        <MinusButton />
      </Grid>
      <Grid container>
        <NumberButton buttonValue={1} />
        <NumberButton buttonValue={2} />
        <NumberButton buttonValue={3} />
        <PlusButton />
      </Grid>
      <Grid container>
        <NumberButton buttonValue={4} />
        <NumberButton buttonValue={5} />
        <NumberButton buttonValue={6} />
        <EqualButton />
      </Grid>
      <Grid container>
        <NumberButton buttonValue={7} />
        <NumberButton buttonValue={8} />
        <NumberButton buttonValue={9} />
        <NumberButton buttonValue={0} />
      </Grid>
    </Grid>
  );
};

export default Calculator;
