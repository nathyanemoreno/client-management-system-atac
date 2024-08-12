import { createBrowserRouter } from "react-router-dom";
import { ClientsPageScreen } from '~/presentation/pages/Clients';
import { HomePage } from "~/presentation/pages/Home";
import { routes } from ".";

const router = createBrowserRouter([
  {
    path: routes.root,
    element: <HomePage />,
  },
  {
    path: routes.Clients,
    element: <ClientsPageScreen />,
  },
]);

export { router };
