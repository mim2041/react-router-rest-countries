import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const MealDetail = ({params}) => {
    const meal = useLoaderData();
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    }

    // console.log(meal.meals)
    const {idMeal, strMeal, strInstructions, strMealThumb} = meal.meals[0];
    return (
        <div>
            <h3>Details about your meal: {idMeal}</h3>
            <h5>Name: {strMeal}</h5>
            <p>Instructions: {strInstructions}</p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default MealDetail;