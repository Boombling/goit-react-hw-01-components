import React from "react";
import Statistics from "../Statistic/Statistics";
import styles from './StatisticData.module.css'

const StatisticData = ({stats}) => (
    <section className={styles.statistics}>
        <h2 className={styles.title}>Upload stats</h2>
        <ul className={styles.statList}>
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