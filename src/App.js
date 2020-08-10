import React from 'react';
import router from './router';
import Header from './components/Header/Header';

function App(){
  return (<div className="App">
      <Header/>
      {router}

  </div>
  )};

  export default App;