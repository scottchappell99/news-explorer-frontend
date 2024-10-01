import { Navigate } from "react-router-dom";

function ProtectedRoute({ isLoggedIn, children }) {
  if (!isLoggedIn) {
    return <Navigate to="/news-explorer-frontend/" replace />;
  }

  return children;
}

export default ProtectedRoute;
