import React from 'react';

function Sidebar({ Icon, title, selected }) {
  return (
    <div className={`sidebarRow ${selected ? "selected" : ""}`}>
      <Icon className="sidebarRow_icon" />
      <h2 className="sidebarRow_title">{title}</h2>
    </div>
  );
}

export default Sidebar;

