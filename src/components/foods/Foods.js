import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';
import './Foods.css'

const Foods = () => {
    const [foods, setFoods]= useState([]);
    useEffect(()=>{
        fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
        .then(res => res.json())
        .then(data => setFoods(data.drinks))
    })
    return (
        <div>
            <h1> Cocktail</h1>
            <div className='foods-container'>
                
                {
                    foods.map(food=><Food food={food} key={food.idDrink} ></Food>)
                }
            </div>
        </div>
    );
};

export default Foods;