import React, { useState } from "react"
import "./App.css";
import Login from "./Components/Login";
import Recipes from "./Components/Recipe";
import IngredientSearch from "./Components/IngredientSearch"
import IngredientsProvider from "./Context/IngredientsContext";
import RecipeProvider from "./Context/RecipesContext";
import Register from "./Components/Register"
import Home from "./Components/Home";
import About from "./Components/About"
import Work from "./Components/Work";
import Footer from "./Components/Footer";


import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <div className="App">
<Home/>
<About/>
    <RecipeProvider>
      <IngredientsProvider>
        <IngredientSearch/>
        <Recipes/>
      </IngredientsProvider>
    </RecipeProvider>
  

    
    
    </div>
  );
}

export default App;