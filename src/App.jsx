import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Search from "./pages/Search.jsx";
import Upcoming from "./pages/Upcoming.jsx";
import NotFound from "./pages/NotFound.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import ShowPage from "./pages/ShowPage.jsx";
import Favorites from "./pages/Favorites.jsx";
import Layout from "./components/Layout.jsx";
import { LoadingSpinner } from "./components/UIComponents.jsx";
import {
  homeLoader,
  searchLoader,
  showLoader,
  upcomingLoader,
  favoritesLoader,
} from "./loaders.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: homeLoader,
      },
      {
        path: "home",
        element: <Home />,
        loader: homeLoader,
      },
      {
        path: "favorites",
        element: <Favorites />,
        loader: favoritesLoader,
      },
      {
        path: "upcoming",
        element: <Upcoming />,
        loader: upcomingLoader,
      },
      {
        path: "show/:showID",
        element: <ShowPage />,
        loader: showLoader,
      },
      {
        path: "search/:searchText",
        element: <Search />,
        loader: searchLoader,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} fallbackElement={<LoadingSpinner />} />
  );
}

export default App;
