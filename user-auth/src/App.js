
import './App.css';

import Login from './pages/login';
import Navbar from './components/navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home';
import Register from './pages/register';
import { useState , useEffect} from 'react';


function App() {
  const [name,setname]= useState('')
  // const [count,setCount]=useState(1)

  //  const setName=(e)=>{
  // setName(e)
  // }
  useEffect(() => {
    (
       async()=>{
             const response = await fetch("http://localhost:8000/api/user",{
                 headers:{'Content-Type':'application/json'},
                 credentials:"include"
                 
             });
            
             const content = await response.json();
             setname(content.name)
         }
     )();
     
 })
  return (
    <div className="App">
      <BrowserRouter>
           
              <Navbar name={name} setName={setname}/>
              {/* <Count count={count}  /> */}
              <main className="form-signin">
              <Route path="/" exact component={()=><Home name={name} />}></Route>
              <Route path="/login" component={()=><Login setName={setname}/>}></Route>
              <Route path="/register" component={Register}></Route>
              </main>
           
            </BrowserRouter>
     
    </div>
  );
}

export default App;
