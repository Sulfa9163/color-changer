import React, { useState } from 'react'

const MyButton = () => {
  const[inputValue,setInputValue] = useState("");
  const handleChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    document.body.style.backgroundColor = value.toLowerCase() === 'grey' ? 'grey' : '';
  };

  
  return (
    <div>
        <h1>Welcome to my page</h1>
      
        <input 
        type="text" 
        value={inputValue}
        placeholder='Enter the color' 
        onChange={handleChange}/>
        
    </div>
  )
}

export default MyButton;
