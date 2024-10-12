import Footer from "./components/Footer/Footer";
import Home from "./components/Main/Home";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/contact-us" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} /> */}
            </Routes>
            <Footer />
        </Router>
    {/* <Navbar />
    <Home /> */}
    </div>
  );
}

export default App;
