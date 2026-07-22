import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { ShieldCheck, Zap, Users } from 'lucide-react';

const Home = () => {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content flex flex-col items-center justify-center animate-fade-in text-center" style={{ padding: '6rem 1.5rem' }}>
        <div style={{ maxWidth: '800px' }}>
          <h1 className="text-3xl mb-4" style={{ fontSize: '3.5rem', fontWeight: '700' }}>
            Find the right <span className="text-gradient">professionals</span> for your home.
          </h1>
          <p className="text-xl text-muted mb-8" style={{ lineHeight: '1.6' }}>
            Whether you need a plumber, electrician, or a cleaner, WorkerFinder connects you with trusted and reviewed local workers in minutes.
          </p>
          
          <div className="flex justify-center gap-4 mb-8">
            <Link to="/auth?role=owner">
              <Button size="lg" variant="primary">Hire a Worker</Button>
            </Link>
            <Link to="/auth?role=worker">
              <Button size="lg" variant="outline">I am a Worker</Button>
            </Link>
          </div>
        </div>

        <div className="container grid grid-cols-3 gap-6 mt-8" style={{ marginTop: '5rem' }}>
          <Card className="text-center">
            <div className="flex justify-center mb-4 text-accent-primary">
              <Zap size={40} />
            </div>
            <h3 className="text-xl mb-2 font-bold">Fast Connections</h3>
            <p className="text-muted">Post a job and get responses from available workers instantly.</p>
          </Card>
          <Card className="text-center">
            <div className="flex justify-center mb-4 text-accent-secondary">
              <ShieldCheck size={40} />
            </div>
            <h3 className="text-xl mb-2 font-bold">Trusted & Verified</h3>
            <p className="text-muted">All workers are reviewed by the community ensuring high quality.</p>
          </Card>
          <Card className="text-center">
            <div className="flex justify-center mb-4 text-accent-primary">
              <Users size={40} />
            </div>
            <h3 className="text-xl mb-2 font-bold">Large Network</h3>
            <p className="text-muted">Access hundreds of professionals across various service categories.</p>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Home;
