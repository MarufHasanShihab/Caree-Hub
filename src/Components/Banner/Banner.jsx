import user from '../../assets/images/user.png'

const Banner = () => {
    return (
        <div className="w-full h-full md:flex justify-center items-center gap-6 px-[100px]"> 
            <div>
            <h2 className="w-[570px]"><span className="text-zinc-900 text-[80px] font-extrabold font-['Manrope'] leading-[100px]">One Step Closer To Your </span><span className="text-indigo-400 text-[80px] font-extrabold  leading-[100px]">Dream Job</span></h2>
            <p className="w-[519px] text-neutral-500 text-lg font-medium font-['Manrope'] leading-[30px]">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
            <div className=" px-3 py-[12px] cursor-pointer mt-4 bg-gradient-to-r from-indigo-400 to-violet-500 rounded-lg justify-start items-start gap-2.5 inline-flex">
    <button className="text-white text-[18px] font-extrabold font-['Manrope']">Get Started</button>
</div>
            </div>
            <img className='w-[600px]' src={user} alt="" />
        </div>
    );
};

export default Banner;