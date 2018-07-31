import axios from "axios";

export default (token = null) => {
  if (token) {
    console.log("token" + token)
    axios.defaults.headers.common.authorization = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common.authorization;
  }
};
