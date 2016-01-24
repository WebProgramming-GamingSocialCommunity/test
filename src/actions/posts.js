export const ADD_POST = 'ADD_POST';

export function addPost(postContent){
  return{
    type: ADD_POST,
    postContent
  };
}

export function addPostToServer(postContent) {
  return(dispatch) => {
    fetch('/api/posts', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        postContent,
      })
    })
    .then(res => res.json() )
    .then(data => {
      dispatch(addPost(data.postContent));
    });
  };
}
  
