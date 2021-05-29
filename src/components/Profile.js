import React from 'react';
import PorpsTypes from 'prop-types';

const Profile = ({avatar, name, tag, location, followers, views, likes}) => (
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
                <span className="quantity"> {followers}</span>
            </li>
            <li>
                <span className="label">Views</span>
                <span className="quantity"> {views}</span>
            </li>
            <li>
                <span className="label">Likes</span>
                <span className="quantity"> {likes}</span>
            </li>
        </ul>
    </div>
);
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