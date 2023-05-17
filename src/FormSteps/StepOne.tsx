import { useForm, Resolver } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useFormStore } from "../store";

type FormValues = {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
};

const resolver: Resolver<FormValues> = async (values) => {
  return {
    values: values.firstName ? values : {},
    errors: !values.firstName
      ? {
          firstName: {
            type: "required",
            message: "Veuillez fournir un prénom",
          },
        }
      : {},
  };
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
  } = useForm<FormValues>({ resolver });
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
          <input {...register("firstName")} placeholder="John" />
          {errors?.firstName && <p>{errors.firstName.message}</p>}
        </div>

        <div>
          <label htmlFor="lastName">Nom</label>
          <input {...register("lastName")} placeholder="Doe" />
          {errors?.lastName && <p>{errors.lastName.message}</p>}
        </div>

        <div>
          <label htmlFor="dateOfBirth">Date de naissance</label>
          <input type="date" {...register("dateOfBirth")} />
          {errors?.lastName && <p>{errors.lastName.message}</p>}
        </div>
        <button onClick={() => goBack()} type="button">back</button><button type="submit">next</button>
      </form>
    </div>
  );
};

export default StepOne;
