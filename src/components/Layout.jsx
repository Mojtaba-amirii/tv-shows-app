import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header.jsx";
import LoadingSpinner from "./LoadingSpinner.jsx";

function Layout() {
  const navigation = useNavigation();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        {navigation.state === "loading" ? (
          <LoadingSpinner title="Loading..." />
        ) : (
          <Outlet />
        )}
      </main>
    </div>
  );
}

export default Layout;
