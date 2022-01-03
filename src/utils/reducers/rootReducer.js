import user from "../actions/users";

const initialState = {
  users: [],
  loading: false,
  error: "",
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case user.FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case user.FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case user.FETCH_USERS_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case user.UPDATE_USER_STATUS:
      let client = state.users.find((user) => user.id === action.payload);
      client.status = !client.status;
      let newUserState = state.users.filter(
        (user) => user.id !== action.payload
      );
      newUserState.unshift(client);

      return {
        ...state,
        users: newUserState,
      };
    default:
      return state;
  }
}

const fetchUsersAsync = () => {
  return (dispatch) => {
    dispatch(user.fetchUsersRequest());
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        dispatch(user.fetchUsersSuccess(response));
      })
      .catch((error) => {
        dispatch(user.fetchUsersError(error));
      });
  };
};

export { rootReducer, fetchUsersAsync };
