import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { Navbar } from "./components/NavBar";
import { AppComida } from "./pages/AppComida";
import AdminRoute from "./routes/AdminRoute";
import { ProtectedRoute } from "./routes/ProtectedRoute";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Admin } from "./pages/Admin";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="container">
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<ProtectedRoute><AppComida /></ProtectedRoute>} />
            <Route path="/admin" element={<AdminRoute><Admin /></AdminRoute>} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App
