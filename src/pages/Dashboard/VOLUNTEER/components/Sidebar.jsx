import React from 'react';
import {
  LayoutDashboard,
  ClipboardList,
  Map,
  History,
  MessageSquare,
  Settings,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { useAuth } from '../../../../context/AuthContext';

const Sidebar = ({ isCollapsed, toggleSidebar, activeTab, setActiveTab }) => {
  const auth = useAuth();
  const user = auth[0]?.user;
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', id: 'dashboard' },
    { icon: ClipboardList, label: 'Tasks', id: 'tasks' },
    { icon: Map, label: 'Map', id: 'map' },
    { icon: History, label: 'History', id: 'history' },
    { icon: MessageSquare, label: 'Messages', id: 'messages', badge: 3 },
    { icon: Settings, label: 'Settings', id: 'settings' },
    { icon: HelpCircle, label: 'Help', id: 'help' },
  ];

  return (
    <div className={`
      max-h-full bg-white
      border-r border-gray-200
      shadow-lg
      transition-all duration-300 ease-in-out
      relative 
      ${isCollapsed ? 'w-20' : 'w-64'}
    `}>
      <div className="p-6 border border-gray-200">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-emerald-500 flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="font-semibold text-gray-900">SustainBite</span>
            </div>
          )}
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors absolute right-4"
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {isCollapsed ? (
              <ChevronRight className="h-5 w-5 text-gray-500" />
            ) : (
              <ChevronLeft className="h-5 w-5 text-gray-500" />
            )}
          </button>
        </div>
      </div>

      <nav className="p-4">
        <div className="space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`
                w-full flex items-center justify-start
                px-4 py-3 rounded-lg
                transition-all duration-200
                group relative
                ${activeTab === item.id 
                  ? 'bg-emerald-50 text-emerald-600' 
                  : 'text-gray-600 hover:bg-gray-50 hover:text-emerald-600'
                }
              `}
            >
              <div className="flex items-center gap-3">
                <item.icon className={`
                  h-5 w-5
                  transition-transform duration-200
                  ${activeTab === item.id ? 'text-emerald-600' : 'text-gray-500'}
                  group-hover:text-emerald-600
                `} />
                
                {!isCollapsed && (
                  <span className={`
                    font-medium transition-colors duration-200
                    ${activeTab === item.id ? 'text-emerald-600' : 'text-gray-700'}
                  `}>
                    {item.label}
                  </span>
                )}
              </div>

              {item.badge && !isCollapsed && (
                <div className="absolute right-4 bg-emerald-100 text-emerald-600 px-2 py-0.5 rounded-full text-xs font-medium">
                  {item.badge}
                </div>
              )}

              {isCollapsed && (
                <div className="
                  absolute left-full ml-2 
                  px-2 py-1 
                  bg-gray-800 text-white 
                  text-sm rounded 
                  opacity-0 group-hover:opacity-100 
                  transition-opacity duration-200
                  pointer-events-none
                  whitespace-nowrap
                  z-50
                ">
                  {item.label}
                </div>
              )}
            </button>
          ))}
        </div>
      </nav>

      <div className="absolute bottom-0 w-full p-4 border-t border-gray-200 bg-white">
        <div className="flex items-center gap-3 px-4 py-2">
          <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
            <span className="text-sm font-medium text-gray-600">{user?.name[0]}</span>
          </div>
          {!isCollapsed && (
            <div className="flex flex-col">
              <span className="text-sm font-medium text-gray-700">{user?.name}</span>
              <span className="text-xs text-gray-500">{user?.email}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;