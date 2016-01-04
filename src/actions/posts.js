import { ADD_POST } from '../actionTypes';

export function addPost(postContent){
  return{
    type: ADD_POST,
    postContent
  };
}
