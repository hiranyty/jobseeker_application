import { USER_LOGGED_IN, USER_LOGGED_OUT } from "../types";
import api from "../api";
import setAuthorizationHeader from "../utils/setAuthorizationHeader";

export const userLoggedIn = user => ({
  type: USER_LOGGED_IN,
  user
});

export const userLoggedOut = () => ({
  type: USER_LOGGED_OUT
});

export const login = credentials => dispatch =>
  api.login(credentials).then(user => {
    console.log(user.access_token);
    localStorage.jobseekerJWT = user.access_token;
    setAuthorizationHeader(user.access_token);
    dispatch(userLoggedIn(user));
  })
  .catch( err => {
     console.log(err.data)
  } 
  );

export const logout = () => dispatch => {
  localStorage.removeItem("jobseekerJWT");
  setAuthorizationHeader();
  dispatch(userLoggedOut());
};

export const confirm = token => dispatch =>
  api.user.confirm(token).then(user => {
    localStorage.jobseekerJWT = user.token;
    dispatch(userLoggedIn(user));
  });

export const resetPasswordRequest = ({ email }) => () =>
  api.user.resetPasswordRequest(email);

export const validateToken = token => () => api.user.validateToken(token);

export const resetPassword = data => () => api.user.resetPassword(data);