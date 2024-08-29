import spinner from "../../assets/spinner.gif"

const Spinner = () => {
    return (
        <div className="h-[80vh] w-full flex justify-center items-center ">
            <img  src={spinner} alt="spinner_gif" />
        </div>
    );
};

export default Spinner;