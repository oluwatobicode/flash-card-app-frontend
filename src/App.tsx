import { BrowserRouter, Route, Routes } from "react-router";
import { Toaster } from "react-hot-toast";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Decks from "./pages/Decks";
import Cards from "./pages/Cards";
import Study from "./pages/Study";
import Profile from "./pages/Profile";
import ResetPassword from "./pages/ResetPassword";
import StudySession from "./pages/StudySession";

function App() {
  return (
    <BrowserRouter>
      <Toaster
        toastOptions={{
          duration: 3000,
          removeDelay: 1000,
        }}
        position="top-right"
      />
      <Routes>
        {/* auth routes */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ResetPassword />} />

        {/* protectedRoutes */}
        <Route path="/decks" element={<Decks />} />
        <Route path="/decks/:id" element={<Cards />} />
        <Route path="/study/:id" element={<Study />} />
        <Route path="/study/session-result" element={<StudySession />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

/* 
2) fix navbar - profile or logout button, ✅
3) study page  ✅
4) edit modal ✅
6) footer ✅
1) user profile ✅
8) a forgot password flow user recives email -> opt-> forget password form -> login back ✅
5) preview modal for the ai generated questions
7) custom toast notification
9) a place where the user can see a result of their study session
*/
