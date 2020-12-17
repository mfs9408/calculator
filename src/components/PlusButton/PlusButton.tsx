import React from 'react';
import { Button } from '@material-ui/core';
import useStyles from '../commonStyles';
import { useHandleOperatorButtonClick } from '../../handlers';

const PlusButton = () => {
  const classes = useStyles();
  const handleOperatorButtonClick = useHandleOperatorButtonClick('Plus');

  return (
    <Button className={classes.button} onClick={handleOperatorButtonClick}>
      +
    </Button>
  );
};

export default PlusButton;
