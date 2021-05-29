import React from 'react';
import PorpsTypes from 'prop-types';

const FriednsListItem = ({ avatar, name, isOnline }) => (
    <li className="item">
        <span className="status">{isOnline === true ? 'Онлайн' : 'Офлайн'} </span>
        <img className="avatar" src={avatar} alt={name} width="48" />
        <p className="name">{name}</p>
    </li>
);
FriednsListItem.porpsTypes = {
    avatar: PorpsTypes.string.isRequired,
    name: PorpsTypes.string.isRequired,
    isOnline: PorpsTypes.string.isRequired,
}
export default FriednsListItem;