import React from 'react'; 
function Button({className, title, onClick, onMouseEnter, onMouseLeave}) {
    
    return (
      <div>
       <button 
        onClick = {onClick}
        onMouseEnter = {onMouseEnter}
        onMouseLeave = {onMouseLeave}
        className = {className} >
            {title}
            </button>
      </div>
    );
  }
  
  export default Button;