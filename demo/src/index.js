import React from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';
import { TextArea } from '../../src';

const customRender = ({ as, ...props }) => (
  <div>
    <div>custom render</div>
    <textarea {...props} />
  </div>
);

class CustomComponent extends React.Component {
  state = {
    value: 'hello',
  };

  onChange = e => this.setState({ value: e.target.value });

  render() {
    return (
      <div>
        <div>Custom Component:</div>
        <TextArea value={this.state.value} onChange={this.onChange} />
      </div>
    );
  }
}

const Demo = () => (
  <React.Fragment>
    <div>default textarea</div>
    <TextArea defaultValue="hello" />
    <hr />
    <div>input with "as" styled component</div>
    <TextArea as={styled.textarea``} defaultValue="hello" />
    <hr />
    <div>input with "as" custom component</div>
    <TextArea as={CustomComponent} />
    <hr />
    <div>input with "as" object</div>
    <TextArea as={{ default: 'textarea' }} variant="default" defaultValue="hello" />
    <hr />
    <div>disabled</div>
    <TextArea disabled defaultValue="hello" />
    <hr />
    <div>value as func</div>
    <TextArea disabled defaultValue={() => 'hello'} />
    <hr />
  </React.Fragment>
);

render(
  <Demo />,
  document.querySelector('#demo'),
);
