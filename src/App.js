/* import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Support from "./components/Support";
import AllInOne from "./components/AllInOne";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Support />
      <AllInOne />
      <Pricing />
      <Footer />
    </>
  );
}

export default App;
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page from "./components/Page";
import List from "./pages/List";
function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/tailwind-lean" element={<Page />} />
                    <Route path="/list" element={<List />} />
                    <Route path="/" element={<Page />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
