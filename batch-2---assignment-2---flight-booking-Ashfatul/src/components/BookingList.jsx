import React from "react";
import { useSelector } from "react-redux";
import SingleTicket from "./SingleTicket";

const BookingList = () => {
   const currentState = useSelector((state) => state);
   return (
      <div className="table-container">
         <table className="booking-table">
            <thead className="bg-gray-100/50">
               <tr className="text-black text-left">
                  <th>Destination From</th>
                  <th>Destination To</th>
                  <th className="text-center">Journey Date</th>
                  <th className="text-center">Guests</th>
                  <th className="text-center">Class</th>
                  <th className="text-center">Delete</th>
               </tr>
            </thead>
            <tbody
               className="divide-y divide-gray-300/20"
               id="lws-previewBooked"
            >
               {currentState.map((bookingItem) => (
                  <SingleTicket
                     itemID={bookingItem.id}
                     key={bookingItem.id}
                     from={bookingItem.from}
                     to={bookingItem.to}
                     date={bookingItem.date}
                     guest={bookingItem.guestNos}
                     flightClass={bookingItem.flightClass}
                  />
               ))}
            </tbody>
         </table>
      </div>
   );
};

export default BookingList;
