import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Briefcase, User, LogOut } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const isAuthPage = location.pathname === '/auth';

  return (
    <nav className="glass" style={{ position: 'sticky', top: 0, zIndex: 50 }}>
      <div className="container flex items-center justify-between" style={{ height: '70px' }}>
        <Link to="/" className="flex items-center gap-2">
          <Briefcase className="text-accent-primary" size={28} />
          <span className="text-xl font-bold text-gradient">WorkerFinder</span>
        </Link>
        
        <div className="flex items-center gap-4">
          {!isAuthPage ? (
            <>
              <Link to="/auth" className="btn btn-ghost btn-sm">Sign In</Link>
              <Link to="/auth" className="btn btn-primary btn-sm">Get Started</Link>
            </>
          ) : (
            <Link to="/" className="btn btn-ghost btn-sm">Back to Home</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
