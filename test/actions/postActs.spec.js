import { expect } from 'chai';
import { ADD_POST } from '../../src/actionTypes';
import { addPost } from '../../src/actions/postActs';

describe('post actions', () => {
  it('addPost should create ADD_POST action', () => {
    expect(addPost('Use Redux')).to.deep.equal({
      type: ADD_POST,
      inputPost: 'Use Redux'
    });
  });
});
