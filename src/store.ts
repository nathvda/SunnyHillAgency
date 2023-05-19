import { create } from "zustand";

interface FormState {
        firstName:string
        lastName:string
        dateOfBirth:string
    }

     type Action = {
        updateFirstName: (firstName : FormState['firstName']) => void
        updateLastName: (lastName : FormState['lastName']) => void
        updateDateOfBirth: (date : FormState['dateOfBirth']) => void
    }


export const useFormStore = create<FormState & Action>((set) => ({
                    firstName:"",
                    lastName:"",
                    dateOfBirth:"",
                updateFirstName: (firstName) => 
                    set(() => ({firstName:firstName}))
                ,
                updateLastName : (lastName) =>
                    set(() => ({lastName:lastName}))
                ,
                updateDateOfBirth : (date) =>
                    set(() => ({dateOfBirth:date}))
                ,
            }))
