
import React from 'react'; 
import Navigation from './Navigation'; 
import Home from './Home'; 
import ShapedPasta from './ShapedPasta'; 
import RibbonPasta from './RibbonPasta';
import SoupPasta from './SoupPasta';
import StrandPasta from './StrandPasta';
import StuffedPasta from './StuffedPasta';
import TubularPasta from './TubularPasta';
import {Route, Switch} from 'react-router-dom';

function App() {
  // Different types of Pasta data.
  
  return (
    <div className = "container">
        <Navigation  /> 

      
      

       <Switch>
        <Route path ='/PastaRecipes' exact>
          <Home  /> 
        </Route>
        <Route path = '/PastaRecipes/shaped'>
          <ShapedPasta />
        </Route>
        <Route path = '/PastaRecipes/stuffed'>
          <StuffedPasta  />
        </Route>
        <Route path = '/PastaRecipes/tubular'>
          <TubularPasta />
        </Route>
        <Route path = '/PastaRecipes/ribbon'>
          <RibbonPasta />
        </Route>
        <Route path = '/PastaRecipes/soup'>
          <SoupPasta  />
        </Route>
        <Route path = '/PastaRecipes/strand'>
          <StrandPasta />
        </Route>
      </Switch>  
    
    </div>
  );
}
export default App;
