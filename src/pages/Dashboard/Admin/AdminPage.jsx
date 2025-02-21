import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Dashboard } from './components/Dashboard';
import { Donations } from './components/Donations';
import { Requests } from './components/Requests';
import { Volunteers } from './components/Volunteers';
import { Users } from './components/Users';
import { Reports } from './components/Reports';
import { Settings } from './components/Settings';
import { Help } from './components/Help';

export default function AdminPage() {
  const [activeComponent, setActiveComponent] = useState('Dashboard');

  const components = {
    Dashboard: Dashboard,
    Donations: Donations,
    Requests: Requests,
    Volunteers: Volunteers,
    Users: Users,
    Reports: Reports,
    Settings: Settings,
    Help: Help
  };

  const ActiveComponent = components[activeComponent];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar setActiveComponent={setActiveComponent} />
      <ActiveComponent />
    </div>
  );
}

