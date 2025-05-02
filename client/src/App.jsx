import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import JobList from "./pages/JobList";
import About from "./pages/About";
import Footer from "./components/footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<JobList />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
