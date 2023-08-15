import { createContext, useState } from "react";

export const PaymentContext = createContext();

const PaymentProvider = ({ children }) => {
    const [payment, setPayment] = useState(false);

    return (
        <PaymentContext.Provider value={{ payment, setPayment }}>
            {children}
        </PaymentContext.Provider>
    );
};

export default PaymentProvider;