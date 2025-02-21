import React from 'react';

export const StatsCard = ({ title, value, icon: Icon, trend }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <p className="text-2xl font-semibold mt-1">{value}</p>
        </div>
        <div className="bg-green-100 p-3 rounded-lg">
          <Icon className="text-green-600" size={24} />
        </div>
      </div>
      {trend && (
        <div className="mt-2 flex items-center text-sm">
          <span
            className={`${
              trend.isPositive ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {trend.isPositive ? '↑' : '↓'} {Math.abs(trend.value)}%
          </span>
          <span className="text-gray-500 ml-2">vs last week</span>
        </div>
      )}
    </div>
  );
};