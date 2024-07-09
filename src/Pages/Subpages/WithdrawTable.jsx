import React from 'react';
import DataTable from 'react-data-table-component';

const WithdrawTable = () => {
    const columns = [
        { name: 'Name', selector: row => row.name, sortable: true },
        { name: 'Position', selector: row => row.position, sortable: true },
        { name: 'Office', selector: row => row.office, sortable: true },
        { name: 'Age', selector: row => row.age, sortable: true },
        { name: 'Start Date', selector: row => row.startDate, sortable: true },
        { name: 'Salary', selector: row => row.salary, sortable: true },
      ];

  const data = [
    {
      id: 1,
      name: 'Tiger Nixon',
      position: 'System Architect',
      office: 'Edinburgh',
      age: 61,
      startDate: '2011-04-25',
      salary: '$320,800',
    },
    {
      id: 1,
      name: 'Tiger Nixon',
      position: 'System Architect',
      office: 'Edinburgh',
      age: 61,
      startDate: '2011-04-25',
      salary: '$320,800',
    },
    {
      id: 1,
      name: 'Tiger Nixon',
      position: 'System Architect',
      office: 'Edinburgh',
      age: 61,
      startDate: '2011-04-25',
      salary: '$320,800',
    },

  ];

  return (
    <DataTable
      columns={columns}
      data={data}
      pagination
      highlightOnHover
      pointerOnHover
    />
  );
};

export default WithdrawTable;
