import React from 'react'
import { useState } from 'react';

const IncreaseAge = () => {

    const [age, setAge] = useState(0);

    const increaseAge = () =>{

        setAge(age + 1);
    }
  return (
    <div>
        <h1>{age}</h1>
        <button onClick={increaseAge}>Increase</button>
    </div>
  )
}

export default IncreaseAge