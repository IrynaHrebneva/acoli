import React from 'react';
import '../App.css';
import './Table.css';
import { useTable } from "react-table";

function SearchTable({ columns, data }) {
    const {
            getTableProps, // Sends the needed props to your table.
            getTableBodyProps, // Sends needed props to your table body
            headerGroups, // Returns normalized header groups
            rows, // rows for the table based on the data passed
            prepareRow, // Prepare the row in order to be displayed.
        } = useTable({
        columns,
        data,
    });
    
      return (
            <div className='table-container'>
                <div className='table-container-header'>
                    <span>Short info about city after search.</span>
                </div>
                <table {...getTableProps()}>
                {/* <thead>
                    {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                        <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                        ))}
                    </tr>
                    ))}
                </thead> */}
                <tbody {...getTableBodyProps()}>
                    {rows.map((row, i) => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()}>
                        {row.cells.map((cell) => {
                            return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                        })}
                        </tr>
                    );
                    })}
                </tbody>
                </table>
            </div>
        );
}
export default SearchTable;