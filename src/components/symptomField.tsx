'use client'
import { useDispatch } from "react-redux";
import { AppDispatch,useAppSelector } from "@/redux/store"
import { changeSymptom } from "@/redux/features/dateSlice";
import { TextField } from "@mui/material";
import createBooking from "@/libs/createBooking";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
export default function SymptomField({dentistDetail}:{dentistDetail:DentistItem}){
    const date=useAppSelector((state)=>{return state.datePersistedReducer.dateSlice.bookdate.date})
    const symptom=useAppSelector((state)=>{return state.datePersistedReducer.dateSlice.bookdate.symptom})
    const dispatch = useDispatch<AppDispatch>()
    const {data:session,status}=useSession();
    if (!session || !session.user.token) return null;
    return(
        <div><TextField variant='standard' type='text' name="symptom" label="Symptom" 
            className="rounded ring-1 ring-inset ring-grey-400 text-md leading-6 indent-2 placeholder:text-grey-400"
            onChange={(e)=>{dispatch(changeSymptom(e.target.value))}}
            
        />
        <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2
            shadow-sm text-white my-10" onClick={()=>{createBooking(session?.user._id,dentistDetail.id,new Date(date),symptom);redirect('/mybooking')}}>I want this dude.</button>
        </div>
    )
}