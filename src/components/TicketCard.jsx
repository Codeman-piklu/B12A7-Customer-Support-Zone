
import React from 'react';

const TicketCard = ({ tickets, setTickets, handleAddToTask, inProgressTickets }) => {
  const getStatusColor = (status) => {
    switch (status.toLowerCase().replace(' ', '-')) {
      case 'open': return 'bg-green-500';
      case 'in-progress': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority.toLowerCase()) {
      case 'high': return 'text-red-500';
      case 'medium': return 'text-yellow-500';
      case 'low': return 'text-blue-500';
      default: return 'text-gray-500';
    }
  };

  const isInProgress = (ticketId) => inProgressTickets.find(t => t.id === ticketId);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {tickets.map(ticket => {
        const inProgress = isInProgress(ticket.id);
        return (
          <div
            key={ticket.id}
            className={`p-4 border-2 rounded-lg shadow-sm cursor-pointer hover:shadow-md transition-all duration-200 ${
              inProgress 
                ? 'border-blue-500 bg-blue-50'  
                : 'border-gray-300 hover:border-gray-400 hover:bg-gray-50'
            }`}
            onClick={() => {
              if (!inProgress) {
                handleAddToTask(ticket); 
              }
            }}
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold text-lg flex-1 pr-2">{ticket.title}</h3>
              <div className={`flex-shrink-0 ${getStatusColor(ticket.status)} w-2 h-2 rounded-full mt-1`}></div>
            </div>
            <p className="text-gray-600 text-sm mb-2">{ticket.description.substring(0, 80)}...</p>
            <div className="flex justify-between items-center text-sm text-gray-500">
              <span className={`font-bold ${getPriorityColor(ticket.priority)}`}>
                {ticket.priority} PRIORITY
              </span>
              <span>{ticket.customer}</span>
              <span className="hidden md:block">{ticket.createdAt}</span>
              <span className={`text-xs px-2 py-1 rounded-full bg-opacity-20 ${getStatusColor(ticket.status).replace('bg-', 'text-')}`}>
                {ticket.status}
              </span>
            </div>
            {inProgress && (
              <p className="text-xs text-blue-600 mt-1 font-medium">Selected</p> 
            )}
          </div>
        );
      })}
    </div>
  );
};

export default TicketCard;