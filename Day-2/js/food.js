const searchFood = () => {
    const inputField = document.getElementById('input-field');
    const inputText = inputField.value;
    inputField.value = '';

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayFood(data.meals))
}
searchFood()

const displayFood = (foods) => {
    const container = document.getElementById('food-container');
    container.textContent = '';
    foods.forEach(food => {

        const div = document.createElement('div');
        div.classList.add('col')
        div.innerHTML = `
        <div onclick="foodDetails(${food.idMeal})" class="card">
          <img src="${food.strMealThumb}" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">${food.strMeal}</h5>
            <p class="card-text">
            ${food.strInstructions.slice(0, 200)}
            </p>
          </div>
        </div>
        `;
        container.appendChild(div)
    })
}

const foodDetails = (foodId) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`
    fetch(url)
        .then(res => res.json())
        .then(data => showFoodDetails(data.meals[0]))

}

const showFoodDetails = food => {
    const containerDetails = document.getElementById('details');
    const div = document.createElement('div');
    div.classList.add('card');
    containerDetails.textContent = '';

    div.innerHTML =
        `
        <img src="${food.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${food.strMeal}</h5>
          <p class="card-text">${food.strInstructions.slice(0, 150)}</p>
          <a href="${food.strMealThumb}" class="btn btn-primary">Go somewhere</a>
        </div>

        `;
    containerDetails.appendChild(div)
    console.log(food)
}