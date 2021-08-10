import Navbar from './components/Navbar';
import ImageSlider from './components/Slider/ImageSlider';
import {SliderData} from './components/Slider/SliderData';
import Info from './components/Info';
import Contactos from './components/Contactos';
import Footer from './components/Footer';
import Ventas from './components/Ventas';


function App() {
  return (
    <div className="App">
    <Navbar/>
    
    <ImageSlider slides={SliderData}/>
    <h2 id="link3">NUEVOS 208</h2>
    <Ventas/>
    <Info/>
    <Contactos/>
    <Footer/>
    </div>
  );
}

export default App;
