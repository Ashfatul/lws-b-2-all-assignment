import { ADD_BOOKING, REMOVE_BOOKING } from "./actionTypes";

export const addBookingNew = (metadata) => {
   return {
      type: ADD_BOOKING,
      payload: {
         from: metadata.from,
         to: metadata.to,
         date: metadata.date,
         guestNos: metadata.guestNos,
         flightClass: metadata.flightClass,
      },
   };
};

export const removeBooking = (id) => {
   return {
      type: REMOVE_BOOKING,
      payload: id,
   };
};
