import './App.css';
import DataTable from "react-data-table-component";
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  const columns = [
    {
      name: 'ID',
      selector: row => row.id,
      sortable: true,
    },
    {
      name: 'Name',
      selector: row => row.name,
      sortable: true,
    },
    {
      name: 'Email',
      selector: row => row.email
    },
    {
      name: 'Age',
      selector: row => row.age,
      sortable: true,
    },
    {
      name: 'Status',
      selector: row => row.status,
      sortable: true,
      cell: (row) => {
        <button
          className={`btn ${row.status === 'Active' ? 'btn-success' : 'btn-danger'}`}
        >
          {row.status}
        </button>
        
      }
    },
  ];

  const data = [
    {
      id: 1,
      name: 'Aldo',
      email: 'aldobesma@gmail.com',
      age: '20',
      status: 'Active'
    },
    {
      id: 2,
      name: 'Wahyu',
      email: 'wahyus@gmail.com',
      age: '17',
      status: 'Active'
    },
    {
      id: 3,
      name: 'Shela',
      email: 'shelaa@gmail.com',
      age: '30',
      status: 'InActive'
    },
    {
      id: 4,
      name: 'Randi',
      email: 'randi@gmail.com',
      age: '24',
      status: 'InActive'
    },
    {
      id: 5,
      name: 'Shindi',
      email: 'shindia@gmail.com',
      age: '13',
      status: 'Active'
    },
  ]
  

  const [records, setRecords] = useState(data);
  function handleFilter(event) {
    const newData = data.filter(row => {
      return row.name.toLowerCase().includes(event.target.value.toLowerCase())
    })
    setRecords(newData);
  }

  return (
    <div className='container mt-5'>
    <div className='text-end'><input type="text" onChange={handleFilter}/></div>
        <DataTable
          columns={columns}
          data={records}
          selectableRows
          fixedHeader
          pagination
          ></DataTable>
    </div>
  );
}

export default App;
