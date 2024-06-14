import Footer from "./components/core/Footer";
import Navbar from "./components/core/Navbar";
import LandingPage from "./pages/LandingPage";

export default function App() {
  return (
    <div className="root-layout">
      <Navbar />
      <div className="outlet-layout">
        <LandingPage />
      </div>
      <Footer />
    </div>
  );
}
