import "./App.css";
import Layout from "./components/Layout.jsx";
import Home from "./components/pages/Home.jsx";
import About from "./components/pages/About.jsx";
import Gallery from "./components/pages/Gallery.jsx";
import Contact from "./components/pages/Contact.jsx";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import { useState, useEffect } from "react";

const [loading, setLoading] = useState(true);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/kartoon-fool-react/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/kartoon-fool-react/about" element={<About />} />
      <Route path="/kartoon-fool-react/gallery" element={<Gallery />} />
      <Route path="/kartoon-fool-react/contact" element={<Contact />} />
    </Route>
  )
);

function App() {
  useEffect(() => { setLoading(false) }, []);

  console.log(loading)

  return ( loading == false && <RouterProvider router={router} /> )
}

export default App;