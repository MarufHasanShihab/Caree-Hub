/* eslint-disable react/no-unknown-property */

import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import toast from "react-hot-toast";


const Register = () => {
    const {createUser, googleSignUp} = useAuth();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    // handle google login
    const handleGoogleSignUp = ()=>{
        googleSignUp()
        .then(()=>toast.success("user google sign up sucessfully!"))
        .catch(error => toast.error(error.code.split("/").join(" ")))
    }

    
     // handle user create with email and password
     const handleCreateUser = e=>{
        e.preventDefault()
        // password validation
    if(password.length < 6){
        return toast.error("passor must be at least 6 characters")
     }

        createUser(email, password)
        .then(()=>toast.success("user created successfully!"))
        .catch(error => toast.error(error.code.split("/").join(" ")))
     }
    return (
        <div className="p-6">
            <div
    className="relative mx-auto w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
    <div className="w-full">
        <div className="text-center">
            <h1 className="text-3xl font-semibold text-gray-900">Register</h1>
        </div>
        <div className="mt-5">
            <form onSubmit={handleCreateUser}>
                <div className="relative mt-6">
                    <input onChange={e => setEmail(e.target.value)} type="email" name="email" id="email" placeholder="Email Address" className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" autocomplete="NA" />
                    <label for="email" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Email Address</label>
                </div>
                <div className="relative mt-6">
                    <input onChange={e=>setPassword(e.target.value)} type="password" name="password" id="password" placeholder="Password" className="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" />
                    <label for="password" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Password</label>
                </div>
                <div className="my-6">
                    <button type="submit" className="w-full rounded-md bg-black px-3 py-4 text-white focus:bg-gray-600 focus:outline-none">Register</button>
                </div>
                <p className="text-center text-sm text-gray-500">Already have an account?
                    <Link to="/login"
                        className="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none">Login
                    </Link>.
                </p>
            </form>
            <div class="px-6 mt-4 sm:px-0 max-w-sm">
    <button onClick={handleGoogleSignUp} type="button" class="text-white w-full  bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between mr-2 mb-2"><svg class="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>Sign up with Google<div></div></button>
</div>
        </div>
    </div>
</div>
        </div>
    );
};

export default Register;