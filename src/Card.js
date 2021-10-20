import React, {useState} from 'react'; 
import {Link} from 'react-router-dom';
import Button from './Button'; 

function Card({pastaName, pastaIMG, onClick}){
    return(
        <div className = "card">
            <div className = 'card-img'>
                <img src ={pastaIMG} alt={pastaName} className= "pastaImg"/>
            </div>
            <div className = "card-title">
                <p>{pastaName}</p>
            </div>
            <div>
            <Button className = "pastabtn" title= {"Get Recipe"} onClick = {onClick}/>
            </div>
            
            </div>
    );  
}
export default Card;