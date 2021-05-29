import React from 'react';
import user from './user.json';
import ProfileInfo from './components/ProfileInfo';
import statisticalData from './statistical-data.json';
import StatisticData from './components/StatisticData';
import friends from './friend-list.json'
import FriendsList from './components/FriendList'
import transactions from './transactions.json';
import TransactionList from './components/TransactionList'

const App = () => {
  return (
    <div>
      {/* <ProfileInfo user={user} />     */}
      {/* <StatisticData  title="Upload stats" stats={statisticalData} /> */}
      {/* <StatisticData stats={statisticalData} /> */}
      {/* <FriendsList friends={friends}/> */}
      <TransactionList items={transactions} />
    </div>
  );
};
  

export default App;
