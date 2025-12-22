import Header from "./Header.jsx";
import { LoadingSpinner } from "./UIComponents.jsx";
import { Outlet, useNavigation } from "react-router-dom";

function Layout() {
  const navigation = useNavigation();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        {navigation.state === "loading" ? (
          <LoadingSpinner message="Loading..." />
        ) : (
          <Outlet />
        )}
      </main>
    </div>
  );
}

export default Layout;
