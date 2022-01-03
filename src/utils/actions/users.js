const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";
const UPDATE_USER_STATUS = "UPDATE_USER_STATUS";


const fetchUsersRequest = () => {
    return {
        type : FETCH_USERS_REQUEST,
        payload : true }
}
const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users, 
  };
};
const fetchUsersError = (error) => {
    return {
        type : FETCH_USERS_FAILURE,
        payload : error  }
}
const updateUserStatus = (id) => {
    return {
        type : UPDATE_USER_STATUS,
        payload : id  
    }
}

const user = {
  fetchUsersRequest,
  fetchUsersSuccess,
  fetchUsersError,
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  updateUserStatus,
  UPDATE_USER_STATUS,
};
export default user