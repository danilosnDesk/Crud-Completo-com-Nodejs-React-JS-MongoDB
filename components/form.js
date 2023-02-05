import { useReducer } from "react";

const formReducer = (state, event) => {
    return {
        ...state,
        [event.target.name]: event.target.value

    }

}

const Form = () => {
    const [getFormData, setFormData] = useReducer(formReducer, {})

    const submit = () => {
        console.log(getFormData)
    }

    return (
        <form className="grid lg:grid-cols-2 w-4/6 gap-4" onSubmit={submit}>
            <div className="input-type">
                <input type="text" name="firstname" onChange={setFormData} placeholder="Firstname" className="border w-full px-2 py-3 focus:outline-none rounded" />
            </div>
            <div className="input-type">
                <input type="text" name="lastname" onChange={setFormData} placeholder="Lastname" className="border w-full px-2 py-3 focus:outline-none rounded border-2 focus:border-grary-200" />
            </div>
            <div className="input-type">
                <input type="email" required name="Email" onChange={setFormData} placeholder="Email" className="border w-full px-2 py-3 focus:outline-none rounded" />
            </div>
            <div className="input-type">
                <input type="number" required name="Salary" onChange={setFormData} placeholder="Salary" className="border w-full px-2 py-3 focus:outline-none rounded" />
            </div>
            <div className="input-type">
                <input type="date" required name="date" onChange={setFormData} className="border px-5 py-3 focus:outline-none focus:color-green-500" />
            </div>

            <div /*className="flex ghap-10"*/>
                <div className="form-check ">
                    <input type="radio" value="Active" id="radioDefault1" name="status" className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-400 checked:border-green-400 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-center bg-contain float-left mr-2 cursor-pointer" />
                    <label htmlFor="radioDefault1" className="inline-block tet-gray">Active</label>
                </div>
                <div className="form-check">
                    <input type="radio" value="Desative" id="radioDefault2" name="status" className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-400 checked:border-green-400 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-center bg-contain float-left mr-2 cursor-pointer" />
                    <label htmlFor="radioDefault2" className="inline-block tet-gray">Inative</label>
                </div>
            </div>



            <button className="flex justify-center text-md w-2/6 bg-green-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-green-500 hover:text-green-500">Add</button>
        </form>
    )
}

export default Form; 