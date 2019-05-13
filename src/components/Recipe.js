import React from "react";
import style from "./Recipe.module.css";
const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <div className={style.recipeWrapper}>
        <div className={style.imgWrapper}>
          <h1 className={style.title}>{title}</h1>
          <img className={style.img} src={image} />
          {/* <ol className={style.recipeList}>
          {ingredients.map(ingredient => (
            <li className="recipe">{ingredient.text}</li>
          ))}
        </ol> */}
        </div>
      </div>
    </div>
  );
};

export default Recipe;
