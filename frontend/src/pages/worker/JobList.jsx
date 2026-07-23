import React from 'react';
import Navbar from '../../components/layout/Navbar';
import Sidebar from '../../components/layout/Sidebar';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';

const JobList = () => {
  const jobs = [
    { id: 1, title: 'Electrical Wiring for New Room', category: 'Electrical', budget: 300, date: '2026-08-01', location: 'Downtown' },
    { id: 2, title: 'Deep Cleaning needed', category: 'Cleaning', budget: 100, date: '2026-07-25', location: 'Westside' },
    { id: 3, title: 'Assemble Furniture', category: 'Carpentry', budget: 80, date: '2026-07-24', location: 'North Hills' },
  ];

  return (
    <div className="app-container">
      <Navbar />
      <div className="dashboard-layout animate-fade-in">
        <Sidebar role="worker" />
        <main className="p-6">
          <div className="mb-6 flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">Available Jobs</h1>
              <p className="text-muted">Find and accept jobs that match your skills.</p>
            </div>
            <div className="flex gap-2">
               <select className="bg-input border-color rounded px-3 py-2 text-sm" style={{ width: '200px' }}>
                 <option>All Categories</option>
                 <option>Electrical</option>
                 <option>Cleaning</option>
                 <option>Carpentry</option>
               </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {jobs.map((job) => (
              <Card key={job.id} className="flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-bold text-lg">{job.title}</h3>
                    <p className="text-sm text-accent-primary font-medium">{job.category}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xl font-bold text-accent-secondary">${job.budget}</span>
                  </div>
                </div>
                
                <div className="text-sm text-muted mb-6 flex-1">
                  <p className="mb-1">Location: {job.location}</p>
                  <p>Date Needed: {job.date}</p>
                </div>
                
                <div className="flex gap-2 mt-auto">
                  <Button variant="outline" className="flex-1">View Details</Button>
                  <Button variant="primary" className="flex-1">Accept Job</Button>
                </div>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default JobList;
