import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FilterProvider } from "./context/FilterContext";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Research from "./pages/Research";
import Publications from "./pages/Publications";
import Teaching from "./pages/Teaching";
import Projects from "./pages/Projects";
import Consultancy from "./pages/Consultancy";
import Leadership from "./pages/Leadership";
import AcademicAwards from "./pages/Award";
import Media from "./pages/Media";
import Contact from "./pages/Contact";
import EducationJourney from "./pages/Education";
import Supervisory from "./pages/Supervisory";
import AdministrativeResponsibilities from "./pages/AdministrativeResponsibilities";
import Timeline from "./components/Home/Timeline";

export default function App() {
  return (
    <BrowserRouter>
      <FilterProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<EducationJourney />} />
            <Route path="/research" element={<Research />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/supervisory" element={<Supervisory />} />
            <Route path="/teaching" element={<Timeline />} />
            <Route path="/consultancy" element={<Consultancy />} />
            <Route path="/leadership" element={<Leadership />} />
            <Route path="/awards" element={<AcademicAwards />} />
            <Route
              path="/administrative-responsibilities"
              element={<AdministrativeResponsibilities />}
            />
            <Route path="/media" element={<Media />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </FilterProvider>
    </BrowserRouter>
  );
}
