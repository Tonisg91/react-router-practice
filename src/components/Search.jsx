import React from 'react'
import queryString from 'query-string'

function Search(props) {
    const urlQuery = props.location.search;
    const queryObject = queryString.parse(urlQuery);

    const renderResults = props.data
        .filter(recipe => {
            const title = recipe.title.toLowerCase()
            const description = recipe.description.toLowerCase()

            const titleMatch = title.includes(queryObject.query.toLowerCase());
            const descriptionMatch = description.includes(queryObject.query.toLowerCase());

            if (titleMatch || descriptionMatch) {
                return recipe
            } 
        })
        .map(({id, img, title, description, timeInMinutes}) => (
            <div key={id}>
                <img src={img} alt={title} className="recipe-image-details"/>
                <div>
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <p><strong>Cook Time:</strong> {timeInMinutes}</p>
                </div>
            </div>
        ))


    if (renderResults.length) {
        return (
            <div>
                <h1>Search</h1>
                {renderResults}
            </div>
        )
    }
    
    return (
        <div>
            <h1>Search</h1>
            <h3>There are no results</h3>
        </div>
    )
}

export default Search
