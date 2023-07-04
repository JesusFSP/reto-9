import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import PrimaryLayout from "../layouts/PrimaryLayout";
import MArgaritasPAge from "../pages/MargaritasPAge";
import MojitosPage from "../pages/MojitosPAge";
import DaiquiriPage from "../pages/DaiquiriPage";
import NotFoundPage from "../pages/NotFoundPage";
import { readMargaritas } from "../services/MargaritasService";
import { readMojitos } from "../services/MojitosService";
import { readDaiquiri } from "../services/DaiquiriService";

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
        path: 'margaritas',
        element: <MArgaritasPAge />,
        loader: readMargaritas
      },
      {
        path: 'mojitos',
        element: <MojitosPage />,
        loader: readMojitos
      },
      {
        path: 'daiquiris',
        element: <DaiquiriPage />,
        loader: readDaiquiri
      },
      
    ]
  },
]);