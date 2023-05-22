import { create } from "zustand";

interface FormState {
        firstName:string
        lastName:string
        dateOfBirth:string
        codePromo:string
        placeOfBirth:string
        phoneNumber:string
        emailAddress:string
    }

     type Action = {
        updateFirstName: (firstName : FormState['firstName']) => void
        updateLastName: (lastName : FormState['lastName']) => void
        updateDateOfBirth: (date : FormState['dateOfBirth']) => void
        updateCodePromo: (codePromo : FormState['codePromo']) => void
        updatePlaceOfBirth: (placeOfBirth : FormState['placeOfBirth']) => void
        updatePhoneNumber:(phoneNumber: FormState['phoneNumber']) => void
        updateEmailAddress:(emailAddress: FormState['emailAddress']) => void
    }


export const useFormStore = create<FormState & Action>((set) => ({
                    firstName:"",
                    lastName:"",
                    dateOfBirth:"",
                    codePromo:"",
                    placeOfBirth:"",
                    phoneNumber:"",
                    emailAddress:"",
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
                updatePhoneNumber : (number) =>
                set(() => ({phoneNumber:number}))
                ,
                updateEmailAddress : (email) =>
                set(() => ({emailAddress:email}))
                ,
            }))
