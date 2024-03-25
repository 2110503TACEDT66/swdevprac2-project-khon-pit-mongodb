'use client'
import { removeBooking } from "@/redux/features/bookSlice"
import { AppDispatch,useAppSelector } from "@/redux/store"
import { useDispatch } from "react-redux"
export default function BookingList(){
    const hospitalItems = useAppSelector((state)=>state.bookSlice.bookItems)
    const dispatch = useDispatch<AppDispatch>()
    return (
        <>
            {
                hospitalItems.length>0?
                hospitalItems.map((bookingItem:BookingItem)=>(
                    <div className="bg-slate-200 rounded px-5 py-2 my-2" key={bookingItem.hospital}>
                        <div className="text-sm">Name : {bookingItem.name}</div>
                        <div className="text-sm">Surname : {bookingItem.surname}</div>
                        <div className="text-sm">Citizen ID : {bookingItem.id}</div>
                        <div className="text-sm">Hospital : {bookingItem.hospital}</div>
                        <div className="text-sm">Booking date : {bookingItem.bookDate}</div>
                        <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2
                        shadow-sm text-white" onClick={()=>dispatch(removeBooking(bookingItem.id))}>Remove Booking</button>
                    </div>
                )):<div>No Vaccine Booking</div>
                
            }
        </>
    )
}