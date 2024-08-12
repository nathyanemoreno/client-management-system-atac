import { FC, Fragment, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { routes } from '~/routes';

export const HomePage: FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(routes.Clients);
  }, [navigate]);

  return <Fragment />;
};
