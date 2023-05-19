import { Controller, useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Listbox } from "@headlessui/react";
import { useQuery,gql } from "@apollo/client";

const secondSchema = z.object({
    reasonForTravelling: z.string().min(1,{message: "Veuillez choisir une option"}),
    sender: z.string().min(1,{message:"Vous devez déterminer qui vous envoie"})
})

type FormValues = {
    reasonForTravelling:string
    sender:string
}

const GET_NAMES = gql`
query GetNames {
    characters {
        results {
          name
        }
      }
}`

const options = [
    { id:1, reason:"Curiosity", unavailable:false},
    { id:2, reason:"Work", unavailable:false},
    { id:3, reason:"Despair", unavailabl:false}
]

const StepTwo = () => {
    const navigate = useNavigate();
    const [selectedReason, setSelectedReason] = useState(options[0]);
    const {loading,error,data} = useQuery(GET_NAMES);
    const [selectedSender, setSelectedSender] = useState(data[0]);


    console.log(data);

    const { register,
        control,
        handleSubmit, 
         formState: {errors}} = useForm<FormValues>({resolver:zodResolver(secondSchema)});
         const onSubmit = handleSubmit((data) => {
           console.log(data);
           navigate("/form/step-three", {replace:true});
         });

    if (loading) return (<p>error</p>);
    if (error) return (<p>Oh No</p>);

    return (
        <div>
            <form onSubmit={onSubmit}><h2>Vos raisons</h2>
            <Controller render={({ field }) =>  <Listbox value={selectedReason} onChange={setSelectedReason}>
            <Listbox.Button>{selectedReason.reason}</Listbox.Button>
            <Listbox.Options>{
           options.map((person) => (
            <Listbox.Option key={person.id}
            value={person}
            disabled={person.unavailable}>{person.reason}
            </Listbox.Option>
           ))}
            </Listbox.Options> 
            </Listbox>}
      name="reasonForTravelling"
      control={control}/>
      <Controller render={({ field }) =>  <Listbox value={selectedSender} onChange={setSelectedSender}>
            <Listbox.Button>{selectedSender.name}</Listbox.Button>
            <Listbox.Options>{
           data.characters.results.map((person:{name:string}) => (
            <Listbox.Option key={person.name}
            value={person.name}
           >{person.name}
            </Listbox.Option>
           ))}
            </Listbox.Options> 
            </Listbox>}
      name="sender"
      control={control}/>
     
           
            {errors?.reasonForTravelling && <p className="text-red-800">{errors.reasonForTravelling.message}</p>}
            <button type="submit">Suivant</button>
            </form>
        </div>
    );
};

export default StepTwo;