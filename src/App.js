// import './App.css';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import HomePage from './components/HomePage';
// import ParallaxHero from "./components/ParallaxHero";
// import ScrollAnimation from './ScrollAnimation';
function App() {
  return (
    <Router>
      {/* <ParallaxHero /> */}
      <NavigationBar />
      
      <HomePage />
    
    </Router>
  );
}

export default App;

