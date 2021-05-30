import React from 'react';
import TransactionHistory from './TransactionHistory';

const TransactionList = ({ items }) => (
    <table className="transaction-history">
        <thead>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>
        <tbody>
            {items.map((items) => (
            
                <TransactionHistory
                    key={items.id}
                    type={items.type}
                    amount={items.amount}
                    currency={items.currency}
                />          
            ))}
        </tbody>
    </table>
);

export default TransactionList;