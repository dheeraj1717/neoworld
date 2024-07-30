import "./App.css";
import AboutUs from "./components/about/AboutUs";
import CleanEnergy from "./components/cleanEnergy/CleanEnergy";
import Collaborations from "./components/collaborations/Collaborations";
import Footer from "./components/footer/Footer";
import Introduction from "./components/introduction/Introduction";
import Mission from "./components/mission/Mission";
import Navbar from "./components/navbar/Navbar";
import Verticals from "./components/verticals/Verticals";

function App() {
  return (
    <div className="App font-serif max-w-[1600px] mx-auto flex flex-col items-centern justify-center">
      <Navbar />
      <Introduction />
      <Mission />
      <AboutUs />
      <Verticals />
      <CleanEnergy />
      <Collaborations />
      <Footer />
    </div>
  );
}

export default App;
