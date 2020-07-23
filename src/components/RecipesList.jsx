import React from 'react'
import RecipeCard from './RecipeCard'

function RecipeList({data}) {

    const renderRecipeCards = data.map(recipe => (
        <RecipeCard 
            recipe={recipe}
            key={recipe.id}
            />
    ))

    return (
        <div>
            <h1>Recipes list</h1>
            <div className="container row">
                {renderRecipeCards}
            </div>
            
        </div>
    )
}

export default RecipeList
