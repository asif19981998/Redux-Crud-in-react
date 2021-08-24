import logo from './logo.svg';
import './App.css';
import Student from './app/student/student';
import {Provider} from "react-redux";
import store from "./app/redux/store"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UpdateStudent from './app/student/update';


function App() {
  return (
    <Provider store={store}>

      <Router>
         <Switch>
           <Route path="/" exact component={Student}/>
           <Route path="/update" component={UpdateStudent}/>
         </Switch>
      </Router>
     

    </Provider>
 );
}

export default App;
