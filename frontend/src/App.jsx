import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import EventsPage from "./pages/EventsPage";
import ResultsPage from "./pages/ResultsPage";
import AboutCouncil from "./pages/AboutCouncil";
import GalleryPage from "./pages/GalleryPage";

function App() {

  return (
    <div className="h-full w-full">
      <Routes>
        <Route index path="/" element={<LandingPage />} />
        <Route index path="/events" element={<EventsPage />} />
        <Route index path="/results" element={<ResultsPage />} />
        <Route index path="/aboutus" element={<AboutCouncil />} />
        <Route index path="/gallery" element={<GalleryPage />} />
      </Routes>
    </div>
  );
}

export default App;
