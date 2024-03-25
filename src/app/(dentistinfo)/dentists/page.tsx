'use client'
import getDentists from '@/libs/getDentists'
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import DentistCatalog from '@/components/DentistCatalog'
import { Suspense } from 'react';
import { LinearProgress } from '@mui/material';
import DateReserve from "@/components/DateReserve"

export default function Dentist() {
  const [bookingDate,setBookingDate]=useState<Dayjs|null>(null)
  const dentists = getDentists();
  return (
    <main className='text-center p-5'>
      <DateReserve onDateChange={(value:Dayjs)=>{setBookingDate(value)}}/>
      <h1 className='text-xl font-medium'>Available Dentist</h1>
      <Suspense fallback={<p>Loading...<LinearProgress/></p>}>
        <DentistCatalog dentistsJson={dentists} date={bookingDate}/>
      </Suspense>
      
    </main>
  )
}
