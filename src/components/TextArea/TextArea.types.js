import PropTypes from 'prop-types';

import { TextAreaWrapper } from '../../styled';

import { render } from '../../lib';

export const TextAreaPropTypes = {
  as: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.symbol,
    PropTypes.shape({}),
  ]),

  getProps: PropTypes.func,
  render: PropTypes.func,

  className: PropTypes.string,
  style: PropTypes.shape({}),
  theme: PropTypes.shape({}).isRequired,
};

export const TextAreaDefaultProps = {
  as: TextAreaWrapper,
  render,
  theme: {},
};
