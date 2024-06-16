import "./App.css";
import Layout from "./components/Layout.jsx";
import Home from "./components/pages/Home.jsx";
import About from "./components/pages/About.jsx";
import Gallery from "./components/pages/Gallery.jsx";
import Contact from "./components/pages/Contact.jsx";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />
}

export default App;