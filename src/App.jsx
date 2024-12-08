// Router
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// Root layout
import RootLayout from "./RootLayout";

//  Pages
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import FreeAPI from "./pages/FreeAPI";
import Docs from "./pages/Docs";
import NotFound from "./pages/NotFound";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route path="" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/free-api" element={<FreeAPI />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
