export const GET_ALL_POSTS = "GET_ALL_POSTS";
export const GET_ALL_USERS = "GET_ALL_USERS";
export const GET_ALL_USERS_POST = "GET_ALL_USERS_POST";
export const GET_ALL_COMMENTS_POST = "GET_ALL_COMMENTS_POST";

export function getAllUsers() {
  return (dispatch) => {
    return fetch("https://jsonplaceholder.typicode.com/users")
      .then((r) => r.json())
      .then((data) => {
        // filtrar la data
        var dataFiltrada = data.map(({ name, email, id, username }) => {
          return {
            id,
            name,
            username,
            email,
          };
        });
        dispatch({ type: GET_ALL_USERS, payload: dataFiltrada });
      });
  };
}

export function getAllUserPosts(id) {
  return (dispatch) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .then((r) => r.json())
      .then((data) => dispatch({ type: GET_ALL_USERS_POST, payload: data }));
  };
}

var idIncremental = 0;
export function getAllCommentsPost(postId) {
  return (dispatch) => {
    return fetch(
      `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
    )
      .then((r) => r.json())
      .then((data) => {
        var dataFil = data.map(({ body }) => {
          idIncremental++;
          return {
            body,
            id: idIncremental,
            // no le paso id, tener en cuenta si mas adelante me lo piden
          };
        });
        dispatch({ type: GET_ALL_COMMENTS_POST, payload: dataFil });
      })

      .catch((e) => console.log("Falló request a la API: ", e));
  };
}

export function getAllPosts() {
  return (dispatch) => {
    return fetch("https://jsonplaceholder.typicode.com/posts")
      .then((r) => r.json())
      .then((data) => dispatch({ type: GET_ALL_POSTS, payload: data }));
  };
}
