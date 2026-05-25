import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const stats = [
    { id: 1, title: 'Total Guests', value: 1250, icon: '👥', color: '#667eea' },
    { id: 2, title: 'Occupied Rooms', value: 45, icon: '🛏️', color: '#764ba2' },
    { id: 3, title: 'Pending Bookings', value: 12, icon: '📅', color: '#f093fb' },
    { id: 4, title: 'Revenue Today', value: '$2,450', icon: '💰', color: '#4facfe' },
  ];

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <p>Welcome to RAS HOTEL Management System</p>
      </div>
      <div className="stats-grid">
        {stats.map((stat) => (
          <div key={stat.id} className="stat-card" style={{ borderLeftColor: stat.color }}>
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-content">
              <p className="stat-title">{stat.title}</p>
              <h3 className="stat-value">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
