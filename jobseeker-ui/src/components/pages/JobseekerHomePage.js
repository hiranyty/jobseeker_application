import React from "react";
import api from "../../api";
import JobseekerList from './JobseekerList';

class JobseekerHomePage  extends React.Component {
  
    constructor(props){
      super(props);    

      this.state = {
        jobseekers: [],
        data: []       
      }
    }
  
    loadJobseekers = (e) => {
        e.preventDefault();
        console.log('The link is clicked.');
        api.jobseeker.fetchAll().then(jobseeker => {           
            this.setState(
              {
                jobseekers: jobseeker   
              }
            ) 
            console.log('success' +  this.state.jobseekers);      
          })
          .catch(error =>  {
            console.log('error' +  error.response.status)
            this.props.history.push("/login")
          })
    };    

    render() {
     return (
       <div>
          <h1>Jobseeker Home Page </h1>        
          <a href="jobseeker" onClick={this.loadJobseekers}>Load Jobseekers</a>
          <p></p>         
          <JobseekerList data={this.state.jobseekers}/>          
      </div>        
       );   
     }
   }


export default JobseekerHomePage;