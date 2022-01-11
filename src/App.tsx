import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import TakeEffect from './TakeEffect';
import store from './redux/store';

function App():React.ReactElement {
  return (
    <div className="App">
      <header className="App-header">
        <Provider store={store} >
          <TakeEffect/>
        </Provider>
      </header>
    </div>
  );
}

export default App;
