import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Hero from './components/Hero';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Outlet /> {/* This is where child routes like Header will be rendered */}
      <Footer />
    </>
  );
}

export default App;
  