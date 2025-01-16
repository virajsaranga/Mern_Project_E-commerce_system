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
      <main className="py-3">
        <Outlet />
      </main>
   
      <Footer />
    </>
  );
}

export default App;
  