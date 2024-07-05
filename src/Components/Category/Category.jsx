import account from '../../assets/icons/accounts.png'
import cretive from '../../assets/icons/creative.png'
import marketing from '../../assets/icons/marketing.png'
import chip from '../../assets/icons/chip.png'

const Category = () => {
    return (
        <div className="py-24">
            <div>
            <h2 className="text-zinc-900 text-5xl font-extrabold text-center">Job Category List</h2>
            <p className="text-center text-neutral-500 text-base font-medium font-['Manrope'] leading-relaxed">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='py-8 flex gap-8'>
            <div className="w-[311px] h-[243px] bg-slate-100 rounded-lg flex justify-center items-center">
            <div>
                <img className="w-10 h-10 relative" src={account}></img>
                <h4 className="text-zinc-700 text-xl font-extrabold mt-[15px] ">Account & Finance</h4>
                <p className=" text-neutral-400 text-base font-medium leading-relaxed">300 Jobs Available</p>
            </div>
            </div>

            <div className="w-[311px] h-[243px] bg-slate-100 rounded-lg flex justify-center items-center">
            <div>
                <img className="w-10 h-10 relative" src={cretive}></img>
                <h4 className="text-zinc-700 text-xl font-extrabold mt-[15px] ">Creative Design</h4>
                <p className=" text-neutral-400 text-base font-medium leading-relaxed">100+ Jobs Available</p>
            </div>
            </div>

            <div className="w-[311px] h-[243px] bg-slate-100 rounded-lg flex justify-center items-center">
            <div>
                <img className="w-10 h-10 relative" src={marketing}></img>
                <h4 className="text-zinc-700 text-xl font-extrabold mt-[15px] ">Marketing & Sales</h4>
                <p className=" text-neutral-400 text-base font-medium leading-relaxed">150 Jobs Available</p>
            </div>
            </div>

            <div className="w-[311px] h-[243px] bg-slate-100 rounded-lg flex justify-center items-center">
            <div>
                <img className="w-10 h-10 relative" src={chip}></img>
                <h4 className="text-zinc-700 text-xl font-extrabold mt-[15px] ">Engineering Job</h4>
                <p className=" text-neutral-400 text-base font-medium leading-relaxed">224 Jobs Available</p>
            </div>
            </div>


            </div>
        </div>
    );
};

export default Category;