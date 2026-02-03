import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Toaster } from "@/components/ui/sonner";
import { Home } from "@/pages/Home";

// Lazy load pages for better performance
const Metiers = lazy(() => import("@/pages/Metiers").then(m => ({ default: m.Metiers })));
const Contact = lazy(() => import("@/pages/Contact").then(m => ({ default: m.Contact })));const About = lazy(() => import("@/pages/About").then(m => ({ default: m.About })));
// Metiers sub-pages
const Geodetection = lazy(() => import("@/pages/metiers/Geodetection").then(m => ({ default: m.Geodetection })));
const Georeferencement = lazy(() => import("@/pages/metiers/Georeferencement").then(m => ({ default: m.Georeferencement })));
const BureauEtudes = lazy(() => import("@/pages/metiers/BureauEtudes").then(m => ({ default: m.BureauEtudes })));
const MarquagePiquetage = lazy(() => import("@/pages/metiers/MarquagePiquetage").then(m => ({ default: m.MarquagePiquetage })));

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background flex flex-col">
        <Header />

        <main className="flex-grow">
          <Suspense fallback={<div className="min-h-[50vh] flex items-center justify-center">Chargement...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/metiers" element={<Metiers />} />              <Route path="/qui-sommes-nous" element={<About />} />              <Route path="/metiers/geodetection" element={<Geodetection />} />
              <Route path="/metiers/georeferencement" element={<Georeferencement />} />
              <Route path="/metiers/bureau-etudes" element={<BureauEtudes />} />
              <Route path="/metiers/marquage-piquetage" element={<MarquagePiquetage />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </main>
        
        <Footer />
        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App;
