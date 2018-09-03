import React from 'react';

import { set } from 'lodash';

import {
  getComponentProps,
  getElementType,
  getChildren,
} from '@crpt/react-utils';

import {
  TextAreaPropTypes,
  TextAreaDefaultProps,
} from './TextArea.types';

const TextArea = (props) => {
  const componentProps = getComponentProps(TextArea, props);

  const ElementType = getElementType(componentProps);

  getChildren(componentProps, {
    shorthand: ['value', 'defaultValue'],
    updateProps: (propValue, propName, ownProps) => {
      set(ownProps, propName, propValue);
    },
  });

  return (
    <ElementType {...componentProps} />
  );
};

TextArea.displayName = 'TextArea';

TextArea.propTypes = TextAreaPropTypes;

TextArea.defaultProps = TextAreaDefaultProps;

export default TextArea;
