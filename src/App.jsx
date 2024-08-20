import "./App.css";
import Navbar from "./sections/Navbar/Navbar";
import Me from "./sections/Me/Me";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Me />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}
export default App;
