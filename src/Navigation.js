import React from 'react'; 
import classes from './Navigation.module.css'; 
import Button from './Button'; 
import {Link} from 'react-router-dom'; 
import {useState} from 'react'; 
import Dropdown from './Dropdown';

function Navigation(){

    const [showMenu, setShowMenu] = useState(false); 
    return(
        <div className = {classes.main}>
             <nav className = {classes.navBar}>
               <div className = {classes.home}>
               <Link to= '/PastaRecipes'><Button className ={classes.btn} title= {"Home"}/></Link>
               </div>
               <ul className = {classes.bigBoy}>
                   
                    <li className = {classes.menuItem} onMouseEnter= {() => setShowMenu(true)}
                        onMouseLeave= {() => setShowMenu(false)}>
                    <Button className = {showMenu?classes.subMenuBtnWMenu:classes.subMenuBtn} title={"Explore the Types of Pasta"} />
                    {showMenu? <Dropdown showMenu= {showMenu}/> : '' }    
                    </li>
                    
                    {/*can later add recipies?*/ }
                    
                </ul>
                
                
    
            </nav>
            
           
            </div>
           
            
            
        
       
        
        
    ); 
}
export default Navigation;

    
