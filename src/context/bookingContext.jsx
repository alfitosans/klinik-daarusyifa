import { createContext, useState } from "react";

export const BookingContext = createContext();

const BookingProvider = ({ children }) => {
    // const [booking, setBooking] = useState(false);
    const [fullName, setFullName] = useState('')
    const [complaint, setComplaint] = useState('')

    return (
        <BookingContext.Provider value={{ fullName, setFullName, complaint, setComplaint }}>
            {children}
        </BookingContext.Provider>
    );
}

export default BookingProvider;