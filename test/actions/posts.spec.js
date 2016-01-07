import { expect } from 'chai';
import { ADD_POST } from '../../src/actionTypes';
import { addPost } from '../../src/actions/posts';

describe('post actions', () => {
  it('addPost should create ADD_POST action', () => {
    expect(addPost('Testing addPost')).to.deep.equal({
      type: ADD_POST,
      postContent: 'Testing addPost'
    });
  });
});
