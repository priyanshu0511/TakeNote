import { Route, Routes, BrowserRouter as Router, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import NotePage from "./pages/NotePage";
import { useAuthContext } from "./hooks/useAuthContext";
import NotFound from "./components/NotFound";

function App() {

  const {user} =useAuthContext();

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={user?<Home />:<Navigate to='/login' />} />
        <Route path="/create" element={user?<Create />:<Navigate to='/login' />} />
        <Route path="/login" element={!user?<Login />:<Navigate to='/' />} />
        <Route path="/signup" element={!user?<SignUp />:<Navigate to='/' />} />
        <Route path="/notes/:id" element={user?<NotePage />:<Navigate to='/login' />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;


