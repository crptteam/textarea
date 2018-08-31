import {
  getComponentProps,
} from '@crpt/react-utils';

import {
  TextAreaPropTypes,
  TextAreaDefaultProps,
} from './TextArea.types';

const TextArea = (props) => {
  const componentProps = getComponentProps(TextArea, props);

  const { render, ...passProps } = componentProps;

  return render(passProps);
};

TextArea.displayName = 'TextArea';

TextArea.propTypes = TextAreaPropTypes;

TextArea.defaultProps = TextAreaDefaultProps;

export default TextArea;
