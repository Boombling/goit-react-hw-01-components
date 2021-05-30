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
      <Profile user={user}/>
      
      <StatisticData stats={statisticalData} />

      <FriendsList friends={friends}/>
      <TransactionList items={transactions} />
    </div>
  );
};
  

export default App;
