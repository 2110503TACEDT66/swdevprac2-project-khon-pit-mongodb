import Image from 'next/image';
import { useState } from 'react';
import InteractiveCard from './InteractiveCard';
import { Rating } from '@mui/material';

export default function Card({ hospitalName,imgSrc,rating,onCompare }:{hospitalName:string, imgSrc:string,rating:number, onCompare?:Function}) {
    //const [rating,setRating]=useState<number | null>(3)
    return(
        <InteractiveCard>
            <div className='w-full h-[70%] relative rounded-t-lg'>
                <Image src={imgSrc} alt='Vaccine' fill={true} className='object-cover round-t-lg'/>
            </div>
            <div className='w-full h-[15%] p-[10px] text-sm'>{hospitalName}</div>
            {
               onCompare? <Rating id={hospitalName+' Rating'} name={hospitalName+' Rating'} data-testid={hospitalName+' Rating'}
               value={rating} className='p-[10px]'
               onClick={(e)=>e.stopPropagation()}
               onChange={(event, newValue) => {
                   if (newValue != null) {
                       onCompare(hospitalName, newValue);
                   } else {
                       onCompare(hospitalName, 0);
                   }
               }}
               
               /> :''
            }
            
        </InteractiveCard>
    );
}