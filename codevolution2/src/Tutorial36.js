/*    -----Lec 36  ----- 
---------- Render Props-----

*/

import React,{Component} from 'react';
import './App.css';
import ClickCounter from './Components/ClickCounter2';
import HoverCounter2 from './Components/HoverCounter2';
import User from './Components/User';





function App() {
    return (
      <div className="App">
        
        <ClickCounter/>
        <HoverCounter2/>
        <User name = {(isLoggedIn) => isLoggedIn ? 'Biswajit' : 'Guest'}/>
        
      </div>
    );
  }

export default App;