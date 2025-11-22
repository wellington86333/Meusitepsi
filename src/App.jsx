import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-teal-100 selection:text-teal-900">
            <Navbar />
            <main>
                <Hero />
                <About />
                <Services />
                <Testimonials />
                <FAQ />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;
