import React from 'react';
import PorpsTypes from 'prop-types';

const StatisicTest = ({ stats }) => (
    <div>
        {stats.map(({ label, percentage }) =>
            <section className="statistics">
                <h2 className="title">Upload stats</h2>

                <ul className="stat-list">
                    <li className="item">
                        <span className="label">{label}</span>
                        <span className="percentage"> {percentage}%</span>
                    </li>
                </ul>
            </section>
    
        )};
    </div>
);

export default StatisicTest;