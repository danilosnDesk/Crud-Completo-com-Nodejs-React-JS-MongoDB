import { FiEdit } from "react-icons/fi";
import { FiTrash } from "react-icons/fi";

export default function Table() {

    return (
        <table className="min-w-full table-auto">
            <thead>
                <tr>
                    <th className=" bg-gray-600 px-16 py-2">
                        <span className="text-gray-200">Name</span>
                    </th>
                    <th className=" bg-gray-600 px-16 py-2">
                        <span className="text-gray-200">Email</span>
                    </th>
                    <th className=" bg-gray-600 px-16 py-2">
                        <span className="text-gray-200">Salário</span>
                    </th>
                    <th className=" bg-gray-600 px-16 py-2">
                        <span className="text-gray-200">Aniversário</span>
                    </th>
                    <th className=" bg-gray-600 px-16 py-2">
                        <span className="text-gray-200">Estado</span>
                    </th>
                    <th className=" bg-gray-600 px-16 py-2">
                        <span className="text-gray-200">Ações</span>
                    </th>
                </tr>
            </thead>
            <tbody className="bg-gray-200">

                <tr className="bg-gray-50 text-center">
                    <td className="py-2 px-10 flex flex-row items-center">
                        <img src="#" alt="#" />
                        <span className="text-center ml-2 font-semibold">
                            Alberto Quijila
                        </span>
                    </td>
                    <td className="px-10 py-2">
                        <span>
                            albertoquijila@gmail.com
                        </span>
                    </td>
                    <td className="px-10 py-2">
                        <span>
                            $11 mil doláres
                        </span>
                    </td>
                    <td className='px-10 py-2'>
                        <span >
                            10/05/2022
                        </span>
                    </td>
                    <td className="px-10 py-2">
                        <button className="cursor"> <span className="bg-green-500 px-5 py-1 rounded">Active</span></button>
                    </td>
                    <td className="px-14 py-2 flex justify-around gap-5">
                        <FiEdit size={25} color={"rgb(34,197,94)"} />
                        <FiTrash size={25} color={"rgb(244,3,94)"} />
                    </td>

                </tr>
            </tbody>
        </table >
    )
}

