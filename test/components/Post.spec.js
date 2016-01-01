import React from 'react';
import { expect } from 'chai';
import { spy } from 'sinon';
import {
  createRenderer
} from 'react-addons-test-utils';
import Well from 'react-bootstrap';
import Post from '../../src/components/Post';

function setup() {
  const props = {
    postContent: "I posted yesterday" 
  };

  const renderer = createRenderer();

  renderer.render(
    <Post {...props} />
  );

  let output = renderer.getRenderOutput();

  return {
    props: props,
    output: output,
    renderer: renderer
  };
}

describe('components', () => {
  describe('Post', () => {
    it('initial render', () => {
      const { output } = setup();
      expect(output.type).to.equal(Well);
      expect(output.props.children).to.equal("I posted yesterday" );
    });
  });
});




