import getDentists from '@/libs/getDentists'

import BookingPagSon from '@/components/BookingPageSon';

export default async function Dentist() {
  
  const dentists = await getDentists();
  return (
    <main className='text-center p-5'>
      <BookingPagSon dentistJson={dentists}/>
    </main>
  )
}
