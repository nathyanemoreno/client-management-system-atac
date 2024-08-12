import Axios from "axios";
import { EnvVariables } from "~/domain/constants/envVariables";

const api = Axios.create({
  baseURL: EnvVariables.API_HOST,

});

export { api };
