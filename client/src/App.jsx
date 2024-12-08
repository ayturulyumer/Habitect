
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./scss/App.scss"

import Home from "./pages/Home/Home.jsx";
import NavbarTop from "./components/Navbar/NavbarTop.jsx";
import NavbarBottom from "./components/Navbar/NavbarBottom.jsx";
import { useScreenSize } from "./hooks/useScreenSize.jsx";
import Footer from "./components/Footer/Footer.jsx";

const Layout = () => {
  const isMobile = useScreenSize()

  return (
    <>
      {isMobile ? <NavbarBottom /> : <NavbarTop />}
      <Outlet />
      <Footer />

    </>

  )
}
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [{ path: "/", element: <Home /> }],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;

