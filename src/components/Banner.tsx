'use client';
import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

export default function Banner() {
  const router = useRouter();
  const { data: session } = useSession();
  return (
    <div className="block p-[5px] m-0 w-screen h-[80vh] relative">
      <Image
        src="/img/cover.jpg"
        alt="cover"
        fill={true}
        className="object-cover"
      />
      <div className="relative top-[100px] z-20 text-center">
        <h1 className="text-4xl font-medium">Vaccine Service Center</h1>
        <h3 className="text-xl font-serif">Get your free vaccines here</h3>
      </div>
      {session ? (
        <div className="z-30 absolute top-5 right-10 font-semibold text-cyan-800 text-xl">
          Welcome {session.user?.name}
        </div>
      ) : null}
    </div>
  );
}
