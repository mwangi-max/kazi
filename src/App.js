import React from 'react';
import {useState,useEffect} from 'react';
const url = 'https://course-api.com/react-tabs-project'

const App = () => {
 const [jobs,setJobs] = useState([]);
 const [value,setValue] = useState(0);
 const [loading,setLoading] = useState(true);

 const fetchJobs = async ()=>{
  try {
   const response = await fetch(url);
   const newJobs = await response.json();
   setJobs(newJobs);
   setLoading(false);
   
  } catch (error) {
   setLoading(false);
   console.log(error)
   
  }
 }

 useEffect(()=>{
  fetchJobs();
 },[])

 if(loading){
  return(
   <section>
    <h2>Loading ...</h2>
   </section>
  )
 }

 const {title,company,duties,dates} = jobs[value];
  return (
    <section>
    <h2>Jobs</h2>
    <div className='btn-container'>

        {
     jobs.map((job,index)=>{
      return<button key={job.id} className={`job-btn ${index === value && 'active-btn'}`} onClick={()=>setValue(index)}>{job.company}</button>
     })
    }

    </div>
   
    <h2>{title}</h2>
    <h3>{company}</h3>
    <h4>{dates}</h4>
    {
     duties.map((duty,index)=>{
      return <div key={index}>
       <h5>{duty}</h5>
      </div>
     })
    }

    </section>
  )
}

export default App
