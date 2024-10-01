import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Mercury from "./pages/Mercury.tsx";
import Mars from "./pages/Mars.tsx";
import Earth from "./pages/Earth.tsx";
import Uranus from "./pages/Uranus.tsx";
import Jupiter from "./pages/Jupiter.tsx";
import Saturn from "./pages/Saturn.tsx";
import Venus from "./pages/Venus.tsx";
import Neptune from "./pages/Neptune.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Mercury />} />
      <Route path="mercury" element={<Mercury />} />
      <Route path="mars" element={<Mars />} />
      <Route path="earth" element={<Earth />} />
      <Route path="uranus" element={<Uranus />} />
      <Route path="jupiter" element={<Jupiter />} />
      <Route path="saturn" element={<Saturn />} />
      <Route path="venus" element={<Venus />} />
      <Route path="neptune" element={<Neptune />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
