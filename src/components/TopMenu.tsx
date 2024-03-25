import Image from 'next/image';
import TopMenuItem from './TopMenuItem';
import { getServerSession } from 'next-auth';
import { Link } from '@mui/material';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export default async function TopMenu() {
  const session = await getServerSession(authOptions);
  return (
    <div className="h-[50px] bg-white flex flex-row fixed top-0 left-0 right-0 border-y-[1px] border-solid border-gray-500 z-30">
      <Image
        src={'/img/logo.png'}
        className="h-full w-auto"
        alt="logo"
        width={0}
        height={0}
        sizes="100vh"
      />
      <TopMenuItem title="Booking" pageRef="/booking" />
      <div className="absolute left-0 flex flex-column h-full">
        {session ? (
          <Link href="/api/auth/signout">
            <div
              className="flex items-center 
                px-2 text-cyan-600 text-sm">
              Sign-Out of {session.user?.name}
            </div>
          </Link>
        ) : (
          <Link href="/api/auth/signin">
            <div
              className="flex items-center    
                px-2 text-cyan-600 text-sm">
              Sign-In
            </div>
          </Link>
        )}
        <div className="flex">
          <TopMenuItem title="My Booking" pageRef="/mybooking" />
        </div>
      </div>
    </div>
  );
}
