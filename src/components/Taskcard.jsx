
import React from 'react';

const TaskCard = ({ inProgressTickets, resolvedTickets, handleComplete }) => {
  const getPriorityColor = (priority) => {
    switch (priority.toLowerCase()) {
      case 'high': return 'text-red-500';
      case 'medium': return 'text-yellow-500';
      case 'low': return 'text-blue-500';
      default: return 'text-gray-500';
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold mb-2">In Progress</h3>
        {inProgressTickets.length === 0 ? (
          <p className="text-gray-500">No tasks in progress.</p>
        ) : (
          inProgressTickets.map(ticket => (
            <div key={ticket.id} className="flex justify-between items-center p-4 border rounded-lg shadow-sm mb-2 bg-white">
              <div>
                <h4 className="font-semibold text-lg">{ticket.title}</h4>
                <p className="text-sm text-gray-600">{ticket.customer}</p>
                <span className={`text-xs px-2 py-1 rounded-full bg-yellow-100 text-yellow-800`}>
                  {ticket.priority} Priority
                </span>
              </div>
              <button
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
                onClick={() => handleComplete(ticket.id)}
              >
                Complete
              </button>
            </div>
          ))
        )}
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Resolved Tasks</h3>
        {resolvedTickets.length === 0 ? (
          <p className="text-gray-500">No resolved tasks yet.</p>
        ) : (
          resolvedTickets.map(ticket => (
            <div key={ticket.id} className="p-4 border border-blue-300 rounded-lg shadow-sm mb-2 bg-blue-50 text-blue-600">
              <h4 className="font-semibold text-lg">{ticket.title}</h4>
              <p className="text-sm">{ticket.customer} - Resolved on {new Date().toLocaleDateString()}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TaskCard;