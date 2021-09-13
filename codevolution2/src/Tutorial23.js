/*    -----Lec 22  ----- 
---------- Component mounting lifecycle-----

*/

import React,{Component} from 'react';
import './App.css';
import LifecycleB from './Components/LifecycleA'; 





function App() {
    return (
      <div className="App">
        <LifecycleB/>
      </div>
    );
  }

export default App;