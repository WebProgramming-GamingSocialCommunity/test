import { ADD_POST} from '../actionTypes';

const initialState = [
  {
    postContent: 'First post'
  }
];

export default function postsReducer(state = initialState, action) {
  if(action.type === 'ADD_POST') {
    return [{
        postContent: action.inputPost
      },
      ...state  
    ];
  } else {
    return state;
  }
}
