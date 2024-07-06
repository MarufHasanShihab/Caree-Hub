import { useLoaderData, useParams } from "react-router-dom";
import bg1 from '../../assets/images/bg1.png';
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveLocalStorage } from "../../Utility/localStroage";




const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const job = jobs.find(job => job.id === parseInt(id));
    const {job_description, job_responsibility, educational_requirements, experiences, salary, job_title, contact_information} = job;
    const handleApplyJob = ()=>{
        saveLocalStorage(parseInt(id))
    }
    return (
        <div className="pb-10">
            <div className="w-full h-[400px] bg-gray-200 flex justify-center items-center  relative">
            <div>
            <h1 className="text-zinc-900 text-[32px] font-extrabold ">Job Details</h1>
            <img className="absolute left-0 bottom-0" src={bg1} alt="" />
            </div>
            </div>
            <div className=" py-14 px-12 grid grid-cols-4 gap-12">
                <div className ="col-span-3 space-y-6">
                 <h2><span className="text-2xl font-bold">Job Description : </span> <span className="text-neutral-500 text-base font-semibold leading-loose"> {job_description}</span></h2>
                 <h2><span className="text-2xl font-bold">Job Responsibility : </span> <span className="text-neutral-500 text-base font-semibold leading-loose">{job_responsibility}</span> </h2>
                 <h6 className=" text-zinc-900 text-base font-extrabold  leading-loose">Educational Requirements : <span className="w-[872px] text-neutral-500 text-base font-semibold leading-loose">{educational_requirements}</span></h6>

                 <h6 className=" text-zinc-900 text-base font-extrabold  leading-loose">Experiences: : <span className="w-[872px] text-neutral-500 text-base font-semibold leading-loose">{experiences}</span></h6>
                 
                </div>
                <div className="space-y-4">
                <h2 className="text-zinc-900 text-xl font-extrabold ">Job Details</h2>
                <div className="w-[300px] h-[0px] mt-6 opacity-30 border border-indigo-400"></div>
                <div className="space-y-4">
                <h4><span className="text-zinc-700 text-xl font-bold ">Salary</span><span className="text-zinc-700 text-xl font-extrabold "> :</span><span className="text-neutral-500 text-xl font-semibold "> </span><span className="text-neutral-500 text-[18px] font-medium ">{salary}(Per Month)</span></h4>
                <h4><span className="text-zinc-700 text-xl font-bold ">Job Title</span><span className="text-zinc-700 text-xl font-extrabold "> :</span><span className="text-neutral-500 text-xl font-semibold "> </span><span className="text-neutral-500 text-[18px] font-medium ">{job_title} </span></h4>
                </div>
                <div className="space-y-4">
                <h2 className="text-zinc-900 mt-8 text-xl font-extrabold ">Contact Information</h2>
                <div className="w-[300px] h-[0px] mt-6 opacity-30 border border-indigo-400"></div>
                
                <div className="flex gap-2 items-center">
                <FaPhoneVolume className="text-[20px]"/>
                <h4><span className="text-zinc-700 text-xl font-bold font-['Manrope']">Phone</span><span className="text-zinc-700 text-xl font-extrabold font-['Manrope']"> :</span><span className="text-neutral-500 text-xl font-semibold font-['Manrope']"> </span><span className="text-neutral-500 text-xl font-medium font-['Manrope']">{contact_information.phone}</span></h4>
                </div>
                <div className="flex gap-2 items-center">
                <MdEmail className="text-[20px]"/>
                <h4><span className="text-zinc-700 text-xl font-bold font-['Manrope']">Phone</span><span className="text-zinc-700 text-xl font-extrabold font-['Manrope']"> :</span><span className="text-neutral-500 text-xl font-semibold font-['Manrope']"> </span><span className="text-neutral-500 text-xl font-medium font-['Manrope']">{contact_information.email}</span></h4>
                </div>
                <div className="flex gap-2">
                <IoLocation className="text-[45px]"/>
                <h4><span className="text-zinc-700 text-xl font-bold font-['Manrope']">Phone</span><span className="text-zinc-700 text-xl font-extrabold font-['Manrope']"> :</span><span className="text-neutral-500 text-xl font-semibold font-['Manrope']"> </span><span className="text-neutral-500 text-xl font-medium font-['Manrope']">{contact_information.address}</span></h4>
                </div>
                <div onClick={handleApplyJob} className=" mt-2 py-3 px-4 bg-gradient-to-r from-indigo-400 to-violet-500 rounded-lg justify-start items-center gap-2.5 inline-flex">
    <button className="text-white text-[18px] font-extrabold">Apply Now</button>
</div>
                </div>
                </div>
            </div>
            <ToastContainer/>
        </div>
    );
};

export default JobDetails;