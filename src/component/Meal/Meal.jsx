import React from 'react';

const Meal = ({meal}) => {
    const {idMeal, strMeal, strInstructions, strMealThumb} = meal;
    return (
        <div>
            <h3>{strMeal}</h3>
        </div>
    );
};

export default Meal;