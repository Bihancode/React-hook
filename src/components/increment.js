import React, { useState } from 'react'


const increment = () => {

    const [age, setAge] = useState;

    const increaseAge = () =>{

        setAge(age + 1);
    }
  return (
    <div>

        {age}
        <button onClick={increaseAge}>Increase</button>
        

    </div>
  )
}

export default increment