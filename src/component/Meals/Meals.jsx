import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Meal from '../Meal/Meal';

const Meals = () => {
    const meals = useLoaderData();
    console.log(meals.length);
    return (
        <div>
            <h2>Meals are here: {meals.length}</h2>
            <div>
                {
                    meals.map(meal => <Meal
                    key={meal.idMeal}
                    meal={meal}
                    ></Meal>)
                }
            </div>
        </div>
    );
};

export default Meals;