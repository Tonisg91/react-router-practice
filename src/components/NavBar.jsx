import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'


function NavBar() {

    const { push } = useHistory();

    const initialState = {
        query: ''
    };

    const [search, setSearch] = useState(initialState);

    const handleChange = ({target}) => setSearch({
        query: target.value
    });

    const handleSubmit = (event) => {
        event.preventDefault()
        push('/search?query=' + search.query)
        setSearch({...initialState})
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">Navbar</a>
            <button 
                className="navbar-toggler" 
                type="button" 
                data-toggle="collapse" 
                data-target="#navbarSupportedContent" 
                aria-controls="navbarSupportedContent" 
                aria-expanded="false" 
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/list">List</a>
                </li>
                </ul>
                <form className="form-inline my-2 my-lg-0" onSubmit={handleSubmit}>
                <input 
                    className="form-control mr-sm-2" 
                    type="search" 
                    placeholder="Search" 
                    aria-label="Search"
                    name="search"
                    onChange={handleChange}
                    value={search.query}
                />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
    


    
}

export default NavBar