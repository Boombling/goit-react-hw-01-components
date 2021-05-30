import React from "react";
import Statistics from "./Statistics";

const StatisticData = ({stats}) => (
    <section className="statistics">
        <h2 className="title">Upload stats</h2>
        <ul className="stat-list">
            {stats.map(({ label, percentage, id }) => (
                <Statistics
                    key={id}
                    label={label}
                    percentage={percentage}
                />
            ))}
        </ul>
    </section>
);

export default StatisticData;