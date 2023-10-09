
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './page1/Home';
import Login from './page2/Login';
import Links from './Links';

function App() {

  return(

<Router> 

<Links/>
<Routes> 

 <Route path="/" element={ <Home/>}/>
 <Route path="/Login" element={ <Login/> }/>

 
 </Routes> 
 </Router>

  )





}



export default App;

