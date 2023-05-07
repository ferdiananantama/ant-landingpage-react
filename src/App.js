import './App.css';
import NavigationBar from "./components/NavigationBar";
import Intro from "./components/Intro";
import Service from "./components/Service";
import Kenapa from "./components/Why";
import PagesTim from "./components/Tim";
import Tool from "./components/Tools";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
import "./style/landingPage.css"

function App() {
  return (
    <div>
      <div className='BG'>
          <NavigationBar />
          <Intro />
      </div>
          <Service />
          <Kenapa />
          <PagesTim />
          <Tool />
          <Testimonial />
          <Footer />
    </div>
  );
}

export default App;
