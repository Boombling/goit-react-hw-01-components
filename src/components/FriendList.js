import React from 'react';
import PorpsTypes from 'prop-types';
import FriendListItem from './FriendListItem';

const FriendsList = ({ friends }) => (
    <ul className="friend-list">
        {friends.map((friends) => (
        
            <FriendListItem
            key={friends.id}
            avatar={friends.avatar}
            name={friends.name}
            isOnline={friends.isOnline}
            />
      
       ))}
    </ul>
);
FriendsList.porpsTypes = {
    friends: PorpsTypes.arrayOf(PorpsTypes.shape({
        id: PorpsTypes.string.isRequired,
    })).isRequired,
};
export default FriendsList;