import Link from "next/link";
import Card from "./Card";
import dayjs, { Dayjs } from "dayjs";


export default async function DentistCatalog({dentistsJson,date}:{dentistsJson:DentistJson,date:Dayjs|null}){
    const dentistJsonReady = dentistsJson;
    return(
        <div>
        <div style={{ margin: "20px", display: "flex", flexDirection: "row", alignContent: "space-around",
          justifyContent: "space-around", flexWrap: "wrap", padding:"10px"}}>
            {
                dentistJsonReady.data.map((dentistItem:DentistItem)=>(
                    date!=null?
                    dentistItem.bookings?.some((bookdate:BookingItem)=>{let dd =bookdate.bookingDate;return dayjs(date).format("YYYY-MM-DDTHH:mm:ss.SSS")+'Z'==dd.toString();})?
                    null
                    :
                    <Link href={`/dentists/${dentistItem.id}`} className="w-1/5">
                        <Card dentistName={dentistItem.name} imgSrc={dentistItem.picture}/>
                    </Link>
                    :
                    <Link href={`/dentists/${dentistItem.id}`} className="w-1/5">
                        <Card dentistName={dentistItem.name} imgSrc={dentistItem.picture}/>
                    </Link>
                ))
            }
          </div>
        </div>
    )
}