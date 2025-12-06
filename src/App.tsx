import { BrowserRouter, Route, Routes } from "react-router";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Decks from "./pages/Decks";
import Cards from "./pages/Cards";
import Study from "./pages/Study";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/decks" element={<Decks />} />
        <Route path="/decks/:id" element={<Cards />} />
        <Route path="/study/:id" element={<Study />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

/* 
2) fix navbar - profile or logout button, ✅
3) study page  ✅
4) edit modal ✅
1) user profile
5) preview modal for the ai generated questions
7) custom toast notification
6) footer
*/
