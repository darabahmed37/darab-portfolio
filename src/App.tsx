import Home from "./Pages/Home.tsx";
import { Route, Routes } from "react-router";
import AboutMe from "./Pages/AboutMe.tsx";
import Header from "./Components/Header.tsx";
import ScrollToTop from "./Components/scrollToTop.ts";
import Footer from "./Components/Footer.tsx";
import ContactMe from "./Pages/ContactMe.tsx";

function App() {
  return (
    <div className="bg-background min-h-screen" id="homeContainer">
      <Header />
      <div className={"w-4/5 mx-auto"}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/contact" element={<ContactMe />} />

          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
