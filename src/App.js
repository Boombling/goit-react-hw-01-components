import React from 'react';
import user from './user.json';
import statisticalData from './statistical-data.json';
import StatisticData from './components/StatisticData';
import friends from './friend-list.json'
import FriendsList from './components/FriendList'
import transactions from './transactions.json';
import TransactionList from './components/TransactionList';
import Profile from './components/Profile'; 
import StatisticTest from './components/StatisticTest';

const App = () => {
  return (
    <div>
      {/* <Profile user={user}/> */}
      
      {/* <StatisticTest stats={statisticalData} /> */}
      <StatisticData  title="Upload stats" stats={statisticalData} />
      {/* <StatisticData stats={statisticalData} /> */}
      {/* <FriendsList friends={friends}/> */}
      {/* <TransactionList items={transactions} /> */}
    </div>
  );
};
  

export default App;
