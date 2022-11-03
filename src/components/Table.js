import React, { useMemo, useState } from "react";

import { useFilters, useSortBy, useTable } from 'react-table'
import 'bootstrap/dist/css/bootstrap.min.css';

function Table({ data }) {
    const columns = useMemo(() => [
        {
            Header: ' ',
            columns: [
                {
                    Header: 'Created At',
                    accessor: 'createdAt',
                },
            ],
        },
        {
            Header: ' ',
            columns: [
                {
                    Header: 'Title',
                    accessor: 'title',
                },
                {
                    Header: 'Description',
                    accessor: 'description',
                },
                {
                    Header: 'Link',
                    accessor: 'link',
                },
            ],
        },
    ], []);

    const [filterInput, setFilterInput] = useState("");

    // Update the state when input changes
    const handleFilterChange = e => {
        const value = e.target.value || undefined;
        setFilter("title", value);
        setFilterInput(value);
    };

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        setFilter
    } = useTable(
        {
            columns,
            data,
        },
        useFilters,
        useSortBy
    )

    return (<>
        <input
            value={filterInput}
            onChange={handleFilterChange}
            placeholder={"Search by title......"}
            className='m-5 rounded'
        />
        <div className="container mt-5">
            <table className="table" {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th
                                    {...column.getHeaderProps(column.getSortByToggleProps())}
                                    className={
                                        column.isSorted
                                            ? column.isSortedDesc
                                                ? "sort-desc"
                                                : "sort-asc"
                                            : ""
                                    }
                                >
                                    {column.render("Header")}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>

                <tbody {...getTableBodyProps()}>
                    {rows.map((row, i) => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    </>)
}

export default Table;