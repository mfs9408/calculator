import React from 'react';
import { Button } from '@material-ui/core';
import { useHandleOperatorButtonClick } from '../../handlers';

const DivisionButton = () => {
  const handleOperatorButtonClick = useHandleOperatorButtonClick('Divide');

  return <Button onClick={handleOperatorButtonClick}>/</Button>;
};

export default DivisionButton;
