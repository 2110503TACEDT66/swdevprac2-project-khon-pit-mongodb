"use client";
import Card from "@/components/Card";
import Link from "next/link";

export default function CardPanel() {
  //Mock Data
  const mockDentistRepo = [{hid:"001",name:"Chulalongkorn Hentist",image:"/img/chula.jpg"},
    {hid:"002",name:"Rajavithi Hentist",image:"/img/rajavithi.jpg"},
    {hid:"003",name:"Thammasat University Hentist",image:"/img/thammasat.jpg"}
  ]
  return (
    <div>
      <div
        style={{
          margin: "20px",
          display: "flex",
          flexDirection: "row",
          alignContent: "space-around",
          justifyContent: "space-around",
          flexWrap: "wrap",
          padding:"10px"
        }}
      >
        {
          mockDentistRepo.map((dentistItem)=>(
            <Link href={`/hentist/${dentistItem.hid}`} className="w-1/5">
              <Card
                dentistName={dentistItem.name}
                imgSrc={dentistItem.image}
              />
            </Link>
          
          ))
        }
      </div>
    </div>
  );
}
