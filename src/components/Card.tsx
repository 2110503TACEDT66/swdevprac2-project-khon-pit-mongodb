import Image from 'next/image';
import InteractiveCard from './InteractiveCard';
import { Rating } from '@mui/material';

export default function Card({
  dentistName,
  imgSrc
}: {
  dentistName: string,
  imgSrc:string;

}) {
  return (
    <InteractiveCard>
      <div className="w-full h-[70%] relative rounded-t-lg">
        <Image
          src={imgSrc}
          alt="Vaccine"
          fill={true}
          className="object-cover round-t-lg"
        />
        
      </div>
      <div className='w-full h-[30%] relative'>{dentistName}</div>
    </InteractiveCard>
  );
}
