import { Route, Switch } from 'react-router-dom';
import Header from './components/header';
import Main from './components/main';
import Profile from "./components/profile";

function App() {
  return (
    <div className="App">
     <Header />
     <Switch>
       <Route exact path='/' component={Main}/>
       <Route exact path='/profile' component={Profile}/>
     </Switch>
    </div>
  );
}

export default App;
