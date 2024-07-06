import { useEffect, useState } from "react";
import { getLocalStorage } from "../../Utility/localStroage";
import { Link, useLoaderData } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import dolar from "../../assets/icons/dolar.svg";
import bg1 from '../../assets/images/bg1.png';


const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);
    useEffect(()=>{
        const storedJobsId = getLocalStorage();
       if(jobs.length > 0){
        const jobApplied = [];
        for(const id of storedJobsId){
            const job = jobs.find(job => job.id === id);
            if(job){
                jobApplied.push(job)
            }
        }
        setAppliedJobs(jobApplied)
        setDisplayJobs(jobApplied)
        
       }
    },[])
    const handleFilterJob = filter =>{
        if(filter === 'all'){
            setDisplayJobs(appliedJobs)
        }else if(filter === 'remote'){
            const remote = appliedJobs.filter(job => job.remote_or_onsite === "Remote")
            setDisplayJobs(remote)
        }else if(filter === 'onsite'){
            const onSite = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite')
            setDisplayJobs(onSite)
        }
    }
    return (
        <div className="py-8 px-14 space-y-6">

<div className="w-full h-[400px] bg-gray-200 flex justify-center items-center  relative">
            <div>
            <h1 className="text-zinc-900 text-[32px] font-extrabold ">Applied Jobs</h1>
            <img className="absolute left-0 bottom-0" src={bg1} alt="" />
            </div>
            </div>

            <details className="dropdown">
  <summary className="btn m-1">open or close</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
    <li onClick={()=> handleFilterJob('all')} ><a>all</a></li>
    <li onClick={()=> handleFilterJob('remote')}  ><a>remote</a></li>
    <li onClick={()=> handleFilterJob('onsite')} ><a>onsite</a></li>
  </ul>
</details>
            {
                displayJobs.map(job => (
                    <div key={job.id} className="card card-side bg-base-100 shadow-xl">
  <figure>
    <img
      src={job.logo}
      alt="Movie" />
  </figure>
  <div className="card-body">
  <h2 className="text-zinc-700 text-2xl font-extrabold ">
            {job.job_title}
          </h2>
          <p className="text-neutral-500 text-left text-xl font-semibold ">
            {job.company_name}
          </p>
          <div className="flex gap-6">
            <div className="px-[19px] py-[9px] rounded border border-indigo-400 justify-start items-start  inline-flex">
              <button className="text-indigo-400 text-base font-extrabold ">
                {job.remote_or_onsite}
              </button>
            </div>
            <div className="px-[19px] py-[9px] rounded border border-indigo-400 justify-start items-start  inline-flex">
              <button className="text-indigo-400 text-base font-extrabold ">
                {job.job_type}
              </button>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex items-center gap-1">
              <IoLocationOutline></IoLocationOutline>
              <h6 className="text-neutral-500 text-xl font-semibold">
                {job.location}
              </h6>
            </div>
            <div className="flex items-center gap-1">
              <img src={dolar} />
              <h6 className="text-neutral-500 text-xl font-semibold">
                {job.salary}
              </h6>
            </div>
          </div>
    <div className="card-actions justify-end">
    <Link to={`/job/${job.id}`}>
          <div className=" px-[18px] py-[11px] cursor-pointer bg-gradient-to-r from-indigo-400 to-violet-500 rounded justify-start items-start gap-2.5 inline-flex">
           <button className="text-white text-xl font-extrabold ']">
              View Details
            </button>
          </div>
           </Link>
    </div>
  </div>
</div>
                ))
            }
        </div>
    );
};

export default AppliedJobs;