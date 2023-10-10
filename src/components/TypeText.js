import React from 'react'
import { useState } from 'react';

const TypeText = () => {

    const [inputValue, setInputValue] = useState("");

    const handleInput = (event) => {

        setInputValue(event.target.value);
    }

  return (
    <div>

        <input type="text" onChange={handleInput}/>

        <h3>Text Area</h3>
        <p>{inputValue}</p>

    </div>
  )
}

export default TypeText