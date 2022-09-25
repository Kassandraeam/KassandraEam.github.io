import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import TimelineComponent from "./components/Timeline/Timeline";
import Experience from "./components/Experience/Experience";
import ExampleProjects from "./components/ExampleProjects/ExampleProjects";
import Footer from "./components/Footer/Footer";
import TestComponent from "./components/TestComponent/TestComponent";


function App() {


  return (
    <>
      <Navbar />
      <TestComponent/>
      <Hero />
      <TimelineComponent/>
      <Footer />
    </>
  );
}

export default App;
