import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import InstructionsPage from './components/Instruction';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <InstructionsPage />
      <main className="py-3">
        <Outlet />
      </main>
   
      <Footer />
    </>
  );
}

export default App;
  