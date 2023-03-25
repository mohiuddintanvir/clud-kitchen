import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Main from "../Main/Main";

const router = createBrowserRouter([
  {
      path: '/',
      element: <Main></Main>,
      
  }
])
export default router;