import Link from "next/link";
import Card from "./Card";
import dayjs, { Dayjs } from "dayjs";


export default async function DentistCatalog({dentistsJson,date}:{dentistsJson:DentistJson,date:string}){
    const dentistJsonReady = dentistsJson;
    return(
        <div>
        <div className= 'flex flex-row p-10 flex-wrap justify-center items-center'>
            {
                dentistJsonReady.data.map((dentistItem:DentistItem)=>(
                    <div className="w-1/5 m-12">
                    {date!=null?
                    dentistItem.bookings?.some((bookdate:BookingItem)=>{let dd =new Date(bookdate.bookingDate);console.log(date+"\n"+dd);return new Date(date)==dd;})?
                    null
                    :
                    <Link href={`/dentists/${dentistItem.id}`} >
                        <Card dentistName={dentistItem.name} imgSrc={dentistItem.picture}/>
                    </Link>
                    :
                    <Link href={`/dentists/${dentistItem.id}`} >
                        <Card dentistName={dentistItem.name} imgSrc={dentistItem.picture}/>
                    </Link>}
                    </div>
                ))
            }
          </div>
        </div>
    )
}