export const readMargaritas = async () => {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita');
    return response.json();
  };