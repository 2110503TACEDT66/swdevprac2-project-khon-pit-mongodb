import Link from "next/link";
import Card from "./Card";

export default async function DentistCatalog({dentistsJson}:{dentistsJson:Promise<DentistJson>}){
    const dentistJsonReady = await dentistsJson;
    return(
        <div>
        <div style={{ margin: "20px", display: "flex", flexDirection: "row", alignContent: "space-around",
          justifyContent: "space-around", flexWrap: "wrap", padding:"10px"}}>
            {
                dentistJsonReady.data.map((dentistItem:DentistItem)=>(
                    <Link href={`/dentist/${dentistItem.id}`} className="w-1/5">
                        <Card dentistName={dentistItem.name} imgSrc={dentistItem.picture}/>
                    </Link>
                ))
            }
          </div>
        </div>
    )
}