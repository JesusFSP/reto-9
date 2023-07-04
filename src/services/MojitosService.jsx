export const readMojitos = async () => {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=mojito');
    return response.json();
  };