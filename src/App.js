import './App.css'
import Navbar from './Components/Navbar'
import Showcase from './Components/Showcase'
import HomeArticles from './Components/HomeArticles'
import Footer from './Components/Footer'
import About from './About'
import Business from './Business'
import Sports from './Sports'
import Entertainment from './Entertainment'
import Technology from './Technology'
import { HashRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/businessNews' element={<Business />} />
          <Route path='/sportsNews' element={<Sports />} />
          <Route path='/entertainmentNews' element={<Entertainment />} />
          <Route path='/technologyNews' element={<Technology />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

const Home = () => {
  return (
    <div>
      <Showcase />
      <HomeArticles />
    </div>
  )
}

export default App;
