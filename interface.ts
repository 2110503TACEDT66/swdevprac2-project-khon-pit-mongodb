interface DentistItem {
    id: string,
    name: string,
    picture:string,
    experience: string;
    expertise: string;
    bookings: BookingItem[];
  }
  
  interface DentistJson {
    success: boolean,
    count: number,
    pagination: Object,
    data: DentistItem[]
  }
interface BookingItem{
  id:string,
  user: UserItem,
  dentist: DentistItem,
  bookingDate:Date,
  createAt:Date
}
interface UserItem {
  name: string;
  tel: string;
  email: string;
  role: string;
  password: string;
}
