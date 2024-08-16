// src/TeamManagement.js
import React, { useState } from 'react';
import './TeamManagement.css';

const TeamManagement = () => {
  const [members, setMembers] = useState([]);
  const [memberName, setMemberName] = useState('');
  const [memberRole, setMemberRole] = useState('');

  const addMember = () => {
    const newMember = {
      id: members.length + 1,
      name: memberName,
      role: memberRole,
      active: true,
    };
    setMembers([...members, newMember]);
    setMemberName('');
    setMemberRole('');
  };

  const toggleMemberStatus = (id) => {
    const updatedMembers = members.map(member =>
      member.id === id ? { ...member, active: !member.active } : member
    );
    setMembers(updatedMembers);
  };

  return (
    <div className="team-container">
      <h1>Team Management</h1>
      <div className="team-input">
        <input
          type="text"
          placeholder="Member Name"
          value={memberName}
          onChange={(e) => setMemberName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Member Role"
          value={memberRole}
          onChange={(e) => setMemberRole(e.target.value)}
        />
        <button onClick={addMember}>Add Member</button>
      </div>
      <div className="team-list">
        {members.map(member => (
          <div key={member.id} className={`team-item ${member.active ? 'active' : 'inactive'}`}>
            <div>
              <h2>{member.name}</h2>
              <p>{member.role}</p>
            </div>
            <button onClick={() => toggleMemberStatus(member.id)}>
              {member.active ? 'Deactivate' : 'Activate'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamManagement;