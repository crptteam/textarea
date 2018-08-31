import React from 'react';
import {
  getElementType,
} from '@crpt/react-utils';

const render = (props) => {
  const ElementType = getElementType(props);

  return (
    <ElementType {...props} />
  );
};

export default render;
