import React, {useState} from 'react'; 
import {Link} from 'react-router-dom';
import Button from './Button'; 
import { VscChromeClose } from "react-icons/vsc";

function RecipeCard({recipeData, onExitClick}){
    const title =recipeData.label; 
    const image = recipeData.image; 
    const link = recipeData.url; 
    // const title ="recipeData.title"; 
    // const image = "recipeData.image";
    return(
        <div className = "recipe-card">
            <div className = 'recipe-img'>
                <img src ={image} alt={title} className= "pastaImg"/>
            </div>
            <div className = "card-title">
                <p>{title}</p>
            </div>
            <div>
            <a href={link}><Button className = "recipebtn" title= {"Get Recipe"}/></a>
            </div>
            <div className = 'exit'>
            <VscChromeClose onClick = {onExitClick}/>
            </div>
            
            </div>
    );  
}
export default RecipeCard;