import React from "react";
import style from "./Recipe.module.css";
const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <img className={style.img} src={image} />
      <h1 className={style.title}>{title}</h1>
      <button className={style.btn}>Rezept</button>
      {/* <div className={style.listWrapper}>
        <ol className={style.recipeList}>
          {ingredients.map(ingredient => (
            <li className="recipe">{ingredient.text}</li>
          ))}
        </ol>
      </div> */}
    </div>
  );
};

export default Recipe;
