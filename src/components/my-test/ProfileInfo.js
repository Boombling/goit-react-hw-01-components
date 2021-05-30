import React from "react";
import Profile from "./ProfileTest";

const ProfileInfo = ({ user }) => (
    <div >
        {user.map(({ name, tag, location, avatar, stats }) => (
            <div key={name}>
            <Profile
                name={name}
                tag={tag}
                location={location}
                avatar={avatar}
                followers={stats.followers}
                views={stats.views}
                likes={stats.likes}
                />
            </div>
        ))}
    </div>
);

export default ProfileInfo;