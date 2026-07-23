import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Auth from './pages/Auth';
import OwnerDashboard from './pages/owner/Dashboard';
import OwnerCreateJob from './pages/owner/CreateJob';
import OwnerWorkerList from './pages/owner/WorkerList';
import WorkerDashboard from './pages/worker/Dashboard';
import WorkerJobList from './pages/worker/JobList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        
        {/* House Owner Routes */}
        <Route path="/owner/dashboard" element={<OwnerDashboard />} />
        <Route path="/owner/create-job" element={<OwnerCreateJob />} />
        <Route path="/owner/workers" element={<OwnerWorkerList />} />

        {/* Worker Routes */}
        <Route path="/worker/dashboard" element={<WorkerDashboard />} />
        <Route path="/worker/jobs" element={<WorkerJobList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
