import PropTypes from 'prop-types';

import { TextAreaWrapper } from '../../styled';

export const TextAreaPropTypes = {
  as: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.symbol,
    PropTypes.shape({}),
  ]),

  getProps: PropTypes.func,

  value: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
  ]),
  defaultValue: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
  ]),

  className: PropTypes.string,
  style: PropTypes.shape({}),
  theme: PropTypes.shape({}).isRequired,
};

export const TextAreaDefaultProps = {
  as: TextAreaWrapper,
  theme: {},
};
