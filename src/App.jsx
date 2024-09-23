import "./styles/App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Book from "./pages/Book";
import About from "./pages/About";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navigation />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/book/:id" element={<Book />} />
          <Route path="/about" element={<About />} />
          <Route path="/books/:category" element={<Books />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}
export default App;
