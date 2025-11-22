import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import FAQ from './components/FAQ';
import FreeTest from './components/FreeTest';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import Toast from './components/Toast';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
    const [scrolled, setScrolled] = useState(false);
    const [toast, setToast] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const showToast = (message, type = 'success') => {
        setToast({ message, type });
    };

    return (
        <div className="font-sans text-textPrimary bg-bg selection:bg-secondary selection:text-primary overflow-x-hidden">
            <Navbar scrolled={scrolled} />

            <main>
                <Hero />
                <About />
                <Services />
                <FreeTest />
                <Blog />
                <Testimonials />
                <FAQ />
                <Contact />
            </main>

            <Footer />

            <WhatsAppButton />
            <ChatWidget />

            {toast && (
                <Toast
                    message={toast.message}
                    type={toast.type}
                    onClose={() => setToast(null)}
                />
            )}
        </div>
    );
}
