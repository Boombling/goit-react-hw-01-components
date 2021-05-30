import React from 'react';
import styles from './Profile.module.css'
import PorpsTypes from 'prop-types';

const Profile = ({ user }) => (
    <div>
        {user.map(({ avatar, name, tag, location, stats }) => (
            <div className={styles.profile} key={name}>
                <div className={styles.description}>
                    <img
                        src={avatar}
                        alt="Аватар пользователя"
                        className={styles.avatar}
                        width="180"
                    />
                    <p className={styles.name}>{name}</p>
                    <p className={styles.tag}>@{tag}</p>
                    <p className={styles.location}>{location}</p>
                </div>

                <ul className={styles.stats}>
                    <li className={styles.list}>
                        <span className={styles.label}>Followers</span>
                        <span className={styles.quantity}> {stats.followers}</span>
                    </li>
                    <li className={styles.list}>
                        <span className={styles.label}>Views</span>
                        <span className={styles.quantity}> {stats.views}</span>
                    </li>
                    <li className={styles.list}>
                        <span className={styles.label}>Likes</span>
                        <span className={styles.quantity}> {stats.likes}</span>
                    </li>
                </ul>
            </div>
        ))}
    </div>
)
Profile.defaultProps = {
    followers: 0,
    views: 0,
    likes: 0,
};

Profile.prototype = {
    avatar: PorpsTypes.string.isRequired,
    name: PorpsTypes.string.isRequired,
    tag: PorpsTypes.string.isRequired,
    location: PorpsTypes.string.isRequired,
    followers: PorpsTypes.number,
    views: PorpsTypes.number,
    likes: PorpsTypes.number,
};
export default Profile;