"use client";
import { useReducer, useState } from "react";
import Card from "@/components/Card";
import Link from "next/link";

export default function CardPanel() {
  const compareReducer = (
    compareList: Map<string, number>,
    action: { type: string; hospitalName: string; hospitalRating: number }
  ) => {
    //console.log(action.hospitalRating);
    switch (action.type) {
      case "add": {
        console.log(action.hospitalRating);
        return new Map(
          compareList.set(action.hospitalName, action.hospitalRating)
        );
      }
      case "remove": {
        compareList.delete(action.hospitalName);
        return new Map(compareList);
      }
      default:
        return compareList;
    }
  };
  const [compareList, dispatchCompare] = useReducer(compareReducer, new Map([
    ["Chulalongkorn Hospital", 3],
    ["Rajavithi Hospital", 3],
    ["Thammasat University Hospital", 3],
  ]));
  //Mock Data
  const mockHospitalRepo = [{hid:"001",name:"Chulalongkorn Hospital",image:"/img/chula.jpg"},
    {hid:"002",name:"Rajavithi Hospital",image:"/img/rajavithi.jpg"},
    {hid:"003",name:"Thammasat University Hospital",image:"/img/thammasat.jpg"}
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
          mockHospitalRepo.map((hospitalItem)=>(
            <Link href={`/hospital/${hospitalItem.hid}`} className="w-1/5">
              <Card
                hospitalName={hospitalItem.name}
                imgSrc={hospitalItem.image}
                rating={compareList.get(hospitalItem.name) || 0}
                onCompare={(hName: string, hRating: number) => {
                if (hRating != 0)
                  dispatchCompare({
                    type: "add",
                    hospitalName: hName,
                    hospitalRating: hRating,
                  });
                else
                  dispatchCompare({
                    type: "remove",
                    hospitalName: hName,
                    hospitalRating: 0,
                  });
                }}
              />
            </Link>
          
          ))
        }
      </div>
      {Array.from(compareList).map((hName) => (
        <div
          key={hName[0]}
          data-testid={hName[0]}
          onClick={() => {
            dispatchCompare({
              type: "remove",
              hospitalName: hName[0],
              hospitalRating: hName[1],
            });
          }}
        >
          {hName[0] + " Rating : "} {hName[1]}
        </div>
      ))}
    </div>
  );
}
