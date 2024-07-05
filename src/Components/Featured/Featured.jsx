import { useEffect, useState } from "react";
import Job from "../Job/Job";


const Featured = () => {
    const [jobs, setJobs] = useState([]);


    useEffect(()=>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])
    
    return (
       <div className="flex justify-center">
         <div>
            <div>
            <h2 className="text-center text-zinc-900 text-5xl font-extrabold font-['Manrope']">Featured Jobs</h2>
            <p className="text-center text-neutral-500 text-base font-medium font-['Manrope'] leading-relaxed">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-2 gap-[70px]">
                {
                    jobs.map(job => <Job key={job.id} job={job} ></Job>)
                }
            </div>
        </div>
       </div>
    );
};

export default Featured;