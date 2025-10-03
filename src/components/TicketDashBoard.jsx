import React, { useState, useEffect } from 'react';
import TicketCard from './TicketCard';
import TaskCard from './TaskCard';
import { toast } from 'react-toastify'; 

const TicketDashboard = ({ inProgressTickets, setInProgressTickets, resolvedTickets, setResolvedTickets }) => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await fetch('/tickets.json');
        if (!response.ok) throw new Error('Failed to load tickets');
        const data = await response.json();
        setTickets(data);
      } catch (error) {
        console.error('Fetch error:', error);
        setTickets([]);
      }
    };
    fetchTickets();
  }, []);

  const handleAddToTask = (ticket) => {
    if (!inProgressTickets.find(t => t.id === ticket.id)) {
      setInProgressTickets([...inProgressTickets, ticket]);
    }
  };

  const handleComplete = (ticketId) => {
    const ticket = inProgressTickets.find(t => t.id === ticketId);
    if (ticket) {
      setInProgressTickets(inProgressTickets.filter(t => t.id !== ticketId));
      setResolvedTickets([...resolvedTickets, { ...ticket, resolvedAt: new Date().toLocaleDateString() }]);
      setTickets(tickets.filter(t => t.id !== ticketId));

  
      toast.success(`Ticket "${ticket.title}" completed! 🎉`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <div className="bg-white w-full text-black">
      <div className="container mx-auto px-4 py-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-6">
          
          <div className="lg:w-2/3">
            <h2 className="text-xl font-semibold mb-4">Customer Tickets</h2>
            {tickets.length === 0 ? (
              <p className="text-gray-500">No tickets available.</p>
            ) : (
              <TicketCard
                tickets={tickets}
                setTickets={setTickets}
                handleAddToTask={handleAddToTask}
                inProgressTickets={inProgressTickets}
              />
            )}
          </div>

      
          <div className="lg:w-1/3">
            <h2 className="text-xl font-semibold mb-4">Task Status</h2>
            <p className="text-gray-500 mb-4">Select a ticket to add to Task Status</p>
            <TaskCard
              inProgressTickets={inProgressTickets}
              resolvedTickets={resolvedTickets}
              handleComplete={handleComplete} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketDashboard;
