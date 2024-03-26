'use server';
import { revalidateTag } from 'next/cache';

export default async function createBooking(
  token:string,
  user: string,
  dentistId: string,
  bookingDate: string,
  symptom: string
) {
  const response = await fetch(
    `${process.env.BACKEND_URL}/api/v1/dentists/${dentistId}/bookings`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        user: user,
        bookingDate: bookingDate,
        symptom: symptom,
      }),
    }
  );
  if (!response.ok) {
    throw new Error(`Failed to create booking`);
  }
  revalidateTag('booking');
  return await response.json();
}
