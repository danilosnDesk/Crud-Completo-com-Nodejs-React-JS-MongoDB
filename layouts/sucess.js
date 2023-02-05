import { BiCheck } from "react-icons/bi";

const SucessMassage = ({ message }) => {
    return (
        <div className="success container mx-auto">
            <div className="flex justify-center mx-auto  border border-yellow-200 bg-yellow-400 w-3/6 text-gray-900 text-md my-4 py-2 text-center bg-opacity-5">
                {message} <BiCheck size={25} color={"rgb(34,397,94)"} />
            </div>

        </div>
    )
}

export default SucessMassage;