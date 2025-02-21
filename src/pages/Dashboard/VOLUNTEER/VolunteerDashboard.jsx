import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import { Dashboard } from './components/Dashboard';
import { Tasks } from './components/Tasks';
import { MapView } from './components/MapView';
import { History } from './components/History';
import { Messages } from './components/Messages';
import { Settings } from './components/Settings';
import { Help } from './components/Help';


export default function VolunteerDashboard() {

  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'tasks':
        return <Tasks />;
      case 'map':
        return <MapView />;
      case 'history':
        return <History />;
      case 'messages':
        return <Messages />;
      case 'settings':
        return <Settings />;
      case 'help':
        return <Help />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar
        isCollapsed={isSidebarCollapsed}
        toggleSidebar={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <main className="flex-1">
        {renderContent()}
      </main>
    </div>
  );
}

