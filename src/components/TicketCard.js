import React from 'react';
import './TicketCard.css';

const TicketCard = ({ ticket, user }) => {
  
  const getInitials = (name) => {
    const nameParts = name.split(' ');
    const initials = nameParts.map(part => part[0]).join('');
    return initials;
  };

  return (
    <div className="ticket-card">
      <div className="ticket-header">
        <span className="ticket-id">{ticket.id}</span>
        {}
        <div className="profile-circle">{getInitials(user.name)}</div>
      </div>
      <h3 className="ticket-title">{ticket.title}</h3>
      <div className="ticket-tags">
        <span className="ticket-priority">{getPriorityIcon(ticket.priority)}</span>
        <span className="ticket-tag">{ticket.tag[0]}</span>
      </div>
    </div>
  );
};


const getPriorityIcon = (priority) => {
  switch (priority) {
    case 4: return <span className="urgent-icon">⚠️</span>; // Urgent
    case 3: return <span className="high-icon">🔥</span>; // High
    case 2: return <span className="medium-icon">⬆️</span>; // Medium
    case 1: return <span className="low-icon">⬇️</span>; // Low
    default: return <span className="no-priority-icon">🚫</span>; // No Priority
  }
};

export default TicketCard;
