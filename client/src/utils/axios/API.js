import axios from "axios";

// const search = () => axios.get("/api/secret");

export default {
    
    getJobs: function() {
      return axios.get("/api/jobs");
    },
    
    getJob: function(id) {
      return axios.get("/api/jobs/" + id);
    },
   
    deleteJob: function(id) {
      return axios.delete("/api/jobs/" + id);
    },
    
    saveJob: function(jobData) {
      return axios.post("/api/jobs", jobData);
    },

    getUsers: function() {
      return axios.get("/api/user");
    },
  
    getUser: function(id) {
      return axios.get("/api/user/" + id);
    },
 
    loginUser: function(id) {
      return axios.get("/api/user/login" + id);
    },
 
    logoutUser: function(id) {
      return axios.post("/api/user/logout" + id);
    },
  
    saveUser: function(userData) {
      return axios.post("/api/user/signup", userData);
    }
};
  
    
// export default search;