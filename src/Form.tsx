import { useFormStore } from "./store";
import { Outlet, Link } from "react-router-dom";

const Form = () => {
    const Form = useFormStore((store) => store);
    console.log(Form);

    return (
        <div className="flex-grow">
            <div className="bg-red-100 p-8 flex justify-evenly">
            <Link to="/form/">1</Link>
            <Link to="/form/step-two">2</Link>
            <Link to="/form/step-three">3</Link>
            </div>
            <Outlet/>
        </div>
    );
};

export default Form;