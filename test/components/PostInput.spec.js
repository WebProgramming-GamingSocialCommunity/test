import React from 'react';
import { expect } from 'chai';
import { spy } from 'sinon';
import {
  createRenderer
} from 'react-addons-test-utils';
import PostInput from '../../src/components/PostInput';
import { Input, Button } from 'react-bootstrap';

function setup(propOverrides) {
  const props = Object.assign({
    onSave: spy(),
    postContent: 'Testing PostInput',
    placeholder: 'What do you want to post?'
  }, propOverrides);

  const renderer = createRenderer();
  renderer.render(<PostInput {...props} />);
  const output = renderer.getRenderOutput();

  return {
    props: props,
    output: output,
    renderer: renderer
  };
}

describe('components', () => {
  describe('PostInput', () => {
    it('initial render', () => {
      const { output } = setup();
      expect(output.type).to.equal('div');

      const [ input, button ] = output.props.children;
      expect(input.type).to.equal(Input);
      expect(input.props.type).to.equal('textarea');
      
      expect(button.type).to.equal(Button);
      expect(button.props.children).to.equal('post');
    });

    it('should render correctly', () => {
      const { output } = setup();
      const input = output.props.children[0];
      expect(input.props.placeholder).to.equal('What do you want to post?');
      expect(input.props.label).to.equal('Update Status');
      expect(input.props.value).to.equal('Testing PostInput');
      expect(input.props.className).to.equal('new-post');
    });

    it('should update value on change', () => {
      const { output, renderer } = setup();
      const input = output.props.children[0];
      input.props.onChange({ target: { value: 'Testing onchange' } });
      const updated = renderer.getRenderOutput();
      expect(updated.props.children[0].props.value).to.equal('Testing onchange');
    });

    it('should call onSave and reset state after button clicked', () => {
      const { output, props, renderer } = setup();
      const button = output.props.children[1];
      button.props.onClick();
      expect(props.onSave.calledWith('Testing PostInput')).to.be.ok;

      const updated =renderer.getRenderOutput();
      expect(updated.props.children[0].props.value).to.equal("");
    });
  });
});
