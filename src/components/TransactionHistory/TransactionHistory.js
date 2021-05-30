import React from 'react';
import PorpsTypes from 'prop-types';

const TransactionHistory = ({ type, amount, currency }) => (
    <tr>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
    </tr>
);
TransactionHistory.prototype = {
    type: PorpsTypes.string.isRequired,
    amount: PorpsTypes.number.isRequired,
    currency: PorpsTypes.string.isRequired,
};

export default TransactionHistory;