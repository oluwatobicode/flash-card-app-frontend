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

/* 
1) user profile
2) fix navbar - profile or logout button, 
3) study page 
4) edit modal
5) preview modal for the ai generated questions
6) footer
7) landing-page
8) toast notification
9) review the menu place
*/
