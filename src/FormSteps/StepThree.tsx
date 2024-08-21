import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import FormHeading from "../FormHeading";
import Submit from "../Submit";
import { useFormStore } from "../store";

const resolverThree = z.object({
  promoCode: z.string().min(12, { message: "Entrez un code promo valide" }),
  phoneNumber: z
    .string()
    .min(12, { message: "Veuillez entrer un numéro de téléphone valide" }),
  emailAddress: z
    .string()
    .email({ message: "Veuillez entrer une adresse mail valide." }),
});

type FormValues = {
  promoCode: string;
  phoneNumber: string;
  emailAddress: string;
};

const StepThree = () => {
  const navigate = useNavigate();
  const [codePromo, updateCodePromo] = useFormStore((state) => [
    state.codePromo,
    state.updateCodePromo,
  ]);

  const [phoneNumber, updatePhoneNumber] = useFormStore((state) => [
    state.phoneNumber,
    state.updatePhoneNumber,
  ]);

  const [emailAddress, updateEmailAddress] = useFormStore((state) => [
    state.emailAddress,
    state.updateEmailAddress,
  ]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(resolverThree),
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    updateCodePromo(data.promoCode);
    updatePhoneNumber(data.phoneNumber);
    updateEmailAddress(data.emailAddress);
    navigate("/form/step-four", { replace: true });
  });

  const PreviousStep = () => {
    navigate("/form/step-two", { replace: true });
  };

  return (
    <div className="bg-white text-black flex-grow flex-col p-4 rounded-lg lg:w-1/2 m-auto">
      <div className="flex gap-4 justify-center">
        <div className="w-4 h-4 bg-blue-300 rounded-lg"></div>
        <div className="w-4 h-4 rounded-lg bg-blue-300"></div>
        <div className="w-4 h-4 rounded-lg bg-blue-300"></div>
        <div className="w-4 h-4 rounded-lg bg-gray-300"></div>
      </div>

      <h2 className="text-3xl font-bold ml-8">Prêts à décoller ?</h2>
      <hr className="border-t my-5" />
      <FormHeading />

      <form
        className="bg-white bg-opacity-10 mb-2 mt-2 m-auto backdrop-blur-md flex-col gap-4"
        onSubmit={onSubmit}
      >
        <div className="border-b pt-4 pb-4 flex justify-between">
          <label htmlFor="phoneNumber">Numéro de téléphone</label>
          <input
            {...register("phoneNumber")}
            placeholder="+32 XXX XXX XXX"
            defaultValue={phoneNumber}
          />
        </div>
        {errors?.phoneNumber && <p>{errors?.phoneNumber.message}</p>}

        <div className="border-b pt-4 pb-4 flex justify-between">
          <label htmlFor="emailAddress">Adresse email</label>
          <input
            {...register("emailAddress")}
            placeholder="youremailaddress@xyz.com"
            defaultValue={emailAddress}
          />
        </div>
        {errors?.emailAddress && <p>{errors?.emailAddress.message}</p>}

        <div className="border-b pt-4 pb-4 flex justify-between">
          <label htmlFor="promoCode">Avez-vous un code promo?</label>
          <input
            {...register("promoCode")}
            placeholder="XXX-XXXX-XXX"
            defaultValue={codePromo}
          />
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
