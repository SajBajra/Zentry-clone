import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
const Nexus = lazy(() => import("./pages/Nexus"));
const Vault = lazy(() => import("./pages/Vault"));
const Prologue = lazy(() => import("./pages/Prologue"));
const AboutPage = lazy(() => import("./pages/AboutPage"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={
        <div className="flex-center h-dvh w-screen bg-blue-75">
          <div className="three-body">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
          </div>
        </div>
      }>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/nexus" element={<Nexus />} />
            <Route path="/vault" element={<Vault />} />
            <Route path="/prologue" element={<Prologue />} />
            <Route path="/about" element={<AboutPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
