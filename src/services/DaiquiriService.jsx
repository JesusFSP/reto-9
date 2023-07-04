export const readDaiquiri = async () => {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=Daiquiri');
    return response.json();
  };

