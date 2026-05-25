import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const menuItems = [
    { id: 1, label: 'Dashboard', path: '/', icon: '📊' },
    { id: 2, label: 'Bookings', path: '/bookings', icon: '📅' },
    { id: 3, label: 'Guests', path: '/guests', icon: '👥' },
    { id: 4, label: 'Rooms', path: '/rooms', icon: '🛏️' },
    { id: 5, label: 'Payments', path: '/payments', icon: '💳' },
    { id: 6, label: 'Settings', path: '/settings', icon: '⚙️' },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h1 className="sidebar-title">RAS HOTEL</h1>
      </div>
      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <Link key={item.id} to={item.path} className="nav-item">
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </Link>
        ))}
      </nav>
      <div className="sidebar-footer">
        <p className="footer-text">© 2026 RAS HOTEL</p>
      </div>
    </aside>
  );
};

export default Sidebar;
