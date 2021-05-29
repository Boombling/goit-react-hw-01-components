import React from 'react';
import user from './user.json';
import ProfileInfo from './components/ProfileInfo'

const App = () => {
  return (
    <div>
      <ProfileInfo user={user} />    
    </div>
  );
};
  

export default App;
