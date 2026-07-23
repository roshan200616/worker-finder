import React from 'react';
import Navbar from '../../components/layout/Navbar';
import Sidebar from '../../components/layout/Sidebar';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { Star } from 'lucide-react';

const WorkerList = () => {
  const workers = [
    { id: 1, name: 'Mike Ross', category: 'Plumbing', rating: 4.8, jobs: 42, hourly: 45 },
    { id: 2, name: 'Sarah Connor', category: 'Electrical', rating: 4.9, jobs: 89, hourly: 60 },
    { id: 3, name: 'John Wick', category: 'Cleaning', rating: 4.5, jobs: 112, hourly: 30 },
  ];

  return (
    <div className="app-container">
      <Navbar />
      <div className="dashboard-layout animate-fade-in">
        <Sidebar role="owner" />
        <main className="p-6">
          <div className="mb-6 flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">Find Workers</h1>
              <p className="text-muted">Browse top-rated professionals for your jobs.</p>
            </div>
            <div className="flex gap-2">
              <input type="text" placeholder="Search by name or skill..." style={{ width: '300px' }} />
              <Button variant="primary">Search</Button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {workers.map((worker) => (
              <Card key={worker.id} className="flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-bold text-lg">{worker.name}</h3>
                    <p className="text-sm text-accent-primary font-medium">{worker.category}</p>
                  </div>
                  <div className="flex items-center gap-1 text-yellow-400 bg-slate-800/50 px-2 py-1 rounded">
                    <Star size={14} fill="currentColor" />
                    <span className="text-sm font-bold text-white">{worker.rating}</span>
                  </div>
                </div>
                
                <div className="text-sm text-muted mb-6 flex-1">
                  <p>Completed {worker.jobs} jobs successfully.</p>
                  <p className="mt-2 font-medium text-white">${worker.hourly}/hr</p>
                </div>
                
                <Button variant="primary" className="w-full" style={{ width: '100%' }}>View Profile</Button>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default WorkerList;
