import React, { useState } from "react";

export default function DayNavigation() {
  // Only one day open at a time, store the open day string or null
  const [openDay, setOpenDay] = useState(null);

  // Toggle submenu for a specific day; close others
  const handleToggle = (day) => {
    setOpenDay((prev) => (prev === day ? null : day));
  };

  const days = {
  
    Day2: ["Array", "SimpleCalculator", "Condition","Array","MultiplicationTable","Variable"],
    Day3: ["Merge", "Object", "Result","UserList"],
    Day4: ["emoji", "User"],
    Day5: ["Focusinput", "LoginForm"],
    Day6: ["Home", "Userdetail","Viewuser"],
    Day7: ["DayNavigator"],
    Day8: ["Todo"],
    Day9:["Complete_form"],
  };

  return (
    <nav
      style={{
        width: "220px",
        borderRight: "1px solid #ccc",
        fontFamily: "Arial, sans-serif",
        height: "100vh",
        overflowY: "auto",
        padding: "10px",
      }}
    >
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {Object.entries(days).map(([day, options]) => (
          <li
            key={day}
            style={{
              cursor: "pointer",
              padding: "10px 15px",
              borderBottom: "1px solid #eee",
              backgroundColor: openDay === day ? "#f0f0f0" : "transparent",
            }}
            onClick={() => handleToggle(day)}
          >
            <div
              style={{
                fontWeight: "bold",
                userSelect: "none",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span>{day}</span>
              <span style={{ fontSize: "12px" }}>
                {openDay === day ? "▲" : "▼"}
              </span>
            </div>

            {/* Submenu */}
            {openDay === day && (
              <ul
                style={{
                  listStyle: "none",
                  paddingLeft: "15px",
                  marginTop: "8px",
                }}
              >
                {options.map((option, idx) => (
                  <li
                    key={idx}
                    style={{
                      padding: "6px 0",
                      borderBottom:
                        idx !== options.length - 1 ? "1px solid #ddd" : "none",
                    }}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
