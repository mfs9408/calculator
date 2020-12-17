import React from 'react';
import { Button } from '@material-ui/core';
import useStyles from '../commonStyles';
import { useHandleOperatorButtonClick } from '../../handlers';

const MinusButton = () => {
  const classes = useStyles();
  const handleOperatorButtonClick = useHandleOperatorButtonClick('Minus');

  return (
    <Button className={classes.button} onClick={handleOperatorButtonClick}>
      -
    </Button>
  );
};

export default MinusButton;
