
import React from 'react';

const TicketDetail = ({ ticket, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-4">
        <h2 className="text-xl font-bold mb-4">{ticket.title}</h2>
        <div className="space-y-2 text-sm">
          <p><strong>Description:</strong> {ticket.description}</p>
          <p><strong>Customer:</strong> {ticket.customer}</p>
          <p><strong>Priority:</strong> <span className={`font-bold ${ticket.priority.toLowerCase() === 'high' ? 'text-red-500' : ticket.priority.toLowerCase() === 'medium' ? 'text-yellow-500' : 'text-blue-500'}`}>{ticket.priority}</span></p>
          <p><strong>Status:</strong> <span className={ticket.status.toLowerCase().replace(' ', '-') === 'open' ? 'text-green-500' : 'text-yellow-500'}>{ticket.status}</span></p>
          <p><strong>Created At:</strong> {ticket.createdAt}</p>
        </div>
        <button
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors w-full"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default TicketDetail;