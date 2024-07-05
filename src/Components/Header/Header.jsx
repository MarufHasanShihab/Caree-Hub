import './header.css'
import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center py-[20px] px-[100px]">
            <h1 className="text-zinc-900 text-[32px] font-extrabold ">CareerHub</h1>
            <nav className="flex flex-col md:flex-row gap-6 text-neutral-500 text-base font-medium">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/statistics">Statistics</NavLink>
                <NavLink to="/applied">Applied Jobs</NavLink>
                <NavLink to="/blog">Blog</NavLink>
            </nav>
            <div className=" px-3 py-[12px] bg-gradient-to-r from-indigo-400 to-violet-500 rounded-lg justify-start items-start gap-2.5 inline-flex cursor-pointer">
    <button className="text-white text-[18px] font-extrabold ">Star Applying</button>
</div>
        </div>
    );
};

export default Header;