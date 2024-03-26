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
  _id:string,
  user: Object,
  dentist: Object,
  bookingDate:Date,
  symptom:string,
  createAt:Date,
  __v:number
}
interface UserItem {
  name: string;
  tel: string;
  email: string;
  role: string;
  password: string;
}
