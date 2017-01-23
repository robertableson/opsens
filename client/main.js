import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return(
    <div>
      test
    </div>
  );
};

Meteor.startup(() =>{
  ReactDOM.render(<App/>, document.querySelector('.render-target'));
});
