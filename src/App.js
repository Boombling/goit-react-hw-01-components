import React from 'react';
import 'modern-normalize/modern-normalize.css';
import './styles.css';
import user from './user.json';
import statisticalData from './statistical-data.json';
import StatisticData from './components/StatisticData/StatisticData';
import friends from './friend-list.json'
import FriendsList from './components/FriendList/FriendList'
import transactions from './transactions.json';
import TransactionList from './components/TransactionList/TransactionList';
import Profile from './components/Profile/Profile'; 

const App = () => {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={ user.stats.followers}
        views={ user.stats.views}
        likes={ user.stats.likes}
      />
      
      <StatisticData  title="Upload stats" stats={statisticalData} />
      <StatisticData  stats={statisticalData} />

      <FriendsList friends={friends} />
      
      <TransactionList items={transactions} />
    </div>
  );
};
  

export default App;
