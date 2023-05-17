import { create } from "zustand";
import { devtools, persist } from 'zustand/middleware';

interface FormState{
    form:{
        name: string
    }
}

const useFormStore = create<FormState>()(
    devtools(
        persist(
            (set) => ({
                form:{name:"hello"}
            }),{
             name: 'idk'   
            }
        )
    )
)