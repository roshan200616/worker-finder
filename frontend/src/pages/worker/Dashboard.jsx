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
        <Sidebar role="worker" />
        <main className="p-6">
          <div className="mb-6 flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">Worker Dashboard</h1>
              <p className="text-muted">Manage your jobs and earnings.</p>
            </div>
            <Button variant="primary" onClick={() => window.location.href = '/worker/jobs'}>
              Find New Jobs
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-6 mb-8">
            <Card>
              <h3 className="text-muted text-sm font-medium mb-1">Ongoing Jobs</h3>
              <p className="text-3xl font-bold text-accent-primary">1</p>
            </Card>
            <Card>
              <h3 className="text-muted text-sm font-medium mb-1">Total Earnings</h3>
              <p className="text-3xl font-bold text-accent-secondary">$4,500</p>
            </Card>
            <Card>
              <h3 className="text-muted text-sm font-medium mb-1">Profile Rating</h3>
              <p className="text-3xl font-bold text-yellow-400">4.8 / 5.0</p>
            </Card>
          </div>

          <h2 className="text-xl font-bold mb-4">Your Accepted Jobs</h2>
          <div className="flex flex-col gap-4">
            <Card className="flex justify-between items-center p-4">
              <div>
                <h3 className="font-bold text-lg">Fix Leaking Pipe</h3>
                <p className="text-sm text-muted">Client: Alice Johnson • Location: 123 Main St</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="px-3 py-1 rounded-full text-xs font-medium" style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)', color: 'var(--accent-primary)' }}>
                  In Progress
                </span>
                <Button variant="outline" size="sm">Update Status</Button>
              </div>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
