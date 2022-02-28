const searchFood = () => {
    const searchField = document.getElementById('search-field');    //get input data
    const searchText = searchField.value;
    // console.log(searchText);
    searchField.value = '';     //-------clear input field
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;

    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.meals))  //call display function
}

const displaySearchResult = meals => {
    const searchResult = document.getElementById('search-result');      // ger parent node
    //start function and get single elemtnt of meals
    meals.forEach(meal => {
        console.log(meal);
        const div = document.createElement('div');              //careat chald node
        div.classList.add('col');                    //add class in create element
        div.innerHTML = `
        <div class="card h-100">
                <img src=" ${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
            </div>
        </div>
        `;
        searchResult.appendChild(div);          //append chield         in      parent NOde
    });

}