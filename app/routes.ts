import { type RouteConfig, index, route } from "@react-router/dev/routes";
import About from "./routes/about";

export default [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),
] satisfies RouteConfig; 
