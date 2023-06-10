
import './App.css';
import Home from './routes/Home';
import { Routes,Route } from 'react-router-dom';
import About from './routes/About';
import Service from './routes/Service';
import Contacts from './routes/Contact';


function App() {
  return (
    <div className="App">

      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<About />} path="/about" />
        <Route element={<Service />} path="/service" />
        <Route element={<Contacts />} path="/contact" />
      </Routes>
    </div>
  );
}

export default App;
