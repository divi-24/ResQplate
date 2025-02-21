import React from 'react';
import { ChevronLeft, ChevronRight, Leaf } from 'lucide-react';

function Sidebar({ items, activeSection, setActiveSection, collapsed, setCollapsed }) {

    const groupedItems = items.reduce((acc, item) => {
    const category = item.category || 'main';
    if (!acc[category]) acc[category] = [];
    acc[category].push(item);
    return acc;
  }, {});

  return (
    <div 
      className={`bg-white border-r border-gray-200 transition-all duration-300 h-screen relative
        ${collapsed ? 'w-20' : 'w-72'}`}
    >

      <div className="h-16 px-4 border-b border-gray-200 flex items-center justify-between">
        <div className="flex items-center gap-3 overflow-hidden">
          <div className="bg-green-50 p-2 rounded-lg flex-shrink-0">
            <Leaf className="h-5 w-5 text-green-600" />
          </div>
          {!collapsed && (
            <span className="text-lg font-semibold text-gray-800 whitespace-nowrap">
              SustainaBite
            </span>
          )}
        </div>
      </div>


      <div className="p-4 flex flex-col h-[calc(100vh-4rem)] overflow-y-auto">
        {Object.entries(groupedItems).map(([category, categoryItems]) => (
          <div key={category} className="mb-6 last:mb-0">

            {!collapsed && category !== 'main' && (
              <div className="px-3 mb-2">
                <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                  {category}
                </p>
              </div>
            )}

            <div className="space-y-1">
              {categoryItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`w-full flex items-center px-3 py-2.5 rounded-lg transition-all duration-200
                      ${isActive 
                        ? 'bg-green-50 text-green-600' 
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      }
                      ${collapsed ? 'justify-center' : 'justify-start'}
                    `}
                  >
                    <div className="relative flex items-center">
                      <Icon 
                        size={20} 
                        className={`flex-shrink-0 transition-colors duration-200
                          ${isActive ? 'text-green-600' : 'text-gray-400'}`} 
                      />
                      
                      {!collapsed && (
                        <span className="ml-3 text-sm font-medium">
                          {item.label}
                        </span>
                      )}
                    </div>

                    {isActive && !collapsed && (
                      <div className="ml-auto">
                        <div className="h-2 w-2 rounded-full bg-green-600" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-3 top-20 bg-white border border-gray-200 rounded-full p-1.5 hover:bg-gray-50 shadow-sm transition-colors duration-200"
      >
        {collapsed ? (
          <ChevronRight size={16} className="text-gray-600" />
        ) : (
          <ChevronLeft size={16} className="text-gray-600" />
        )}
      </button>
    </div>
  );
}

export default Sidebar;