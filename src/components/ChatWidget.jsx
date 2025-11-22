import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, User, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../LanguageContext';

const ChatWidget = () => {
    const { t } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    useEffect(() => {
        if (isOpen && messages.length === 0) {
            setIsTyping(true);
            setTimeout(() => {
                setMessages([{ type: 'bot', text: t.chatWidget.greeting }]);
                setIsTyping(false);
            }, 1000);
        }
    }, [isOpen, messages, t.chatWidget.greeting]);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isTyping]);

    const handleSend = () => {
        if (!inputValue.trim()) return;

        const userMessage = inputValue;
        setMessages(prev => [...prev, { type: 'user', text: userMessage }]);
        setInputValue('');
        setIsTyping(true);

        setTimeout(() => {
            let botResponse = t.chatWidget.defaultResponse;
            const lowerInput = userMessage.toLowerCase();

            if (lowerInput.includes('preço') || lowerInput.includes('valor') || lowerInput.includes('custo')) {
                botResponse = t.chatWidget.responses.price;
            } else if (lowerInput.includes('horário') || lowerInput.includes('agenda') || lowerInput.includes('disponibilidade')) {
                botResponse = t.chatWidget.responses.hours;
            } else if (lowerInput.includes('online') || lowerInput.includes('remoto')) {
                botResponse = t.chatWidget.responses.online;
            } else if (lowerInput.includes('ansiedade') || lowerInput.includes('depressão') || lowerInput.includes('ajuda')) {
                botResponse = t.chatWidget.responses.help;
            }

            setMessages(prev => [...prev, { type: 'bot', text: botResponse }]);
            setIsTyping(false);
        }, 1500);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') handleSend();
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 font-sans">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="bg-surface w-80 sm:w-96 rounded-lg shadow-2xl border border-primary/10 overflow-hidden mb-4 flex flex-col h-[500px]"
                    >
                        {/* Header */}
                        <div className="bg-primary p-4 flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <div className="w-10 h-10 bg-bg rounded-full flex items-center justify-center text-primary">
                                        <Bot size={24} />
                                    </div>
                                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-success border-2 border-primary rounded-full"></span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-bg text-sm">{t.chatWidget.title}</h3>
                                    <p className="text-xs text-bg/70">{t.chatWidget.subtitle}</p>
                                </div>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="text-bg/70 hover:text-bg transition-colors">
                                <X size={20} />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-bg">
                            {messages.map((msg, index) => (
                                <div
                                    key={index}
                                    className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[80%] p-3 rounded-lg text-sm ${msg.type === 'user'
                                            ? 'bg-primary text-bg rounded-tr-none'
                                            : 'bg-surface border border-primary/10 text-textSecondary rounded-tl-none shadow-sm'
                                            }`}
                                    >
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-surface border border-primary/10 p-3 rounded-lg rounded-tl-none shadow-sm flex gap-1">
                                        <span className="w-2 h-2 bg-secondary rounded-full animate-bounce"></span>
                                        <span className="w-2 h-2 bg-secondary rounded-full animate-bounce delay-100"></span>
                                        <span className="w-2 h-2 bg-secondary rounded-full animate-bounce delay-200"></span>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <div className="p-4 bg-surface border-t border-primary/10">
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    placeholder={t.chatWidget.placeholder}
                                    className="flex-1 bg-bg border border-primary/10 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-secondary transition-colors"
                                />
                                <button
                                    onClick={handleSend}
                                    disabled={!inputValue.trim()}
                                    className="bg-primary text-bg p-2 rounded-full hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <Send size={18} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="bg-secondary text-primary p-4 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center relative group"
            >
                {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
                {!isOpen && (
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full animate-ping"></span>
                )}
            </motion.button>
        </div>
    );
};

export default ChatWidget;
