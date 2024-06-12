import Footer from "./components/core/Footer";
import Navbar from "./components/core/Navbar";
import LandingPage from "./pages/LandingPage";

export default function App() {
  return (
    <div className="xl:mx-32 lg:mx-12 mx-4 flex flex-col justify-center  text-center">
      <Navbar />
      <LandingPage />
      <Footer/>

    </div>
  );
}
