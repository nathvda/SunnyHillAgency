import { create } from "zustand";
import { devtools, persist } from 'zustand/middleware';

interface FormState{
    form:{
        firstName:string
        lastName:string
      }
}

export const useFormStore = create<FormState>()(
    devtools(
        persist(
            (set) => ({
                form:{
                    firstName:"coucou",
                    lastName:"bye"
                }

            }),{
             name: 'idk'   
            }
        )
    )
)