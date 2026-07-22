import React from 'react';
import Navbar from '../../components/layout/Navbar';
import Sidebar from '../../components/layout/Sidebar';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';

const CreateJob = () => {
  return (
    <div className="app-container">
      <Navbar />
      <div className="dashboard-layout animate-fade-in">
        <Sidebar role="owner" />
        <main className="p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold">Post a New Job</h1>
            <p className="text-muted">Describe what you need help with and find the right worker.</p>
          </div>

          <Card style={{ maxWidth: '800px' }}>
            <form className="flex flex-col gap-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-1 text-muted">Job Title</label>
                  <input type="text" placeholder="e.g., Fix Leaking Pipe" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-muted">Category</label>
                  <select>
                    <option>Select a category</option>
                    <option>Plumbing</option>
                    <option>Electrical</option>
                    <option>Cleaning</option>
                    <option>Carpentry</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 text-muted">Job Description</label>
                <textarea 
                  rows="5" 
                  placeholder="Describe the issue in detail, including location and requirements..."
                ></textarea>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-1 text-muted">Budget ($)</label>
                  <input type="number" placeholder="Enter amount" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-muted">Preferred Date</label>
                  <input type="date" />
                </div>
              </div>

              <div className="flex justify-end gap-4 mt-4">
                <Button variant="ghost" type="button" onClick={() => window.history.back()}>Cancel</Button>
                <Button variant="primary" type="submit">Post Job</Button>
              </div>
            </form>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default CreateJob;
