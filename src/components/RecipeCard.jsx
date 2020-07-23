import React from 'react'
import { Link } from 'react-router-dom';

function RecipeCard({recipe}) {

    const {id, img, title, description, timeInMinutes} = recipe;

    return (
        
            <div className="column mx-2">
                <img src={img} alt={title} className="recipe-image"/>
                <div className="recipe-features text-center">
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <p><strong>Cook Time:</strong> {timeInMinutes}</p>
                    <Link to={`/list/${id}`}>See Details</Link>
                </div>
            </div>
    )
}

export default RecipeCard
