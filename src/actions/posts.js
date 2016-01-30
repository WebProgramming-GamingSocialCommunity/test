import { ADD_POST, POST_GET ,PI_COMPLETE, TPOST_GET} from '../actionTypes'

export function addPost(postContent){
  return{
    type: ADD_POST,
    postContent,
  };
}


export function getTPost(totalpost) {
	return{
	type: TPOST_GET,
totalpost
};
}


export function getPost(userpost){
	return{
	type: POST_GET,
	userpost
};
}

export function postin() {
	return{
	type: PI_COMPLETE,
	status:true
};
}

export function addPostToServer(postContent,id) {
let temp ={
	post:{
	title: postContent.title,
	content: postContent.content,
	user_id:id
}
}  
return(dispatch) => {
    fetch('http://localhost:8080/v1/posts', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(temp)
    })
    .then(res => res.json() )
    .then(data => {
let temp={content:data.content,title:data.title};
      dispatch(addPost(temp));
    });
  };
}
  

export function getInitPost(id) {
	return(dispatch) => {
		fetch('http://localhost:8080/v1/users/'+(id+''))
.then(res => res.json())
.then(data => {
	dispatch(getPost(data.posts));
	dispatch(postin());
});
};
}

export function getTotalPost(){
	return(dispatch) => {
	fetch('http://localhost:8080/v1/posts')
.then(res => res.json())
.then(data=> {
	dispatch(getTPost(data));
});
};
}
