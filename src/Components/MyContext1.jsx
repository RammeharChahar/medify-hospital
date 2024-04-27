import React, { createContext, useState, useContext } from 'react';

const MyContext = createContext();


export const MyProvider = ({ children }) => {
  const [allResults, setAllResults] = useState([]);
  const [allBookings, setAllBookings] = useState([]);

  return (
    <MyContext.Provider value={{ resultView: [allResults, setAllResults], bookingView: [allBookings, setAllBookings] }}>
       {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => useContext(MyContext);;
