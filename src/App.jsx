import "./Styles/styles.css"
import  {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Home from "./Pages/Home";
import Farmers from "./Pages/Farmers";
import Coffees from "./Pages/Coffees";
import About from "./Pages/About";
import Index from "./Pages/Index";
import PublicLayout from "./Layouts/PublicLayout";

function App() {
  return(
    <Router>
      <Switch>
        <Route path='/about'>
          <About/>
        </Route>
        <Route path='/coffees'>
          <Coffees/>
        </Route>
        <Route path='/farmers'>
          <Farmers/>
        </Route>
        <Route path='/home'>
          <Home/>
        </Route>
        <Route path='/'>
          <PublicLayout> 
          <Index/>
          </PublicLayout>
        </Route>
      </Switch>
    </Router>

  );

};
export default App;


