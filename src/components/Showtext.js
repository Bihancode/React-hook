import React from 'react'
import { useState } from 'react';

const Showtext = () => {

    const[showText, setShowText] = useState(true);
  return (
    <div>

        <button onClick={() => {setShowText(!showText)}}>Show / Hide</button>

        {showText && <h2>Show & Hide Text Sample</h2>}

    </div>
  )
}

export default Showtext