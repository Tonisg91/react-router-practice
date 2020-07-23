import React from 'react'

function RecipeDetails(props) {

    const idSearched = props.match.params.id;

    const renderDetails = props.data
        .filter(recipe => recipe.id === idSearched)
        .map(({id, title, description, img, timeInMinutes}) => (
            <div key={id}>
                <img src={img} alt={title} className="recipe-image-details"/>
                <div>
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <p><strong>Cook Time:</strong> {timeInMinutes}</p>
                </div>
            </div>
        ))

    return (
        <div>
            <h1>RecipeDetails</h1>
            {renderDetails}
        </div>
    )
}

export default RecipeDetails
