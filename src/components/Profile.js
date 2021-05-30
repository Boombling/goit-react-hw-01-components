import React from 'react';
import PorpsTypes from 'prop-types';

const Profile = ({ user }) => (
    <div>
        {user.map(({ avatar, name, tag, location, stats }) => (
            <div className="profile" key={name}>
                <div className="description">
                    <img
                        src={avatar}
                        alt="Аватар пользователя"
                        className="avatar"
                        width="360"
                    />
                    <p className="name">{name}</p>
                    <p className="tag">@{tag}</p>
                    <p className="location">{location}</p>
                </div>

                <ul className="stats">
                    <li>
                        <span className="label">Followers</span>
                        <span className="quantity"> {stats.followers}</span>
                    </li>
                    <li>
                        <span className="label">Views</span>
                        <span className="quantity"> {stats.views}</span>
                    </li>
                    <li>
                        <span className="label">Likes</span>
                        <span className="quantity"> {stats.likes}</span>
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