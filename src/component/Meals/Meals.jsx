import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Meal from '../Meal/Meal';
import './Meals.css'

const Meals = () => {
    const meals = useLoaderData();
    // console.log(meals.meals);
    return (
        <div>
            <h2>Meals are here: {meals.meals.length}</h2>
            <div className='meals'>
                {
                    meals.meals.map(meal => <Meal
                    key={meal.idMeal}
                    meal={meal}
                    ></Meal>)
                }
            </div>
        </div>
    );
};

export default Meals;