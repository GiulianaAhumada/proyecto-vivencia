import Navbar from './components/Navbar';
import ImageSlider from './components/Slider/ImageSlider';
import {SliderData} from './components/Slider/SliderData';
import Info from './components/Info';
import Contactos from './components/Contactos';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
    <Navbar/>
    
    <ImageSlider slides={SliderData}/>
    <Info/>
    <Contactos/>
    <Footer/>
    </div>
  );
}

export default App;
