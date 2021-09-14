/*    -----Lec 33  ----- 
---------- Higher order components-----

*/

import React,{Component} from 'react';
import './App.css';
import ClickCounter from './Components/ClickCounter';
import HoverCounter from './Components/HoverCounter';





function App() {
    return (
      <div className="App">
        
        <ClickCounter/>
        <HoverCounter/>
      </div>
    );
  }

export default App;