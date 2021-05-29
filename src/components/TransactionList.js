import React from 'react';
import TransactionHistory from './TransactionHistory';

const TransactionList = ({ items }) => (
    <div>
        {items.map((items) => (
            <div key={items.id}>
            <TransactionHistory
                type={items.type}
                amount={items.amount}
                currency={items.currency}
                />
            </div>
        ))}
    </div>
);

export default TransactionList;