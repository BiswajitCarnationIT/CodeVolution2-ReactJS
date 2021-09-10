/*   -----Lec 20 --- Style and CSS Basics ----- 
---------- Conditional apply & Pssing prop-----
-----------Inline css--------------
*/

import React,{Component} from 'react';
import './App.css';
import StyleSheet from './Components/StyleSheet'; 
import Inline from './Components/Inline'
import './Tutorial20AppStyle.css'
import styles from  './Tut20AppStyles.module.css' /*Reference the class name 
                         using styles variable , it can not be used in child component (in inline.css)*/



function App() {
    return (
      <div className="App">

          <StyleSheet primary_Props = {true}/>  {/*primary_Props by desault is a props ?*/}

          <Inline/>

          <h1 className = 'error'>Error</h1>  {/*from Tutorial20AppStyle.css */}
          <h1 className = {styles.success} >Success</h1>  {/*from Tut20AppStyles.module.css */}
     
      </div>
    );
  }

export default App;