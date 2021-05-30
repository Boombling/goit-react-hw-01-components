import React from 'react';
import PorpsTypes from 'prop-types';

const Statistics = ({ label, percentage }) => (
            <li className="item">
                <span className="label">{label}</span>
                <span className="percentage"> {percentage}%</span>
            </li>
);

Statistics.porpsTypes = {
    label: PorpsTypes.string.isRequired,
    percentage: PorpsTypes.number.percentage
}

export default Statistics;