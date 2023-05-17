import { create } from "zustand";

interface FormState {
        firstName:string
        lastName:string
    }

     type Action = {
        updateFirstName: (firstName : FormState['firstName']) => void
        updateLastName: (lastName : FormState['lastName']) => void
    }


export const useFormStore = create<FormState & Action>((set) => ({
                    firstName:"coucou",
                    lastName:"bye",
                updateFirstName: (firstName) => 
                    set(() => ({firstName:firstName}))
                ,
                updateLastName : (lastName) =>
                    set(() => ({lastName:lastName}))
                ,
            }))
