import React from 'react';
import { Button } from '@material-ui/core';
import { useHandleOperatorButtonClick } from '../../handlers';

const MultiplyButton = () => {
  const handleOperatorButtonClick = useHandleOperatorButtonClick('Multiple');

  return <Button onClick={handleOperatorButtonClick}>X</Button>;
};

export default MultiplyButton;
