export default async function getBookings(token: string) {
  const response = await fetch(
    'https://presentation-day-1-khon-pit-mongodb-liard.vercel.app/api/v1/bookings',
    {
      next: { tags: ['booking'] },
      method: 'GET',
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );
  if (!response.ok) {
    throw new Error('Failed to fetch bookings');
  }
  const bookings = await response.json();

  return bookings.data;
}
