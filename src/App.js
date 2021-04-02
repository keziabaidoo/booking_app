import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from "../src/components/HomePage"
import HomePage2 from "../src/components/HomePage2"


function App() {
  return (
   <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/HomePage2" component={HomePage2} exact />

      </Switch>
    </div>
   </BrowserRouter>
  );
}

export default App;
