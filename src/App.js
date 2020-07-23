import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Search from './components/Search';
import RecipeList from './components/RecipesList';
import RecipeDetails from './components/RecipeDetails';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import data from './recipe-data.json'

function App() {

  const recipes = [...data]

  return (
    <BrowserRouter className="App">
      <>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/search" render={(props) => <Search data={recipes} {...props}/>}/>
          <Route exact path="/list" render={() => <RecipeList data={recipes}/>}/>
          <Route 
            path="/list/:id" 
            render={(props) => <RecipeDetails data={recipes} {...props}/>}
          />
        </Switch>
      </>
    </BrowserRouter>
  );
}

export default App;
