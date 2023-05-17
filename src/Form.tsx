import { useFormStore } from "./store";
import { Outlet, Link } from "react-router-dom";

const Form = () => {
    const Form = useFormStore((store) => store.form);

    return (
        <div>
            <Link to="/form/step-one">1</Link>
            <Link to="/form/step-two">2</Link>
            <Link to="/form/step-three">3</Link>

            <Outlet/>
        </div>
    );
};

export default Form;