import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import ConsultationForm from "./components/ConsultationForm";
import Doctor from "./components/Doctor";
import BulkRegistration from "./components/BulkRegistration";
import Pricing from "./components/Pricing";
import Story from "./components/Story";
import MedicalDietChart from "./components/MedicalDietChart";
import Contact from "./components/Contact-Us";
import ErrorPage from "./components/ErrorPage";
import DietChart from "./components/DietChart";
import Faq from "./components/Faq";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/doctor-review" element={<Doctor />} />
        <Route exact path="/book-appointment" element={<ConsultationForm />} />
        <Route exact path="/admin" element={<BulkRegistration />} />
        <Route exact path="/pricing" element={<Pricing />} />
        <Route exact path="/weight-loss" element={<Story />} />
        <Route exact path="/healthy-body-diet-chart" element={<DietChart />} />
        <Route
          exact
          path="/medical-diet-chart"
          element={<MedicalDietChart />}
        />
        <Route exact path="/contact-us" element={<Contact />} />
        <Route exact path="/faq" element={<Faq />} />
        <Route exact path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
