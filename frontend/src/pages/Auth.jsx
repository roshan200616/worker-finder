import React, { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const Auth = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const initialRole = searchParams.get('role') || 'owner';
  
  const [role, setRole] = useState(initialRole);
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock login logic
    if (role === 'owner') {
      navigate('/owner/dashboard');
    } else {
      navigate('/worker/dashboard');
    }
  };

  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content flex items-center justify-center animate-fade-in p-4">
        <Card className="w-full" style={{ maxWidth: '450px', padding: '2.5rem' }}>
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold mb-2">
              {isLogin ? 'Welcome Back' : 'Create an Account'}
            </h2>
            <p className="text-muted">
              {isLogin ? 'Enter your details to sign in.' : 'Fill in the details to get started.'}
            </p>
          </div>

          <div className="flex gap-2 mb-6 p-1" style={{ background: 'var(--bg-input)', borderRadius: '0.5rem' }}>
            <button 
              className={`flex-1 py-2 rounded text-sm font-medium transition-colors ${role === 'owner' ? 'bg-blue-600 text-white' : 'text-muted'}`}
              onClick={() => setRole('owner')}
              style={role === 'owner' ? { backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-sm)' } : { border: '1px solid transparent' }}
            >
              House Owner
            </button>
            <button 
              className={`flex-1 py-2 rounded text-sm font-medium transition-colors ${role === 'worker' ? 'bg-blue-600 text-white' : 'text-muted'}`}
              onClick={() => setRole('worker')}
              style={role === 'worker' ? { backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-sm)' } : { border: '1px solid transparent' }}
            >
              Worker
            </button>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium mb-1 text-muted">Full Name</label>
                <input type="text" placeholder="John Doe" required />
              </div>
            )}
            
            <div>
              <label className="block text-sm font-medium mb-1 text-muted">Email or Phone Number</label>
              <input type="text" placeholder="you@example.com" required />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-muted">Password</label>
              <input type="password" placeholder="••••••••" required />
            </div>

            <Button type="submit" variant="primary" className="w-full mt-2" style={{ width: '100%' }}>
              {isLogin ? 'Sign In' : 'Sign Up'}
            </Button>
          </form>

          <div className="text-center mt-6">
            <p className="text-sm text-muted">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button 
                className="text-accent-primary font-medium hover:underline"
                onClick={() => setIsLogin(!isLogin)}
              >
                {isLogin ? 'Sign Up' : 'Sign In'}
              </button>
            </p>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default Auth;
