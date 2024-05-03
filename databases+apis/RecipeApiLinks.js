const fetchRepositories = (link) => {
    return fetch(link)
        .then(response => {
            if (!response.ok)
                throw new Error("Error in fetch: " + response.statusText);
            return response.json();
        })
        .then(response => {
            return response;
        })
        .catch(err => {
            console.error(err);
        });
}

const searchByKeyword = (keyword) => {
    return `https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`;
}

const searchByCategory = (keyword) => {
    return `https://www.themealdb.com/api/json/v1/1/filter.php?c=${keyword}`;
}

const searchByArea = (keyword) => {
    return `https://www.themealdb.com/api/json/v1/1/filter.php?a=${keyword}`;
}

const getRecipeById = (idMeal) => {
    return `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
}

const getAllCategories = 'https://www.themealdb.com/api/json/v1/1/categories.php';

const getAllAreas = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';

const getRandomRecipe = 'https://www.themealdb.com/api/json/v1/1/random.php';

export { fetchRepositories, searchByKeyword, searchByCategory, searchByArea, getRecipeById, getAllCategories, getAllAreas, getRandomRecipe };