import React from 'react';
import user from './user.json';
import statisticalData from './statistical-data.json';
import StatisticData from './components/StatisticData';
import friends from './friend-list.json'
import FriendsList from './components/FriendList'
import transactions from './transactions.json';
import TransactionList from './components/TransactionList';
import Profile from './components/Profile'; 

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
