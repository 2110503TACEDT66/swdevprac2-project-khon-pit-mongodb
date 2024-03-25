import Image from "next/image"
import getDentist from "@/libs/getDentist"
export default async function DentistDetailPage({params}:{params:{id:string}}) {
    const dentistDetail = await getDentist(params.id);
    
    return (
      <main className='text-center p-5'>
        
        <div className="flex flex-row my-5">
            <Image src={dentistDetail.data.picture}
            alt='Hentist Picture' width={0} height={0} sizes="100vw"
            className='rounded-lg w-[30%] bg-black'/>
            <div className='mx-5 my-5 text-left'><div className="text-xl">{dentistDetail.data.name}</div>
            <div className='text-md'>{dentistDetail.data.experience}</div>
            <div className='text-md'>{dentistDetail.data.expertise}</div>
            <div><button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2
      shadow-sm text-white my-10">I want this dude.</button></div>
            </div>
            
        </div>
      </main>
    )
  }