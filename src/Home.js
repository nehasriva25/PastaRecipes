import React from 'react'; 
import {shapedPasta, stuffedPasta, tubularPasta, ribbonPasta, soupPasta, strandPasta} from './PastaData'; 

function Home(){
    
    return(
        <div className = "home-body" style={{ 
            backgroundImage: `url(https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBhc3RhfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80)`,
            backgroundRepeat: 'no-repeat',
            height:'90vh',
            width:'100vw',
            backgroundSize: "cover"


            
            }}>
            <h1 className = "home-text">Discover the Pasta-bilities of Pasta</h1>
            </div>
    ); 


}
export default Home;

    
