import { BrowserRouter, Route, Routes } from "react-router";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Decks from "./pages/Decks";
import Cards from "./pages/Cards";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/decks" element={<Decks />} />
        <Route path="/decks/:id" element={<Cards />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
