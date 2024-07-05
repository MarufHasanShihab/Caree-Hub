import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div className="flex justify-between items-center py-[20px] px-[100px]">
            <h1 className="text-zinc-900 text-[32px] font-extrabold ">CareerHub</h1>
            <nav className="flex gap-6 text-neutral-500 text-base font-medium">
                <NavLink>Statistics</NavLink>
                <NavLink>Applied Jobs</NavLink>
                <NavLink>Blog</NavLink>
            </nav>
            <div className="w-[190px] h-[65px] px-7 py-[19px] bg-gradient-to-r from-indigo-400 to-violet-500 rounded-lg justify-start items-start gap-2.5 inline-flex cursor-pointer">
    <button className="text-white text-xl font-extrabold ">Star Applying</button>
</div>
        </div>
    );
};

export default Header;