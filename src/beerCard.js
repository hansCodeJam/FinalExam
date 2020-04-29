import React from 'react';

export default function BeerCard(props) {
    return (
       <div>
          <div>
             <img src={props.image_url} alt={props.name}/>
          </div>
          <div>
             <h1>{props.name}</h1>
             <p>Description:{props.description}</p>
             <p>Tips:{props.brewers_tips}</p>
             <p>Pair With: {props.food_pairing}</p>
          </div>
       </div>
    )
 }