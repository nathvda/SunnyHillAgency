import { Controller, useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Listbox } from "@headlessui/react";
import { useQuery, gql } from "@apollo/client";
import Submit from "../Submit";

const secondSchema = z.object({
  reasonForTravelling: z
    .string()
    .min(1, { message: "Veuillez choisir une option" }),
  sender: z
    .string()
    .min(1, { message: "Vous devez déterminer qui vous envoie" }),
});

type FormValues = {
  reasonForTravelling: string;
  sender: string;
};

const GET_NAMES = gql`
  query GetNames {
    characters {
      results {
        name
      }
    }
  }
`;

const options = [
  { id: 1, reason: "Curiosity", unavailable: false },
  { id: 2, reason: "Work", unavailable: false },
  { id: 3, reason: "Despair", unavailabl: false },
];

const StepTwo = () => {
  const navigate = useNavigate();
  const [selectedReason, setSelectedReason] = useState(options[0]);
  const { loading, error, data } = useQuery(GET_NAMES);
  const [selectedSender, setSelectedSender] = useState(options[0]);

  console.log(data);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    mode: "onChange",
    resolver: zodResolver(secondSchema),
  });
  const onSubmit = handleSubmit((data) => {
    console.log(data);
    navigate("/form/step-three", { replace: true });
  });

  const PreviousStep = () => {
    navigate("/form", {replace:true})
  }

  if (loading) return <p>error</p>;
  if (error) return <p>Oh No</p>;

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h2>Vos raisons</h2>
        <div>
          <Controller
            render={() => (
              <Listbox value={selectedReason} onChange={setSelectedReason}>
                <Listbox.Label>Raison du départ:</Listbox.Label>
                <Listbox.Button>{selectedReason.reason}</Listbox.Button>
                <Listbox.Options>
                  {options.map((person) => (
                    <Listbox.Option
                      key={person.id}
                      value={person}
                      disabled={person.unavailable}
                    >
                      {person.reason}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Listbox>
            )}
            name="reasonForTravelling"
            control={control}
          />
          {errors?.reasonForTravelling && (
            <p className="text-red-800">{errors.reasonForTravelling.message}</p>
          )}
        </div>
        <div>
          <Controller
            render={() => (
              <Listbox value={selectedSender} onChange={setSelectedSender}>
                <Listbox.Label>Qui vous envoie:</Listbox.Label>
                <Listbox.Button>{selectedSender.reason}</Listbox.Button>
                <Listbox.Options>
                  {options.map((person: { reason: string }) => (
                    <Listbox.Option key={person.reason} value={person.reason}>
                      {person.reason}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Listbox>
            )}
            name="sender"
            control={control}
          />

          {errors?.sender && (
            <p className="text-red-800">{errors.sender.message}</p>
          )}
        </div>
        <div className="flex gap-8 justify-end">
        <button className="flex bg-slate-400 text-white p-4 mt-4 rounded-md md:w-44" onClick={() => PreviousStep()}>Précédent</button>
       <Submit/>
       </div>
      </form>
    </div>
  );
};

export default StepTwo;
