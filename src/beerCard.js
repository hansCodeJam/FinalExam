import React from 'react';

export default function BeerCard(props) {
    return (
       <div style={{display:'flex'}}>
          <div>
             <img src={props.image_url} alt={props.name}/>
          </div>
          <div>
             <h1>{props.name}</h1>
             <p>Description:{props.description}</p>
             <p>Tips:{props.brewers_tips}</p>
             <p>Pair With:</p>
             <ul>
                {props.food_pairing.map((entry,i)=>{
                   return <li key={entry+i}>{entry}</li>
                })}
             </ul>
          </div>
       </div>
    )
 }