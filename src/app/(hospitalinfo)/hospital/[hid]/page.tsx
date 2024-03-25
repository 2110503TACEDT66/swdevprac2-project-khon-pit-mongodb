import Image from "next/image"
import getHospital from "@/libs/getHospital"
export default async function HospitalDetailPage({params}:{params:{hid:string}}) {
    const hospitalDetail = await getHospital(params.hid);
    // //Mock Data
    // const mockHospitalRepo = new Map()
    // mockHospitalRepo.set("001",{name:"Chulalongkorn Hospital",image:"/img/chula.jpg"})
    // mockHospitalRepo.set("002",{name:"Rajavithi Hospital",image:"/img/rajavithi.jpg"})
    // mockHospitalRepo.set("003",{name:"Thammasat University Hospital",image:"/img/thammasat.jpg"})
    
    //<h1 className="text-lg font-medium">{hospitalDetail.data.name}</h1>
    
    return (
      <main className='text-center p-5'>
        
        <div className="flex flex-row my-5">
            <Image src={hospitalDetail.data.picture}
            alt='Hospital Picture' width={0} height={0} sizes="100vw"
            className='rounded-lg w-[30%] bg-black'/>
            <div className='text-md mx-5 text-left'>{hospitalDetail.data.name}
            <div>{hospitalDetail.data.address} {hospitalDetail.data.distinct} {hospitalDetail.data.province} {hospitalDetail.data.postalcode}</div>
            <div>{hospitalDetail.data.tel}</div>
            </div>
            
        </div>
      </main>
    )
  }