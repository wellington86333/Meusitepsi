import React, { useEffect } from 'react';
import { X, CheckCircle, AlertCircle, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Toast = ({ message, type = 'success', onClose }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 4000);
        return () => clearTimeout(timer);
    }, [onClose]);

    const icons = {
        success: <CheckCircle className="w-5 h-5 text-success" />,
        error: <AlertCircle className="w-5 h-5 text-error" />,
        info: <Info className="w-5 h-5 text-accent" />
    };

    const borderColors = {
        success: 'border-success',
        error: 'border-error',
        info: 'border-accent'
    };

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, y: 50, x: '-50%' }}
                animate={{ opacity: 1, y: 0, x: '-50%' }}
                exit={{ opacity: 0, y: 20, x: '-50%' }}
                className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-surface px-6 py-4 border-l-4 ${borderColors[type]} shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] z-50 flex items-center gap-4 min-w-[300px]`}
                role="alert"
            >
                {icons[type]}
                <span className="font-sans text-primary font-medium flex-1">{message}</span>
                <button
                    onClick={onClose}
                    className="text-textSecondary hover:text-primary transition-colors"
                >
                    <X size={18} />
                </button>
            </motion.div>
        </AnimatePresence>
    );
};

export default Toast;
