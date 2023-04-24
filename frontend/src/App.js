import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About"
import Work from "./Components/Work";
import Footer from "./Components/Footer"

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Home />
      <About/>
      <Work/>
      <Footer/>
    
    </div>
  );
}

export default App;