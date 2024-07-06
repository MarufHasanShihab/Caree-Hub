import { toast } from 'react-toastify';
const getLocalStorage = ()=>{
    const storedJobApplications = localStorage.getItem('jobApplications');
    if(storedJobApplications){
        return JSON.parse(storedJobApplications)
    }
    return [];
}

const saveLocalStorage = id =>{
    const sotredJobApplication = getLocalStorage();
    const isExist = sotredJobApplication.find(jobId => jobId === id);
    if(!isExist){
        sotredJobApplication.push(id)
        localStorage.setItem('jobApplications', JSON.stringify(sotredJobApplication))
        toast.success("You Have Applied Sucessfully")
    }else{
        toast.error('Sorry you have already applied once for this job so you cannot apply again')
    }
}

export {getLocalStorage, saveLocalStorage}