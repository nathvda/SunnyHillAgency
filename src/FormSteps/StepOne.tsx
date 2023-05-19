import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useFormStore } from "../store";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Submit from "../Submit";

const firstSchema = z
.object({
  firstName: z.string().min(1, { message: "Veuillez entrer un prénom"}),
  lastName: z.string().min(1, { message: "Veuillez entrer un nom"}),
  dateOfBirth:z.string().min(1, { message: "Veuillez entrer une date de naissance"}),
  placeOfBirth:z.string().min(1,{message: "Veuillez entrer un lieu de naissance"})
});


type FormValues = {
  firstName: string
  lastName: string
  dateOfBirth: string
  placeOfBirth: string
};

const StepOne = () => {
  const navigate = useNavigate();

  const [firstName,updateFirstName] = useFormStore(
    (state) => [state.firstName, state.updateFirstName]
  )
  const [lastName,updateLastName] = useFormStore(
    (state) => [state.lastName, state.updateLastName]
  )
  const [dateOfBirth,updateDateOfBirth] = useFormStore(
    (state) => [state.dateOfBirth, state.updateDateOfBirth]
  )

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({resolver: zodResolver(firstSchema)});
  const onSubmit = handleSubmit((data) => {
    console.log(data);
    updateFirstName(data.firstName);
    updateLastName(data.lastName);
    updateDateOfBirth(data.dateOfBirth);
    navigate("/form/step-two", { replace: true });
  });

  return (
    <div className="bg-white text-black flex-grow flex-col p-4 rounded-lg w-full m-auto">
      <h2 className="text-3xl font-bold ml-8">Dites-nous en plus</h2> 
      <form className="bg-white bg-opacity-10 mb-2 mt-2 m-auto backdrop-blur-md flex-col gap-4" onSubmit={onSubmit}>
        

        <div className="border-b pt-4 pb-4 flex justify-between">
          <label htmlFor="firstName">Prénom</label>
          <input {...register("firstName")} placeholder="John" defaultValue={firstName}/>
        </div>
        {errors?.firstName && <p className="text-red-800">{errors.firstName.message}</p>}


        <div className="border-b pt-4 pb-4 flex justify-between">
          <label htmlFor="lastName">Nom</label>
          <input {...register("lastName")} placeholder="Doe" defaultValue={lastName} />
        </div>
        {errors?.lastName && <p className="text-red-800">{errors.lastName.message}</p>}

        <div className="border-b pt-4 pb-4 flex justify-between">
          <label htmlFor="dateOfBirth">Date de naissance</label>
          <input type="date" {...register("dateOfBirth")} defaultValue={dateOfBirth} />
        </div>
        {errors?.dateOfBirth && <p className="text-red-800">{errors.dateOfBirth.message}</p>}


        <div className="border-b pt-4 pb-4 flex justify-between">
          <label htmlFor="placeOfBirth">Lieu de naissance</label>
          <input type="text" {...register("placeOfBirth")} placeholder="Thuillies" />
        </div>
        {errors?.placeOfBirth && <p className="text-red-800">{errors.placeOfBirth.message}</p>}

        <div className="flex gap-8 justify-end">
          <Submit/>
          </div>
      </form>
    </div>
  );
};

export default StepOne;
