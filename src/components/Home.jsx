import React from 'react'

function Home() {
    return (
        <div>
            <div className="jumbotron">
                <h1 className="display-4">Hello, world!</h1>
                <p className="lead">
                    This is an amazing page of recipes.
                </p>
                <hr className="my-4"/>
                <p>
                    Amazing amazing recipes!!!
                </p>
                <p className="lead">
                    <a className="btn btn-primary btn-lg" href="/list" role="button">Recipes List</a>
                </p>
            </div>
        </div>
    )
}

export default Home
