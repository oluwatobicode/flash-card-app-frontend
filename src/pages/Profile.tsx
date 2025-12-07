import ProfileForm from "../components/profile/ProfileForm";
import Footer from "../ui/Footer";
import Navbar from "../ui/Navbar";

const Profile = () => {
  return (
    <main className="min-h-screen mx-auto max-w-7xl">
      <Navbar />
      <ProfileForm />
      <Footer />
    </main>
  );
};

export default Profile;
