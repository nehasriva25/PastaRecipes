import React from 'react'; 
import {useState, useEffect} from 'react'; 
import {shapedPasta} from './PastaData'; 
import RecipeCard from './RecipeCard'; 
import Card from './Card';
function ShapedPasta(){

    const [recipeData, setRecipe] = useState(null);
    const [clickedPasta, setClickedPasta] = useState(null); 
    const [showRecipe, setShowRecipe] = useState(true); 

    //Adding id. 
    shapedPasta.map((data, i) => ({id:i, ...data}));

    
    useEffect(() => {
        
        console.log("using useState") 
        console.log({clickedPasta}); 
        
        
    }); 
    async function getRecipeData (name)
    {   
        const appID = "24334bda";
        const appKey = "169e84653549d1ec134f8146970e2437";  
        const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${name}&app_id=${appID}&app_key=${appKey}&imageSize=LARGE&random=false&field=label&field=image&field=url`;
        const response = await fetch(url); 
        const data = await response.json();
        console.log('getting meals for'); 
        console.log(name);    
        setShowRecipe(true);  
        setRecipe(data.hits[0].recipe);
        console.log(recipeData);  

    }




    return(
        <div>
            
            <div  className = "page-body">

                {showRecipe? (recipeData && <div className = "recipe-section"><RecipeCard recipeData = {recipeData} onExitClick = {() => {setRecipe(null); setShowRecipe(!showRecipe)}}/></div>) : ''}
                
            
            {shapedPasta.map((item) => <Card pastaName = {item.name} pastaIMG = {item.imageURL} onClick = {(e) => {setClickedPasta(item.name); getRecipeData(item.name); 
                }}/> )}
            </div>
        </div>
        
    );  
}
export default ShapedPasta;