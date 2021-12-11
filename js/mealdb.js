const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // clear data
    searchField.value = '';
    if (searchText == '') {
        console.log('write some thing')
    }
    else{
        // load data
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
    .then (res => res.json())
    .then (data => displaySearchResult(data.meals));
    }
    
}

const displaySearchResult = meals => {
    // console.log(meals);
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    if(meals.lenght == 0){
        console.log('pleace search');
    }

    meals.forEach(meal => {
        // console.log(meal);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div onclick="loadMealDetail(${meal.idMeal})" class="card h-100">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${meal.strMeal}</h5>
              <p class="card-text">${meal.strInstructions.slice(0, 300)}</p>
            </div>
          </div>
        `;
        searchResult.appendChild(div);
    })
}

const loadMealDetail = mealid => {
    // console.log(mealid);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`
    fetch(url)
    .then (res => res.json())
    .then (data => displayMealDeteil(data.meals[0]))
}

const displayMealDeteil = meal => {
    // console.log(meal)
    const mealDetails = document.getElementById('meal-details');
    mealDetails.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML =  
    `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0, 300)}</p>
            <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
            </div>   
    `;
    mealDetails.appendChild(div);
}