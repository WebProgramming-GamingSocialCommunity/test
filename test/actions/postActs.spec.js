import { expect } from 'chai';
import { ADD_POST } from '../../src/actionTypes';
import { addPost } from '../../src/actions/postActs';

describe('post actions', () => {
  it('addPost should create ADD_POST action', () => {
    expect(addPost('Testing addPost')).to.deep.equal({
      type: ADD_POST,
      inputPost: 'Testing addPost'
    });
  });
});
