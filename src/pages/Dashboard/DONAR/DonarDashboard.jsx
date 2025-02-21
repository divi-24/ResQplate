import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Navigation from './components/Navigation';
import Dashboard from './pages/Dashboard';

function DonarDashboard() {
  return (
    <div className="">
        <Navigation />
        <Routes>
            <Route path="/" element={<Dashboard />} />
    </Routes>
      </div>
  );
}

export default DonarDashboard;