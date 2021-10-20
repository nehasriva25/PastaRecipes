import React, {useState} from 'react'; 
import { Link } from 'react-router-dom';
import classes from './Navigation.module.css'; 
import {pastaTypes} from './PastaItems'; 

import Button from './Button';

function Dropdown({showMenu}){

    const [exitMenu, setExitMenu] = useState({showMenu}); 

    return(
       <div>
           <ul className = { classes.dropdownMenu}>
          
                {pastaTypes.map((item) => {
                    return (
                        
                        <li key = {item.id} className = {classes.dropdownLink}>
                            <Link to={item.path} > <Button className ={classes.dropdownbtn} title= {item.name} /></Link>
                        </li>
                        

                    );
                }

                )}

        </ul>

       </div>
        
        
    ); 
}
export default Dropdown;