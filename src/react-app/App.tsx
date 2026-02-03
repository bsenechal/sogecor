import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Toaster } from "@/components/ui/sonner";
import { Home } from "@/pages/Home";
import { Skeleton } from "@/components/ui/skeleton";

// Lazy load pages for better performance
const Metiers = lazy(() => import("@/pages/Metiers").then(m => ({ default: m.Metiers })));
const Contact = lazy(() => import("@/pages/Contact").then(m => ({ default: m.Contact })));
const About = lazy(() => import("@/pages/About").then(m => ({ default: m.About })));
// Metiers sub-pages
const Geodetection = lazy(() => import("@/pages/metiers/Geodetection").then(m => ({ default: m.Geodetection })));
const Georeferencement = lazy(() => import("@/pages/metiers/Georeferencement").then(m => ({ default: m.Georeferencement })));
const BureauEtudes = lazy(() => import("@/pages/metiers/BureauEtudes").then(m => ({ default: m.BureauEtudes })));
const MarquagePiquetage = lazy(() => import("@/pages/metiers/MarquagePiquetage").then(m => ({ default: m.MarquagePiquetage })));

function PageSkeleton() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Skeleton */}
      <div className="relative min-h-[50vh] flex flex-col justify-center pt-32 pb-24 overflow-hidden">
        <Skeleton className="absolute inset-0 w-full h-full" />
        <div className="relative z-10 container mx-auto px-4 max-w-7xl text-center space-y-6">
          <Skeleton className="h-16 w-3/4 mx-auto max-w-2xl bg-muted-foreground/20" />
          <Skeleton className="h-24 w-full mx-auto max-w-3xl bg-muted-foreground/20" />
        </div>
      </div>
      {/* Content Skeleton */}
      <div className="container mx-auto px-4 max-w-7xl mt-12 space-y-8">
        <div className="flex gap-4">
           <Skeleton className="h-[300px] w-full rounded-xl" />
           <Skeleton className="h-[300px] w-full rounded-xl hidden md:block" />
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background flex flex-col">
        <Header />

        <main className="flex-grow">
          <Suspense fallback={<PageSkeleton />}>
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
