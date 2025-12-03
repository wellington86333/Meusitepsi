import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, MapPin, Clock } from 'lucide-react';

export default function SocialProof() {
    const [currentNotification, setCurrentNotification] = useState(null);
    const [isVisible, setIsVisible] = useState(false);

    const notifications = [
        {
            name: 'Maria S.',
            location: 'São Paulo, SP',
            action: 'agendou uma consulta',
            time: '3 minutos atrás',
            avatar: '👩'
        },
        {
            name: 'João P.',
            location: 'Rio de Janeiro, RJ',
            action: 'baixou o guia gratuito',
            time: '8 minutos atrás',
            avatar: '👨'
        },
        {
            name: 'Ana C.',
            location: 'Belo Horizonte, MG',
            action: 'completou o quiz psicanalítico',
            time: '12 minutos atrás',
            avatar: '👩'
        },
        {
            name: 'Carlos M.',
            location: 'Curitiba, PR',
            action: 'agendou uma consulta',
            time: '15 minutos atrás',
            avatar: '👨'
        },
        {
            name: 'Juliana R.',
            location: 'Porto Alegre, RS',
            action: 'baixou o guia gratuito',
            time: '18 minutos atrás',
            avatar: '👩'
        },
        {
            name: 'Roberto F.',
            location: 'Brasília, DF',
            action: 'completou o teste de ansiedade',
            time: '22 minutos atrás',
            avatar: '👨'
        },
        {
            name: 'Fernanda L.',
            location: 'Salvador, BA',
            action: 'agendou uma consulta',
            time: '25 minutos atrás',
            avatar: '👩'
        },
        {
            name: 'Pedro H.',
            location: 'Recife, PE',
            action: 'baixou o guia gratuito',
            time: '30 minutos atrás',
            avatar: '👨'
        }
    ];

    useEffect(() => {
        // Show first notification after 10 seconds
        const initialDelay = setTimeout(() => {
            showRandomNotification();
        }, 10000);

        // Then show a new notification every 15-30 seconds
        const interval = setInterval(() => {
            showRandomNotification();
        }, Math.random() * 15000 + 15000); // Random between 15-30 seconds

        return () => {
            clearTimeout(initialDelay);
            clearInterval(interval);
        };
    }, []);

    const showRandomNotification = () => {
        const randomIndex = Math.floor(Math.random() * notifications.length);
        setCurrentNotification(notifications[randomIndex]);
        setIsVisible(true);

        // Hide after 5 seconds
        setTimeout(() => {
            setIsVisible(false);
        }, 5000);
    };

    const handleClose = () => {
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && currentNotification && (
                <motion.div
                    initial={{ opacity: 0, x: -100, scale: 0.8 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -100, scale: 0.8 }}
                    className="fixed bottom-6 left-6 z-40 max-w-sm"
                >
                    <div className="bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden">
                        <div className="p-4">
                            <div className="flex items-start gap-3">
                                {/* Avatar */}
                                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-2xl flex-shrink-0">
                                    {currentNotification.avatar}
                                </div>

                                {/* Content */}
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-start justify-between gap-2">
                                        <div className="flex-1">
                                            <p className="font-semibold text-gray-900 text-sm">
                                                {currentNotification.name}
                                            </p>
                                            <p className="text-sm text-gray-600 mt-0.5">
                                                {currentNotification.action}
                                            </p>
                                        </div>

                                        {/* Close Button */}
                                        <button
                                            onClick={handleClose}
                                            className="text-gray-400 hover:text-gray-600 transition-colors"
                                        >
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>

                                    {/* Meta Info */}
                                    <div className="flex items-center gap-3 mt-2 text-xs text-gray-500">
                                        <div className="flex items-center gap-1">
                                            <MapPin className="w-3 h-3" />
                                            <span>{currentNotification.location}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Clock className="w-3 h-3" />
                                            <span>{currentNotification.time}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Progress Bar */}
                        <motion.div
                            className="h-1 bg-gradient-to-r from-primary to-accent"
                            initial={{ width: '100%' }}
                            animate={{ width: '0%' }}
                            transition={{ duration: 5, ease: 'linear' }}
                        />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
