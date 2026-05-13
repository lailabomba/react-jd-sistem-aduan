import { type RouteConfig, index, route } from "@react-router/dev/routes";
import About from "./routes/about";
import BorangAduan from "./routes/aduan/borangAduan";

export default [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),
  route("aduan/borang-aduan", "routes/aduan/borangAduan.tsx"),
  route("aduan/dashboard", "routes/aduan/dashboard.tsx"),
] satisfies RouteConfig; 
