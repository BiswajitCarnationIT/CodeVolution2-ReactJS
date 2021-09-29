/*    -----Lec 36  ----- 
---------- Render Props-----

*/

import React,{Component} from 'react';
import './App.css';
import ClickCounter2 from './Components/ClickCounter2';
import Counter from './Components/Counter';
import HoverCounter2 from './Components/HoverCounter2';
import User from './Components/User';


// use a prop whoes value is a function
// how we can share functionality
//not necesaary to name it as render

function App() {
    return (
      <div className="App">
        
        {/* <ClickCounter/>
        <HoverCounter2/>
        <User render = {(isLoggedIn) => isLoggedIn ? 'Biswajit' : 'Guest'}/> */}

        <Counter render = {(count,incrementCount) =>(<ClickCounter2 count = {count} incrementCount = {incrementCount}/>
        ) }/>

        <Counter render = {(count,incrementCount) =>(<HoverCounter2 count = {count} incrementCount = {incrementCount}/>
        ) }/>   
        
      </div>
    );
  }

export default App;