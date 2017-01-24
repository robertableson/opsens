import React from 'react';
import ReactDOM from 'react-dom';

import LoginPage from './components/loginPage';
import HomeActionsPage from './components/homeActionsPage';

const App = () => {
  return(
    <div className="container">
      <LoginPage/>
    </div>
  );
};

Meteor.startup(() =>{
  ReactDOM.render(<App/>, document.querySelector('.render-target'));
});
