import React, { useState } from 'react';

export default function DayNavigation() {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  const day2Options = [
    "Array",
    "SimpleCalculator",
    "condition",
  ];

  return (
    <nav className='navbar'>
      <ul className='nav-list'>
        <li className='nav-item' onClick={handleToggle}>
          Day2
          <ul className={`submenu ${open ? "open" : ""}`}>
            {day2Options.map((option, index) => (
              <li key={index} className='submenu-item'>
                {option}
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </nav>
  );
}
