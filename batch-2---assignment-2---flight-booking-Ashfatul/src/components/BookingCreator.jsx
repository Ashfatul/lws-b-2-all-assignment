import React from "react";
import { useDispatch } from "react-redux";
import Frame from "../img/icons/Frame.svg";
import Vector1 from "../img/icons/Vector (1).svg";
import Vector3 from "../img/icons/Vector (3).svg";
import { addBookingNew } from "../redux/booking/actionsCreator";

const BookingCreator = () => {
   const dispatch = useDispatch();

   const addBooking = (e) => {
      e.preventDefault();
      const bookingFrom = document.getElementById("lws-from");
      const bookingTo = document.getElementById("lws-to");
      const bookingDate = document.getElementById("lws-date");
      const bookingForGuests = document.getElementById("lws-guests");
      const bookingClass = document.getElementById("lws-ticketClass");

      // Check if any input field is empty
      if (
         bookingFrom.value === "" ||
         bookingTo.value === "" ||
         bookingDate.value === "" ||
         bookingForGuests.value === "" ||
         bookingClass.value === ""
      ) {
         alert(
            "Please make sure you have provided required data for the booking... all fields are required"
         );
      } else {
         const metadata = {
            from: bookingFrom.value,
            to: bookingTo.value,
            date: bookingDate.value,
            guestNos: bookingForGuests.value,
            flightClass: bookingClass.value,
         };
         dispatch(addBookingNew(metadata));
         bookingFrom.selectedIndex = 0;
         bookingTo.selectedIndex = 0;
         bookingDate.value = "";
         bookingForGuests.selectedIndex = 0;
         bookingClass.selectedIndex = 0;
      }
   };
   return (
      <div className="mt-[160px] mx-4 md:mt-[160px] relative">
         <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
            <form className="first-hero lws-inputform">
               <div className="des-from">
                  <p>Destination From</p>
                  <div className="flex flex-row">
                     <img src={Frame} alt="" />
                     <select
                        className="outline-none px-2 py-2 w-full"
                        name="from"
                        id="lws-from"
                        required
                     >
                        <option value="" hidden>
                           Please Select
                        </option>
                        <option>Dhaka</option>
                        <option>Sylhet</option>
                        <option>Saidpur</option>
                        <option>Cox's Bazar</option>
                     </select>
                  </div>
               </div>

               <div className="des-from">
                  <p>Destination To</p>
                  <div className="flex flex-row">
                     <img src={Frame} alt="" />
                     <select
                        className="outline-none px-2 py-2 w-full"
                        name="to"
                        id="lws-to"
                        required
                     >
                        <option value="" hidden>
                           Please Select
                        </option>
                        <option>Dhaka</option>
                        <option>Sylhet</option>
                        <option>Saidpur</option>
                        <option>Cox's Bazar</option>
                     </select>
                  </div>
               </div>

               <div className="des-from">
                  <p>Journey Date</p>
                  <input
                     type="date"
                     className="outline-none px-2 py-2 w-full date"
                     name="date"
                     id="lws-date"
                     required
                  />
               </div>

               <div className="des-from">
                  <p>Guests</p>
                  <div className="flex flex-row">
                     <img src={Vector1} alt="" />
                     <select
                        className="outline-none px-2 py-2 w-full"
                        name="guests"
                        id="lws-guests"
                        required
                     >
                        <option value="" hidden>
                           Please Select
                        </option>
                        <option value="1">1 Person</option>
                        <option value="2">2 Persons</option>
                        <option value="3">3 Persons</option>
                        <option value="4">4 Persons</option>
                     </select>
                  </div>
               </div>

               <div className="des-from !border-r-0">
                  <p>Class</p>
                  <div className="flex flex-row">
                     <img src={Vector3} alt="" />
                     <select
                        className="outline-none px-2 py-2 w-full"
                        name="ticketClass"
                        id="lws-ticketClass"
                        required
                     >
                        <option value="" hidden>
                           Please Select
                        </option>
                        <option>Business</option>
                        <option>Economy</option>
                     </select>
                  </div>
               </div>

               <button
                  className="addCity"
                  type="submit"
                  id="lws-addCity"
                  onClick={addBooking}
               >
                  <svg
                     width="15px"
                     height="15px"
                     fill="none"
                     viewBox="0 0 24 24"
                     strokeWidth="2"
                     stroke="currentColor"
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                     />
                  </svg>
                  <span className="text-sm">Book</span>
               </button>
            </form>
         </div>
      </div>
   );
};

export default BookingCreator;
