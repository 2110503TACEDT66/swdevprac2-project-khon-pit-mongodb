import Image from "next/image"
import getDentist from "@/libs/getDentist"
import { TextField } from "@mui/material";
import SymptomField from "@/components/symptomField";
export default async function DentistDetailPage({params}:{params:{id:string}}) {
    const dentistDetail = await getDentist(params.id);
    
    return (
      <main className='text-center p-5'>
        
        <div className="flex flex-row my-5">
            <Image src={dentistDetail.data.picture}
            alt='Dentist Picture' width={0} height={0} sizes="100vw"
            className='rounded-lg w-[30%] bg-black'/>
            <div className='mx-5 my-5 text-left'><div className="text-xl">Name : {dentistDetail.data.name}</div>
            <div className='text-md'>Years of Experience : {dentistDetail.data.experience}</div>
            <div className='text-md'>Area of Expertise : {dentistDetail.data.expertise}</div>
            <SymptomField dentist={params.id}/>
            </div>
            
        </div>
      </main>
    )
  }