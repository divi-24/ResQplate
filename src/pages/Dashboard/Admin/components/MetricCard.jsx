import React from 'react';
import * as Icons from 'lucide-react';

export function MetricCard({ metric }) {
  const Icon = Icons[metric.icon];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center">
        <div className="p-3 rounded-lg bg-indigo-100">
          <Icon className="h-6 w-6 text-indigo-600" />
        </div>
        <div className="ml-4">
          <p className="text-sm font-medium text-gray-600">{metric.label}</p>
          <p className="text-2xl font-semibold text-gray-900">{metric.value}</p>
        </div>
      </div>
      <div className="mt-4 flex items-center">
        <span className={`text-sm ${
          metric.change >= 0 ? 'text-green-600' : 'text-red-600'
        }`}>
          {metric.change >= 0 ? '+' : ''}{metric.change}%
        </span>
        <span className="text-sm text-gray-500 ml-2">vs last month</span>
      </div>
    </div>
  );
}