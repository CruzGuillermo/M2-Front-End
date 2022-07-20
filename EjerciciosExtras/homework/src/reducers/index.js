import {
  GET_ALL_USERS,
  GET_ALL_POSTS,
  GET_ALL_USERS_POST,
  GET_ALL_COMMENTS_POST,
} from "../actions";

const initialState = {
  users: [],
  posts: [],
  userPosts: [],
  commentsPost: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    //Debería guardar en nuestro state los users obtenidos de nuestro llamado a la API
    case GET_ALL_USERS:
      return {
        ...state,
        users: action.payload,
      };

    //Debería guardar en nuestro state posts obtenida de nuestro llamado a la API
    case GET_ALL_POSTS:
      return {
        ...state,
        posts: action.payload,
      };

    //Debería guardar en nuestro state los post de un user obtenidos de nuestro llamado a la API
    case GET_ALL_USERS_POST:
      return {
        ...state,
        userPosts: action.payload,
      };

    //Debería guardar en nuestro state los commentsPost de un user obtenidos de nuestro llamado a la API
    case GET_ALL_COMMENTS_POST:
      return {
        ...state,
        commentsPost: action.payload,
      };

    default:
      return state;
  }
}
