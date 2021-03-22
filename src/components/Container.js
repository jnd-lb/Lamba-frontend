
import Home from "./HomeComponent/Home";
import NavBar from "./SharedComponents/NavBarComponent/NavBar";
import React, {useState} from "react";
import { Route, Switch, BrowserRouter as Router} from "react-router-dom";
import Footer from "./SharedComponents/FooterComponent/Footer";
import Cases from "./CasesComponent/Cases";

      
function Container() {
    const [dir,setDirection] = useState({dir:"ltr"});

    const changeDirection = (direction) =>{
      setDirection({dir:direction});
      console.log(dir);
  }

return (
    <div  {...dir} >
      <Router>
      <NavBar changeDirection={changeDirection}/>
    <Switch>
      <Route  path="/" exact>
      <Home />
      </Route>
      <Route path="/cases">
        <Cases/>
      </Route>

      
    </Switch>
    <Footer/>
    </Router>
    </div>
  )
}

export default Container;
