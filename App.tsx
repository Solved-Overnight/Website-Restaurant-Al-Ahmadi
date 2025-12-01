import React, { useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import PopularTimes from './components/PopularTimes';
import Reviews from './components/Reviews';
import MapContact from './components/MapContact';
import Footer from './components/Footer';
import AIChat from './components/AIChat';
import Navbar from './components/Navbar';
import CartSidebar from './components/CartSidebar';
import Reservation from './components/Reservation';
import { LanguageProvider } from './contexts/LanguageContext';
import { CartProvider } from './contexts/CartContext';

const AppContent: React.FC = () => {
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  return (
    <div className="font-sans text-gray-900 overflow-x-hidden selection:bg-kuwait-gold selection:text-kuwait-dark">
      <Navbar onOpenReservation={() => setIsReservationOpen(true)} />
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <PopularTimes />
      <Reviews />
      <MapContact />
      <Footer />
      <AIChat />
      <CartSidebar />
      <Reservation isOpen={isReservationOpen} onClose={() => setIsReservationOpen(false)} />
      {/* Hidden button for hero to trigger reservation */}
      <button id="navbar-book-btn" className="hidden" onClick={() => setIsReservationOpen(true)}></button>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </LanguageProvider>
  );
};

export default App;
