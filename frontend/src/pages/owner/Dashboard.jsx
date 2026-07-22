import React from 'react';
import Navbar from '../../components/layout/Navbar';
import Sidebar from '../../components/layout/Sidebar';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';

const Dashboard = () => {
  return (
    <div className="app-container">
      <Navbar />
      <div className="dashboard-layout animate-fade-in">
        <Sidebar role="owner" />
        <main className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-2xl font-bold">House Owner Dashboard</h1>
              <p className="text-muted">Welcome back, here is an overview of your activity.</p>
            </div>
            <Button variant="primary" onClick={() => window.location.href = '/owner/create-job'}>
              Post New Job
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-6 mb-8">
            <Card>
              <h3 className="text-muted text-sm font-medium mb-1">Active Jobs</h3>
              <p className="text-3xl font-bold text-accent-primary">2</p>
            </Card>
            <Card>
              <h3 className="text-muted text-sm font-medium mb-1">Completed Jobs</h3>
              <p className="text-3xl font-bold text-accent-secondary">15</p>
            </Card>
            <Card>
              <h3 className="text-muted text-sm font-medium mb-1">Total Spent</h3>
              <p className="text-3xl font-bold text-white">$1,250</p>
            </Card>
          </div>

          <h2 className="text-xl font-bold mb-4">Your Recent Jobs</h2>
          <div className="flex flex-col gap-4">
            {[1, 2].map((i) => (
              <Card key={i} className="flex justify-between items-center p-4">
                <div>
                  <h3 className="font-bold text-lg">Fix Leaking Pipe</h3>
                  <p className="text-sm text-muted">Posted 2 days ago • Plumbing</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="px-3 py-1 rounded-full text-xs font-medium" style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)', color: 'var(--accent-primary)' }}>
                    Active
                  </span>
                  <Button variant="outline" size="sm">View Details</Button>
                </div>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
