import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Users, PlusCircle, Star, Briefcase } from 'lucide-react';

const Sidebar = ({ role }) => {
  const location = useLocation();
  
  const ownerLinks = [
    { name: 'Dashboard', path: '/owner/dashboard', icon: LayoutDashboard },
    { name: 'Create Job', path: '/owner/create-job', icon: PlusCircle },
    { name: 'Find Workers', path: '/owner/workers', icon: Users },
  ];

  const workerLinks = [
    { name: 'Dashboard', path: '/worker/dashboard', icon: LayoutDashboard },
    { name: 'Available Jobs', path: '/worker/jobs', icon: Briefcase },
  ];

  const links = role === 'owner' ? ownerLinks : workerLinks;

  return (
    <aside className="sidebar" style={{ borderRight: '1px solid var(--border-color)', padding: '2rem 1rem' }}>
      <div className="flex flex-col gap-2">
        {links.map((link) => {
          const Icon = link.icon;
          const isActive = location.pathname === link.path;
          return (
            <Link
              key={link.path}
              to={link.path}
              className="flex items-center gap-4"
              style={{
                padding: '0.75rem 1rem',
                borderRadius: '0.5rem',
                backgroundColor: isActive ? 'rgba(59, 130, 246, 0.1)' : 'transparent',
                color: isActive ? 'var(--accent-primary)' : 'var(--text-muted)',
                transition: 'all 0.2s',
              }}
            >
              <Icon size={20} />
              <span className="font-medium">{link.name}</span>
            </Link>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
