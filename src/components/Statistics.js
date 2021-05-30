import React from 'react';

const Statistics = ({ label, percentage }) => (
        // <ul className="stat-list">
            <li className="item">
                <span className="label">{label}</span>
                <span className="percentage"> {percentage}%</span>
            </li>
        // </ul>
);

export default Statistics;