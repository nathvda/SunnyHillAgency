import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Submit from "../Submit";

const resolverThree = z.object({
  promoCode: z.string().min(6, { message: "Entrez un code promo valide" }),
});

type FormValues = {
  promoCode: string;
};

const StepThree = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(resolverThree),
  });

  const onSubmit = handleSubmit((data) => console.log(data));

  const PreviousStep = () => {
    navigate("/form/step-two", { replace: true });
  };

  return (
    <div className="bg-white text-black flex-grow flex-col p-4 rounded-lg w-full m-auto">
      <div className="flex gap-4 justify-center"><div className="w-4 h-4 bg-red-300 rounded-lg"></div><div className="w-4 h-4 rounded-lg bg-red-300"></div><div className="w-4 h-4 rounded-lg bg-red-300"></div></div>

      <h2 className="text-3xl font-bold ml-8">Prêts à décoller ?</h2>
      <form className="bg-white bg-opacity-10 mb-2 mt-2 m-auto backdrop-blur-md flex-col gap-4" onSubmit={onSubmit}>
       
      <div className="border-b pt-4 pb-4 flex justify-between">
          <label htmlFor="promoCode">Avez-vous un code promo?</label>
          <input {...register("promoCode")} placeholder="XXX-XXXX-XXX"/>
        </div>
        {errors?.promoCode && <p>{errors?.promoCode.message}</p>}
       
       
        <div className="flex gap-8 justify-end">
          <button
            className="flex bg-slate-400 text-white p-4 mt-4 rounded-md md:w-44"
            onClick={() => PreviousStep()}
          >
            Précédent
          </button>
          <Submit />
        </div>
      </form>
    </div>
  );
};

export default StepThree;
