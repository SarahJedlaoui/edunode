import React from 'react'
import DataTable from 'react-data-table-component';

const columns = [
    {
        name: 'ID',
        selector: row => row.id,
    },
    {
        name: 'Currency',
        selector: row => row.currency,
    },
    {
        name: 'Date',
        selector: row => row.date,
    },
    {
        name: 'Amount',
        selector: row => row.amount,
    },
];

const data = [
    {
        id: 1,
        currency: 'XLM',
        date: '12/02/2021',
        amount: "1000"
    },
    {
        id: 2,
        currency: 'USD',
        date: '12/05/2021',
        amount: "350"
    },
    {
        id: 3,
        currency: 'BTC',
        date: '4/07/2021',
        amount: "0.5"
    },
    {
        id: 4,
        currency: 'EUR',
        date: '01/02/2022',
        amount: "20"
    },
]

export default function MyData() {
    return (
        <DataTable
            columns={columns}
            data={data}
        />
    );
};
