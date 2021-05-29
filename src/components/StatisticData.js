import React from "react";
import Statistics from "./Statistics";

const StatisticData = ({ stats }) => (
        stats.map(({ label, percentage, id }) => (
            <div key={id}>
                <Statistics
                    label={label}
                    percentage={percentage}
                />
            </div>
        ))
);

export default StatisticData;