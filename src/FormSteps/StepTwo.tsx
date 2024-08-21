import { Listbox } from "@headlessui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Fragment } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
// import { useQuery, gql } from "@apollo/client";
import FormHeading from "../FormHeading";
import { useFormStore } from "../store";
import Submit from "../Submit";

const secondSchema = z.object({
  reasonForTravelling: z
    .string()
    .min(0, { message: "Veuillez choisir une option" }),
  sender: z
    .string()
    .min(0, { message: "Vous devez déterminer qui vous envoie" }),
});

type FormValues = {
  reasonForTravelling: string;
  sender: string;
};

// const GET_NAMES = gql`
//   query GetNames {
//     characters {
//       results {
//         name
//       }
//     }
//   }
// `;

const options = [
  { id: 1, reason: "Loisir", unavailable: false },
  { id: 2, reason: "Travail", unavailable: false },
  { id: 3, reason: "Découverte", unavailabl: false },
  { id: 4, reason: "Autre", unavailabl: false },
];

const StepTwo = () => {
  const navigate = useNavigate();
  // const { loading, error, data } = useQuery(GET_NAMES);

  const [reason, updateReason] = useFormStore((state) => [
    state.reasonForTravelling,
    state.updateReason,
  ]);
  const [sender, updateSender] = useFormStore((state) => [
    state.sender,
    state.updateSender,
  ]);

  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(secondSchema),
  });
  const onSubmit = handleSubmit((data) => {
    updateSender(data.sender);
    updateReason(data.reasonForTravelling);
    navigate("/form/step-three", { replace: true });
  });

  const PreviousStep = () => {
    navigate("/form", { replace: true });
  };

  // if (loading) return <p>error</p>;
  // if (error) return <p>Oh No</p>;

  return (
    <div className="bg-white text-black flex-grow flex-col p-4 rounded-lg lg:w-1/2 m-auto">
      <div className="flex gap-4 justify-center">
        <div className="w-4 h-4 bg-blue-300 rounded-lg"></div>
        <div className="w-4 h-4 rounded-lg bg-blue-300"></div>
        <div className="w-4 h-4 rounded-lg bg-gray-300"></div>
        <div className="w-4 h-4 rounded-lg bg-gray-300"></div>
      </div>
      <h2 className="text-3xl font-bold ml-8">Pourquoi voyagez-vous?</h2>
      <hr className="border-t my-5" />
      <FormHeading />

      <form onSubmit={onSubmit}>
        <div>
          <Controller
            render={({ field: { onChange, value, name } }) => (
              <Listbox value={value} onChange={onChange} name={name}>
                <Listbox.Label>Raison du départ:</Listbox.Label>
                <Listbox.Button className="relative bg-white p-4 text-center border border-gray-100">
                  {value || reason || "Choisissez votre raison"}
                  <Listbox.Options className="absolute rounded-md border-b-2 border-blue-100">
                    {options.map((person) => (
                      <Listbox.Option
                        key={person.id}
                        value={person.reason}
                        disabled={person.unavailable}
                        as={Fragment}
                      >
                        <li className="bg-white shadow-sm p-4 border-t border-gray-100 hover:bg-blue-100">
                          {person.reason}
                        </li>
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Listbox.Button>
              </Listbox>
            )}
            {...register("reasonForTravelling")}
            control={control}
          />
          {errors?.reasonForTravelling && (
            <p className="text-red-800">{errors.reasonForTravelling.message}</p>
          )}
        </div>
        <div>
          <Controller
            render={({ field: { onChange, value, name } }) => (
              <Listbox value={value} onChange={onChange} name={name}>
                <Listbox.Label>Qui vous envoie:</Listbox.Label>
                <Listbox.Button>
                  {value || sender || "Choisissez votre responsable"}
                </Listbox.Button>
                <Listbox.Options>
                  {options.map((person) => (
                    <Listbox.Option key={person.id} value={person.reason}>
                      {person.reason}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Listbox>
            )}
            {...register("sender")}
            control={control}
          />

          {errors?.sender && (
            <p className="text-red-800">{errors.sender.message}</p>
          )}
        </div>
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

export default StepTwo;
