import React, { useState } from 'react';

const events = {
  '2025-07-06': 'GDG Info Session',
  '2023-09-11': 'Hackathon Begins',
  '2023-09-14': 'Tech Talk',
  '2023-09-25': 'Project Demo',
  '2023-09-29': 'Closing Ceremony',
};

const monthNames = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

function CalenderComp() {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [hoveredDate, setHoveredDate] = useState(null);

  const getDaysInMonth = (month, year) =>
    new Date(year, month + 1, 0).getDate();

  const getFirstDayOfMonth = (month, year) =>
    new Date(year, month, 1).getDay(); // 0 = Sunday

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(y => y - 1);
    } else {
      setCurrentMonth(m => m - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(y => y + 1);
    } else {
      setCurrentMonth(m => m + 1);
    }
  };

  const renderCalendarDays = () => {
    const days = [];
    const firstDay = getFirstDayOfMonth(currentMonth, currentYear);
    const totalDays = getDaysInMonth(currentMonth, currentYear);

    const emptyCells = (firstDay === 0 ? 6 : firstDay - 1);
    for (let i = 0; i < emptyCells; i++) {
      days.push(<div key={`empty-${i}`} className="w-9 h-9 sm:w-12 sm:h-12" />);
    }

    for (let day = 1; day <= totalDays; day++) {
      const dateStr = `${currentYear}-${(currentMonth + 1)
        .toString()
        .padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
      const hasEvent = events[dateStr];
      const isToday =
        day === today.getDate() &&
        currentMonth === today.getMonth() &&
        currentYear === today.getFullYear();

      days.push(
        <div
          key={dateStr}
          className={`w-9 h-9 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-[10px] sm:text-sm cursor-pointer 
            ${isToday ? 'bg-[#FBFF5A] text-black font-semibold' : ''} 
            ${hasEvent ? 'bg-blue-300 hover:bg-blue-400' : ''}
          `}
          onMouseEnter={() => setHoveredDate(dateStr)}
          onMouseLeave={() => setHoveredDate(null)}
        >
          {day}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="p-2.5 sm:p-5 bg-white rounded-3xl border-2 border-black w-64 sm:w-80 font-sans relative">
      {/* Header */}
      <div className="flex justify-between items-center mb-3 sm:mb-5 px-2 text-sm sm:text-base font-medium">
        <span>
          {monthNames[currentMonth]} {currentYear}
        </span>
        <div className="space-x-2 sm:space-x-3 text-sm sm:text-lg">
          <button onClick={prevMonth}>&lt;</button>
          <button onClick={nextMonth}>&gt;</button>
        </div>
      </div>

      {/* Days of Week */}
      <div className="grid grid-cols-7 text-center text-[10px] sm:text-sm text-gray-700 mb-2 px-1 font-medium">
        <div>Mon</div><div>Tue</div><div>Wed</div>
        <div>Thu</div><div>Fri</div><div>Sat</div><div>Sun</div>
      </div>

      {/* Dates */}
      <div className="grid grid-cols-7 gap-y-2 px-1">
        {renderCalendarDays()}
      </div>

      {/* Tooltip */}
      {hoveredDate && events[hoveredDate] && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="bg-blue-500 text-white text-[10px] sm:text-sm px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-lg shadow-lg animate-fade-in">
            {events[hoveredDate]}
          </div>
        </div>
      )}
    </div>
  );
}

export default CalenderComp;
