import { Toaster } from "react-hot-toast";
import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Qualification from "./components/Qualification/Qualification";
import ScrollUp from "./components/ScrollUp/ScrollUp";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      {/* <ThemeToggle /> */}
      <Header></Header>
      <main className="main">
        <Home></Home>
        <About></About>
        <Skills></Skills>
        {/* <Services></Services> */}
        <Qualification></Qualification>
        <Projects></Projects>
        {/* <Testimonial></Testimonial> */}
        <Contact></Contact>
      </main>

      <Footer></Footer>
      <ScrollUp></ScrollUp>
    </>
  );
}

export default App;
