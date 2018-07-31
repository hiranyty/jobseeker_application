import axios from "axios";

export default {
    login: credentials => 
      axios.post("http://localhost:8765/uaa/oauth/token?grant_type=password&username="+credentials.email+"&password="+credentials.password+"&client_id=web_app&client_secret=secret",{})
        .then(res => res.data)       
        .catch (err =>  err.response ),      
       
    confirm: token =>
      axios
        .post("/api/auth/confirmation", { token })
        .then(res => res.data.user),   
    validateToken: token => axios.post("/api/auth/validate_token", { token }),    
  
  jobseeker: {
    fetchAll: () => axios.get("http://localhost:8765/api/v1/jobseekers/load").then(res => res.data),
    create: book =>
      axios.post("/api/books", { book }).then(res => res.data.book)
  }
};