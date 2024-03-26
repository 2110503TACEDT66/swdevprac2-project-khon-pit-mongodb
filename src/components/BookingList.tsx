import getBookings from '@/libs/getBookings';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { revalidateTag } from 'next/cache';
import Booking from './Booking';

export default async function BookingList() {
  const session = await getServerSession(authOptions);
  if (!session || !session.user.token) return null;

  const bookingItems = await getBookings(session?.user.token);

  async function deleteBooking(id: string) {
    'use server';
    const response = await fetch(
      `https://presentation-day-1-khon-pit-mongodb-liard.vercel.app/api/v1/bookings/${id}`,
      {
        method: 'DELETE',
        headers: {
          authorization: `Bearer ${session?.user.token}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error('Failed to delete booking');
    }
    revalidateTag('booking');
    return await response.json();
  }

  async function updateBooking(id: string, symptom: string) {
    'use server';
    const response = await fetch(
      `https://presentation-day-1-khon-pit-mongodb-liard.vercel.app/api/v1/bookings/${id}`,
      {
        method: 'PUT',
        headers: {
          authorization: `Bearer ${session?.user.token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          symptom: symptom,
        }),
      }
    );
    if (!response.ok) {
      throw new Error('Failed to update booking');
    }
    revalidateTag('booking');
    return await response.json();
  }

  return (
    <div>
      {bookingItems.length > 0 ? (
        bookingItems.map((bookingItem: BookingItem) => (
          <Booking
            key={bookingItem._id}
            bookingItem={bookingItem}
            onDeleteBooking={deleteBooking}
            onUpdateBooking={updateBooking}
          />
        ))
      ) : (
        <div>No Dentist Booking</div>
      )}
    </div>
  );
}
