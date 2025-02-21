import React, { useState } from 'react';
import { TaskCard } from './TaskCard';
import { Search, Filter } from 'lucide-react';

const mockTasks = [
  {
    id: '1',
    type: 'pickup',
    status: 'pending',
    priority: 'urgent',
    donor: {
      name: 'Fresh Foods Market',
      location: '123 Market St, Downtown',
      contact: '+1234567890',
    },
    foodDetails: {
      type: 'Fresh Produce',
      quantity: '50 lbs',
      specialInstructions: 'Handle with care, includes fragile items',
    },
    scheduledTime: new Date().toISOString(),
    assignedAt: new Date().toISOString(),
  },
  {
    id: '2',
    type: 'delivery',
    status: 'in_progress',
    priority: 'regular',
    donor: {
      name: 'City Bakery',
      location: '456 Baker Ave',
      contact: '+1234567891',
    },
    recipient: {
      name: 'Hope Community Center',
      location: '789 Hope St',
      contact: '+1234567892',
    },
    foodDetails: {
      type: 'Baked Goods',
      quantity: '30 lbs',
    },
    scheduledTime: new Date().toISOString(),
    assignedAt: new Date().toISOString(),
  },
  {
    id: '3',
    type: 'pickup',
    status: 'completed',
    priority: 'regular',
    donor: {
      name: 'Local Restaurant',
      location: '789 Food St',
      contact: '+1234567893',
    },
    foodDetails: {
      type: 'Prepared Meals',
      quantity: '25 meals',
    },
    scheduledTime: new Date().toISOString(),
    assignedAt: new Date().toISOString(),
  },
];

export const Tasks = () => {
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTasks = mockTasks.filter(task => {
    const matchesFilter = filter === 'all' || task.status === filter;
    const matchesSearch = task.donor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         task.foodDetails.type.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Task Management</h1>
        
        <div className="flex flex-wrap gap-4 items-center">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search tasks..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
          </div>
          
          <div className="flex items-center gap-2">
            <Filter size={20} className="text-gray-500" />
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="all">All Tasks</option>
              <option value="pending">Pending</option>
              <option value="in_progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {filteredTasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
        {filteredTasks.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No tasks found matching your criteria
          </div>
        )}
      </div>
    </div>
  );
};