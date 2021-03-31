import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from "../src/components/HomePage"


function App() {
  return (
   <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={HomePage}/>
      </Switch>
    </div>
   </BrowserRouter>
  );
}

export default App;
