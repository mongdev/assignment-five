const searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", function () {
  const searchInput = document.getElementById("search-input").value;
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${searchInput}`)
    .then((res) => res.json())
    .then((data) => {
      document.getElementById("display-meals").innerHTML = "";
      document.getElementById("meal-info").innerHTML = " ";
      const displayMeal = document.getElementById("display-meals");
      data.meals.forEach((element) => {
        const singleMeals = document.createElement("div");
        singleMeals.className = "card";
        singleMeals.innerHTML = `
            <img src="${element.strMealThumb}" onClick="displayMealData(${element.idMeal})">
            <h1 onClick="displayMealData(${element.idMeal})" >${element.strMeal}</h1>
            `;
        displayMeal.appendChild(singleMeals);
      });
    });
});

const displayMealData = (clickMeal) => {
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${clickMeal}`)
    .then((res) => res.json())
    .then((data) => {
      const displayMealInfo = document.getElementById("meal-info");
      document.getElementById("meal-info").innerHTML = " ";
      document.getElementById("meal-info").style.display = "block";
      const eachMealInfo = document.createElement("div");
      eachMealInfo.className = "singleMealInfo";
      eachMealInfo.innerHTML = `
            <img src="${data.meals[0].strMealThumb}">
            <h1>${data.meals[0].strMeal}</h1>
            <h3>Category : ${data.meals[0].strCategory}</h3>
            <p>✅ ${data.meals[0].strIngredient1} : ${data.meals[0].strMeasure1}</p>
            <p>✅ ${data.meals[0].strIngredient2} : ${data.meals[0].strMeasure2}</p>
            <p>✅ ${data.meals[0].strIngredient3} : ${data.meals[0].strMeasure3}</p>
            <p>✅ ${data.meals[0].strIngredient4} : ${data.meals[0].strMeasure4}</p>
            <p>✅ ${data.meals[0].strIngredient5} : ${data.meals[0].strMeasure5}</p>
            <p>✅ ${data.meals[0].strIngredient6} : ${data.meals[0].strMeasure6}</p>
            `;
      displayMealInfo.appendChild(eachMealInfo);
    });
};
