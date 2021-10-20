
import React from 'react'; 
import Navigation from './Navigation'; 
import Home from './Home'; 
import ShapedPasta from './ShapedPasta'; 
import RibbonPasta from './RibbonPasta';
import SoupPasta from './SoupPasta';
import StrandPasta from './StrandPasta';
import StuffedPasta from './StuffedPasta';
import TubularPasta from './TubularPasta';
import {HashRouter, Route, Switch} from 'react-router-dom';

function App() {
  // Different types of Pasta data.
  
  return (
    <div className = "container">
        <Navigation  /> 
        <Switch>
        <Route path ='/' exact>
          <Home  /> 
        </Route>
        <Route path = '/shaped'>
          <ShapedPasta />
        </Route>
        <Route path = '/stuffed'>
          <StuffedPasta  />
        </Route>
        <Route path = '/tubular'>
          <TubularPasta />
        </Route>
        <Route path = '/ribbon'>
          <RibbonPasta />
        </Route>
        <Route path = '/soup'>
          <SoupPasta  />
        </Route>
        <Route path = '/strand'>
          <StrandPasta />
        </Route>
      </Switch> 
      

      
    
    </div>
  );
}
export default App;
