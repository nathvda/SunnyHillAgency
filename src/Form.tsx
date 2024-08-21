import { Outlet } from "react-router-dom";
import { useFormStore } from "./store";

const Form = () => {
  const Form = useFormStore((store) => store);
  console.log(Form);

  return (
    <div className="flex-grow">
      <Outlet />
    </div>
  );
};

export default Form;
