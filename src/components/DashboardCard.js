import React from 'react';

const DashboardCard = ({ title, value, icon }) => {
  return (
    <div className="dashboard-card">
      <div className="card-header">
        <i className={`card-icon ${icon}`} />
        <h3>{title}</h3>
      </div>
      <div className="card-value">
        <h2>{value}</h2>
      </div>
    </div>
  );
};

export default DashboardCard;
