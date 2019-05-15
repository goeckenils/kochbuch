import React, { useEffect, useState } from "react";
import Recipe from "./components/Recipe";
import "./App.css";

const App = () => {
  const APP_ID = "a09d701f";
  const APP_KEY = "a2ead55ec6ac13be2cc89fc6177d2ca3";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("duck");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
  };

  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-wrapper">
          <h1 className="logo">
            <i class="fas fa-glass-cheers" /> Cookbook
          </h1>
          <form onSubmit={getSearch} className="search-form">
            <input
              className="search-bar"
              type="text"
              value={search}
              onChange={updateSearch}
            />
            <button className="search-button" type="submit">
              <i class="fas fa-search fa-1x" />
            </button>
          </form>
        </div>
      </nav>
      <div className="container">
        <div className="recipes">
          {recipes.map(recipe => (
            <Recipe
              key={recipe.recipe.label}
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
