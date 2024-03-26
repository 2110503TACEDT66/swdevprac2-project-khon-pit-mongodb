'use server';
import { revalidateTag } from 'next/cache';

export default async function createBooking(
  user: string,
  dentistId: string,
  bookingDate: Date,
  symptom: string
) {
  const response = await fetch(
    `${process.env.BACKEND_URL}/api/v1/dentists/${dentistId}/bookings`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: user,
        bookingDate: bookingDate,
        symptom: symptom,
        createAt: new Date(),
      }),
    }
  );
  if (!response.ok) {
    throw new Error(`Failed to create booking`);
  }
  revalidateTag('booking');
  return await response.json();
}
