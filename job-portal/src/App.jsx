import Navbar from "./components/Navbar"
import Header from "./components/Header"
import SearchBar from "./components/SearchBar"
import JobCard from "./components/JobCard"
// import JobData from './JobDummyData'
import { useEffect, useState } from "react"
import {collection, query, getDocs, orderBy, where} from 'firebase/firestore'
import {db} from './firebase.config'


function App() {

  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () =>{

    const tempJobs = []
    
    const jobRefs = query(collection(db, "jobs"));
    const q = query(jobRefs, orderBy("postedOn", "desc"));
    const req = await getDocs(q);
    req.forEach((job) =>{
      tempJobs.push({
        ...job.data(),
        id: job.id,
        postedOn: job.data().postedOn.toDate(),
      })
    });
    setJobs(tempJobs);
  }

  const fetchJobsCustom = async (jobCriteria) =>{

    const tempJobs = []
    
    const jobRefs = query(collection(db, "jobs"));
    const q = query(jobRefs, where("type", "==", jobCriteria.type), where("title" , "==", jobCriteria.title), where("experience" , "==", jobCriteria.experience), where("location", "==", jobCriteria.location) ,orderBy("postedOn", "desc"));
    const req = await getDocs(q);
    req.forEach((job) =>{
      tempJobs.push({
        ...job.data(),
        id: job.id,
        postedOn: job.data().postedOn.toDate(),
      })
    });
    setJobs(tempJobs);
  }

  useEffect(()=>{
    fetchJobs()
  },[])
  
  return (
    <>
      <Navbar/>
      <Header />
      <SearchBar fetchJobsCustom = {fetchJobsCustom} />
      {jobs.map((job)=>(
        <JobCard key={job} {...job}/>
      ))}
    </>
    
  )
}

export default App
