import React from 'react';
import { Clock, MapPin, User, AlertTriangle } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

export const TaskCard = ({ task }) => {
  const statusColors = {
    pending: 'bg-yellow-100 text-yellow-800',
    in_progress: 'bg-blue-100 text-blue-800',
    completed: 'bg-green-100 text-green-800',
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between mb-3">
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
          statusColors[task.status]
        }`}>
          {task.status.replace('_', ' ').toUpperCase()}
        </span>
        {task.priority === 'urgent' && (
          <span className="flex items-center text-red-600 text-sm">
            <AlertTriangle size={16} className="mr-1" />
            Urgent
          </span>
        )}
      </div>
      
      <div className="space-y-3">
        <div className="flex items-start gap-2">
          <User size={18} className="text-gray-500 mt-1" />
          <div>
            <p className="font-medium">{task.donor.name}</p>
            <p className="text-sm text-gray-600">{task.foodDetails.type}</p>
          </div>
        </div>

        <div className="flex items-start gap-2">
          <MapPin size={18} className="text-gray-500 mt-1" />
          <div>
            <p className="text-sm text-gray-600">{task.donor.location}</p>
            {task.recipient && (
              <p className="text-sm text-gray-600">To: {task.recipient.location}</p>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Clock size={16} />
          <span>
            {formatDistanceToNow(new Date(task.scheduledTime), { addSuffix: true })}
          </span>
        </div>
      </div>

      <div className="mt-4 flex gap-2">
        <button className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors">
          Accept
        </button>
        <button className="flex-1 border border-gray-300 py-2 rounded-lg hover:bg-gray-50 transition-colors">
          Details
        </button>
      </div>
    </div>
  );
};