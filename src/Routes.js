import { useRoutes } from "react-router-dom";
import { anchors, projects } from "./configs/navigation";
const Routes = () => {
  return useRoutes([...anchors, ...projects]);
};

export default Routes;
