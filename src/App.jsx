
import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import TicketDashboard from './components/TicketDashBoard';


function App() {

  const [inProgressTickets, setInProgressTickets] = useState([]);
  const [resolvedTickets, setResolvedTickets] = useState([]);

  return (
    <>
      <Navbar />
     
      <Banner 
        inProgressCount={inProgressTickets.length} 
        resolvedCount={resolvedTickets.length} 
      />
      <TicketDashboard
        inProgressTickets={inProgressTickets}
        setInProgressTickets={setInProgressTickets}
        resolvedTickets={resolvedTickets}
        setResolvedTickets={setResolvedTickets}
      />
      
      <ToastContainer />
    </>
  );
}

export default App;
