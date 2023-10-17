import React from 'react'
//import  { useState, useEffect } from 'react';

const Setdate = () => {

    //const[date, setDate] = useState(new Date());
    //const[daysRemaining, setDaysRemaining] = useState(null);

    // useEffect (() => {
    //     const ctdate = setInterval(() => {
    //         setDate(new Date());
    //     }, 1000);

        const etadate = new Date('2023/09/02'); // add backend date
        const ctdate = new Date();
        const timedifference = (ctdate - etadate);

        const daysRemaining = Math.floor(timedifference / (1000*60*60*24));

        //setDaysRemaining(daysRemaining);

    //     return () => {
    //         clearInterval(ctdate);
    //     };
    // }, []);


        let arrivestatus;

        if ( daysRemaining <= 7){
            arrivestatus = "arive soon";
        } else if(daysRemaining > 7 &&  daysRemaining <= 15){
            arrivestatus = "arive 15 days";
        } else if(daysRemaining > 15 && daysRemaining <= 30){
            arrivestatus = "arrive 30 days";
        }else {
            arrivestatus = "more than 30 days";
        }
  return (
    <div>

        {/* <h1>Current Date: {date.toDateString()}</h1> */}

        <br/>
        {/* {daysRemaining && <p>You have : {daysRemaining} </p>} */}

        <h2>{arrivestatus}</h2>
        <br/>
        <br/>
        <h2>{daysRemaining}</h2>
       
    </div>
  )
}

export default Setdate