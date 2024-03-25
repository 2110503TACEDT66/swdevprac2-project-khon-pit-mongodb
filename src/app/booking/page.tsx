'use client'
import DateReserve from "@/components/DateReserve"
import { Select, MenuItem, TextField } from '@mui/material';
//import { authOptions } from "@/app/api/auth/[...nextauth]/route"
//import { getServerSession } from "next-auth"
//import getUserProfile from "@/libs/getUserProfile"
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { addBooking } from "@/redux/features/bookSlice";
export default function BookingPage() {
  const dispatch = useDispatch<AppDispatch>()
  const makeBooking = () => {
    console.log(nameSurname,cid,hospital,bookingDate)
    if(nameSurname && cid && hospital && bookingDate ){
      const item:BookingItem = {
        name:nameSurname.split(" ")[0],
        surname:nameSurname.split(" ")[1],
        id:cid,
        hospital:hospital,
        bookDate: dayjs(bookingDate).format("YYYY/MM/DD")
      }
      dispatch(addBooking(item))
    }
  }
  const [nameSurname,setName]=useState<string|null>(null)
  const [cid,setCID]=useState<string|null>(null)
  const [hospital,setHospital]=useState<string|null>(null)
  const [bookingDate,setBookingDate]=useState<Dayjs|null>(null)

  return (
    <main className="w-[100%] flex flex-col items-center space-y-4">
      <div className="text-xl font-medium">Vaccine Booking</div>
      <div className="w-fit space-y-2">
          <div className="text-md text-left text-gray-600">
            <TextField variant='standard' type='text' name="Name-Lastname" label="Name-Lastname" 
            className="rounded ring-1 ring-inset ring-grey-400 text-md leading-6 indent-2 placeholder:text-grey-400"
            onChange={(e)=>setName(e.target.value)}/>
          </div>
        <div className="text-md text-left text-gray-600">
          <TextField variant='standard' type='text' name='Citizen ID' label="Citizen ID" 
          className="rounded ring-1 ring-inset ring-grey-400 text-md leading-6 indent-2 placeholder:text-grey-400"
          onChange={(e)=>setCID(e.target.value)}/>
        </div>
        <div className="text-md text-left text-gray-600">
          Hospital </div>
        <div className='bg-slate-100 rounded-lg space-x-5 space-y-2 w-fit px-10 py-5 flex flex-row justify-center'>
          <Select variant='standard' name="location" id='hospital' className='h-[2em] w-[200px]'
          onChange={(e)=>setHospital(e.target.value as string)}>
                <MenuItem value='Chula'>Chulalongkorn Hospital</MenuItem>
                <MenuItem value='Rajavithi'>Rajavithi Hospital</MenuItem>
                <MenuItem value='Thammasat'>Thammasat University Hospital</MenuItem>
          </Select>
        </div>
        <div className="text-md text-left text-gray-600">
          Appointment Date </div>
        <DateReserve onDateChange={(value:Dayjs)=>{setBookingDate(value)}}/>
      </div>
      <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2
      shadow-sm text-white" name="Book Vaccine" onClick={makeBooking}>Book Vaccine</button>
    </main>
  )
}
