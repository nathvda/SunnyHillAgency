import { create } from "zustand";

interface FormState {
        firstName:string
        lastName:string
        dateOfBirth:string
        codePromo:string
        placeOfBirth:string
    }

     type Action = {
        updateFirstName: (firstName : FormState['firstName']) => void
        updateLastName: (lastName : FormState['lastName']) => void
        updateDateOfBirth: (date : FormState['dateOfBirth']) => void
        updateCodePromo: (codePromo : FormState['codePromo']) => void
        updatePlaceOfBirth: (placeOfBirth : FormState['placeOfBirth']) => void
    }


export const useFormStore = create<FormState & Action>((set) => ({
                    firstName:"",
                    lastName:"",
                    dateOfBirth:"",
                    codePromo:"",
                    placeOfBirth:"",
                updateFirstName: (firstName) => 
                    set(() => ({firstName:firstName}))
                ,
                updateLastName : (lastName) =>
                    set(() => ({lastName:lastName}))
                ,
                updateDateOfBirth : (date) =>
                    set(() => ({dateOfBirth:date}))
                ,
                updatePlaceOfBirth : (place) =>
                set(() => ({placeOfBirth:place}))
                ,
                updateCodePromo : (code) =>
                set(() => ({codePromo:code}))
                ,
            }))
