// imports first
import userEvent from '@testing-library/user-event';
import React, { useState } from 'react';


export const Home = (props) => {

    const [num, setNum] = useState(1)
    const bakers = ["Anita", "Ginger", "Dusty", "Jose"]

    const takeNumber = () => {
        setNum(num + 1)
        console.log(num)
        // return num
    }
    
    return (
     <>
    <h1>Welcome to Bay and Marble Doughnut Shoppe, {props.user.name}</h1>
    <p> We have the best bakers! </p>
        <ul>
            {/* map returns element and index, we use index for unique key */}
    {bakers.map((baker, i) => <li key={i}>{baker}</li>)}
        </ul>

        <h2>  Take a ticket  </h2>
        <button onClick={takeNumber}>  get number  </button>
    <h2>Current Ticket: {num}</h2>


    </>
    )
}