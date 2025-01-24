async function fetchRecipes() {
    const ingredientInput = document.getElementById('ingredientInput').value;
    const apiUrl = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredientInput}&number=5&apiKey=7964d265638d43399edac55f9f3f169e`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        displayRecipes(data);
    } catch (error) {
        console.error('Error fetching recipes:', error);
    }
}

function displayRecipes(recipes) {
    const container = document.getElementById('recipesContainer');
    container.innerHTML = ''; // Clear previous results
    recipes.forEach(recipe => {
        const recipeEl = document.createElement('div');
        recipeEl.className = 'recipe';
        recipeEl.innerHTML = `
            <h3>${recipe.title}</h3>
            <img src="${recipe.image}" alt="${recipe.title}" style="width:100px;">
            <p><strong>ID:</strong> ${recipe.id}</p>
        `;
        container.appendChild(recipeEl);
    });
}
