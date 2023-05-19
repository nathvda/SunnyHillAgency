import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useFormStore } from "../store";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const firstSchema = z
.object({
  firstName: z.string().min(1, { message: "Veuillez entrer un prénom"}),
  lastName: z.string().min(1, { message: "Veuillez entrer un nom"}),
  dateOfBirth:z.string().min(1, { message: "Veuillez entrer une date de naissance"}),
  placeOfBirth:z.string().min(1,{message: "Veuillez entrer un lieu de naissance"})
});

type First = z.infer<typeof firstSchema>

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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({resolver: zodResolver(firstSchema)});
  const onSubmit = handleSubmit((data) => {
    console.log(data);
    updateFirstName(data.firstName);
    navigate("/form/step-two", { replace: true });
  });

  return (
    <div>
      <form className="p-8 border border-red-100" onSubmit={onSubmit}>
        <h2>Dites-nous en plus</h2>

        <div>
          <label htmlFor="firstName">Prénom</label>
          <input {...register("firstName")} placeholder="John"/>
          {errors?.firstName && <p className="text-red-800">{errors.firstName.message}</p>}
        </div>

        <div>
          <label htmlFor="lastName">Nom</label>
          <input {...register("lastName")} placeholder="Doe" />
          {errors?.lastName && <p className="text-red-800">{errors.lastName.message}</p>}
        </div>

        <div>
          <label htmlFor="dateOfBirth">Date de naissance</label>
          <input type="date" {...register("dateOfBirth")} />
          {errors?.dateOfBirth && <p className="text-red-800">{errors.dateOfBirth.message}</p>}
        </div>

        <div>
          <label htmlFor="placeOfBirth">Lieu de naissance</label>
          <input type="text" {...register("placeOfBirth")} placeholder="Thuillies" />
          {errors?.placeOfBirth && <p className="text-red-800">{errors.placeOfBirth.message}</p>}
        </div>
       <button type="submit">Suivant</button>
      </form>
    </div>
  );
};

export default StepOne;
