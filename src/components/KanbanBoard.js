import React, { useState } from 'react';
import TicketCard from './TicketCard';
import GroupSelector from './GroupSelector';
import SortSelector from './SortSelector';
import './KanbanBoard.css';

const KanbanBoard = ({ tickets, users }) => {
  const [groupBy, setGroupBy] = useState('status'); 
  const [sortBy, setSortBy] = useState('title'); 

  const groupTickets = (tickets) => {
    const grouped = {};
    tickets.forEach(ticket => {
      let key;
      if (groupBy === 'status') {
        key = ticket.status;
      } else if (groupBy === 'user') {
        const user = users.find(user => user.id === ticket.userId);
        key = user ? user.name : 'Unknown';
      } else if (groupBy === 'priority') {
        key = ticket.priority;
      }

      if (!grouped[key]) {
        grouped[key] = [];
      }
      grouped[key].push(ticket);
    });
    return grouped;
  };

  const sortedTickets = (tickets) => {
    return tickets.sort((a, b) => {
      if (sortBy === 'priority') {
        return b.priority - a.priority;
      }
      return a.title.localeCompare(b.title);
    });
  };

  const groupedTickets = groupTickets(tickets);

  return (
    <div className="kanban-board">
      <div className="head">

      <GroupSelector groupBy={groupBy} setGroupBy={setGroupBy} />
      <SortSelector sortBy={sortBy} setSortBy={setSortBy} />
      </div>

      {Object.keys(groupedTickets).map((group) => (
        <div key={group} className="kanban-group">
          <h2 className="kanban-group-title">{group}</h2>
          <div className="kanban-group-cards">
            {sortedTickets(groupedTickets[group]).map(ticket => {
              const user = users.find(user => user.id === ticket.userId);
              return <TicketCard key={ticket.id} ticket={ticket} user={user} />;
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default KanbanBoard;
