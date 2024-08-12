import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "~/presentation/pages/Home";
import { routes } from ".";
import { ClientsPage } from '~/presentation/pages/Clients';

const router = createBrowserRouter([
  {
    path: routes.root,
    element: <HomePage />,
  },
  {
    path: routes.Clients,
    element: <ClientsPage />,
  },
]);

export { router };
