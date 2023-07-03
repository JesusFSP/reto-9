import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import PrimaryLayout from "../layouts/PrimaryLayout";
import CharactersPage from "../pages/charactersPage";
import CocktailPage from "../pages/CocktailPAge";
import NotFoundPage from "../pages/NotFoundPage";
import { readCharacters } from "../services/charactersService";
import { readCocktails } from "../services/CocktailsService";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PrimaryLayout/>,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <App />
      },
      {
        path: 'personajes',
        element: <CharactersPage />,
        loader: readCharacters
      },
      {
        path: 'cocktails',
        element: <CocktailPage />,
        loader: readCocktails
      },
      {
        path: 'ubicaciones',
        element: <h1 style={{ padding: '5rem' }}>Ubicaciones</h1>
      },
      {
        path: 'episodios',
        element: <h1 style={{ padding: '5rem' }}>Episodios</h1>
      }
    ]
  },
]);