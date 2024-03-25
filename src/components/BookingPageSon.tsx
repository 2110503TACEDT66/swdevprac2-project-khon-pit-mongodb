'use client'
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import DentistCatalog from '@/components/DentistCatalog'
import { Suspense } from 'react';
import { LinearProgress } from '@mui/material';
import DateReserve from "@/components/DateReserve"



export default function BookingPagSon({dentistJson}:{dentistJson:DentistJson}){
    const [bookingDate,setBookingDate]=useState<Dayjs|null>(null)
    return(
        <div>
            <div className="w-[100%] flex flex-row justify-center my-5 items-center space-y">Date : <DateReserve onDateChange={(value:Dayjs)=>{setBookingDate(value)}}/></div>
            <h1 className='text-xl font-medium'>Available Dentist</h1>
            <Suspense fallback={<p>Loading...<LinearProgress/></p>}>
                <DentistCatalog dentistsJson={dentistJson} date={bookingDate}/>
            </Suspense>
      
        </div>
    )
}