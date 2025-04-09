import React from 'react';

export const PeriodButton = ({
  handlePeriodChange = () => { },
  period = 1,
  selectedPeriod = 1
}) => {
  const handleClick = () => {
    handlePeriodChange(period);
  };

  return (
    <button
      onClick={handleClick}
      className={`px-4 py-2 rounded ${selectedPeriod === period
        ? 'bg-blue-600 text-white'
        : 'bg-gray-200 hover:bg-gray-300'
        }`}
      data-testid={`period-${period}`}
    >
      {period} {period === 1 ? 'Day' : 'Days'}
    </button>
  );
};