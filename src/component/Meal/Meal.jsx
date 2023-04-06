import React from 'react';
import './Meal.css'
import { Link, Navigate, useNavigate } from 'react-router-dom';

const Meal = ({meal}) => {
    const {idMeal, strMeal, strInstructions, strMealThumb} = meal;
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate(`/meal/${idMeal}`);
    }

    return (
        <div className='meal'>
            <img src={meal.strMealThumb} alt="" />
            <h3>{strMeal}</h3>
            <p>{strInstructions.slice(0,250)}...</p>
            <p className='link'><Link to={`/meal/${idMeal}`}>Show me detail</Link></p>
            {/* <Link to={`/meal/${idMeal}`}><button>Show post details</button></Link> */}
            <button onClick={handleNavigation}>Details with handler</button>
        </div>
    );
};

export default Meal;