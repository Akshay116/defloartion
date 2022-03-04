import Navbar from "./Components/navbar";
import Footer from "./Components/footer";
import Start from "./Components/start";
import Info from "./Components/info";
import Tiles from "./Components/tiles";
import Burnshedule from "./Components/burnshedule";
function App() {
  return (
    <div className="main-container">

    <Start/>
    <Info/>
    <Tiles/>
    <Burnshedule/>
    
    <Footer/>

    </div>
  );
}

export default App;
