import { ADD_POST } from '../actionTypes';

export function addPost(inputPost){
  return{
    type: ADD_POST,
    inputPost
  };
}
