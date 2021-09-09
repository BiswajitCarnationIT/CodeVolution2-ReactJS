/*   -----Lec 20 --- Style and CSS Basics ----- 
---------- Conditional apply & Pssing prop-----
*/

import React,{Component} from 'react';
import './App.css';
import StyleSheet from './Components/StyleSheet'; 



function App() {
    return (
      <div className="App">
          <StyleSheet primary_Props = {true}/>  {/*primary_Props by desault is a props ?*/}
     
      </div>
    );
  }

export default App;