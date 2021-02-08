const searchMeal = async () => {
  const mealSearchText = document.getElementById("search-input").value;
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${mealSearchText}`;
  const url2 = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealSearchText}`;
  if (mealSearchText.length === 1) {
    const res = await fetch(url);
    const data = await res.json();
    displayMeals(data.meals);
  }
  if (mealSearchText.length > 1) {
    const res = await fetch(url2);
    const data = await res.json();
    displayMeals(data.meals);
  }
};

const displayMeals = (meal) => {
  const mealContainer = document.getElementById("meal-container");
  mealContainer.innerHTML = "";
  const singleMealInfo = document.getElementById("single-meal-info");
  singleMealInfo.innerHTML = "";
  meal.forEach((meals) => {
    const mealsSingle = document.createElement("div");
    mealsSingle.addEventListener("click", () => getMealInfo(meals.idMeal));

    mealsSingle.className = "box";
    mealsSingle.innerHTML = `
      <img src="${meals.strMealThumb}"  >
      <h3 > ${meals.strMeal}</h3>
      `;
    mealContainer.appendChild(mealsSingle);
  });
};

const getMealInfo = async (clickedMeal) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${clickedMeal}`;
  const res = await fetch(url);
  const data = await res.json();

  displayMealInfo(data);
};

const displayMealInfo = (displayMealSingle) => {
  const singleMealInfo = document.getElementById("single-meal-info");
  singleMealInfo.innerHTML = `
    <img src="${displayMealSingle.meals[0].strMealThumb}">
            <h1>${displayMealSingle.meals[0].strMeal}</h1>
            <h3>Category : ${displayMealSingle.meals[0].strCategory}</h3>
            <p>✅ ${displayMealSingle.meals[0].strIngredient1} : ${displayMealSingle.meals[0].strMeasure1}</p>
            <p>✅ ${displayMealSingle.meals[0].strIngredient2} : ${displayMealSingle.meals[0].strMeasure2}</p>
            <p>✅ ${displayMealSingle.meals[0].strIngredient3} : ${displayMealSingle.meals[0].strMeasure3}</p>
            <p>✅ ${displayMealSingle.meals[0].strIngredient4} : ${displayMealSingle.meals[0].strMeasure4}</p>
            <p>✅ ${displayMealSingle.meals[0].strIngredient5} : ${displayMealSingle.meals[0].strMeasure5}</p>
            <p>✅ ${displayMealSingle.meals[0].strIngredient6} : ${displayMealSingle.meals[0].strMeasure6}</p>
            `;
};
