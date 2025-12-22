import { useRouteError, useNavigate } from "react-router-dom";
import { ErrorMessage } from "../components/UIComponents.jsx";
import Header from "../components/Header.jsx";

function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();

  console.error(error);

  let title = "Oops! Something went wrong";
  let message = "An unexpected error occurred.";

  if (error.status === 404) {
    title = "Page Not Found";
    message = "The page you are looking for does not exist.";
  } else if (error.message) {
    message = error.message;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <ErrorMessage
        title={title}
        message={message}
        onRetry={() => navigate("/")}
      />
    </div>
  );
}

export default ErrorPage;
