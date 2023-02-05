import AdduserForm from "layouts/Adduser";
import UpadateUserForm from "layouts/Update";

export default function Form() {
    const flag = false;
    return (
        <div className='container mx-auto py-5 '>
            {flag ? <AdduserForm /> : <UpadateUserForm />}
        </div >
    )
}