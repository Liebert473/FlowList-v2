import { ComponentExample } from "@/components/component-example";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";
import CheckEmail from "./pages/CheckEmail";
import { AuthCallback } from "./pages/AuthCallback";

export function App() {
  const { user, loading } = useAuth();

  const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
    return loading ? (
      <p>Loading...</p>
    ) : user ? (
      children
    ) : (
      <Navigate to="/signin" />
    );
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/auth/callback" element={<AuthCallback />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/check-email" element={<CheckEmail />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <ComponentExample />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
