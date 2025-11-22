import React, { useState, useEffect, useRef } from 'react';
import {
    Menu, X, Phone, Mail, User, Shield, Clock, Star, MessageSquare,
    ChevronDown, ChevronUp, Send, Check, Brain, Heart, Calendar,
    HelpCircle, MapPin, ArrowRight, ArrowLeft, Loader, Globe, Bot,
    ClockIcon, Sparkles, MessageCircle, Sun, Moon
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

// Interfaces
interface ToastProps {
    message: string;
    onClose: () => void;
}

interface ChatMessage {
    text: string;
    sender: 'user' | 'bot';
}

interface FormState {
    name: string;
    email: string;
    message: string;
}

interface NavItem {
    id: string;
    label: string;
}

interface Service {
    icon: JSX.Element;
    title: string;
    description: string;
}

interface DetailedService extends Service {
    details: string;
}

interface FAQ {
    question: string;
    answer: string;
}

interface TimeZone {
    name: string;
    time: string;
}

interface Testimonial {
    name: string;
    location: string;
    text: string;
    image: string;
    rating: number;
}

// Simple Toast component
const Toast: React.FC<ToastProps> = ({ message, onClose }) => (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded shadow-lg z-50"
        role="alert" aria-live="assertive">
        {message}
        <button onClick={onClose} className="ml-2 text-gray-300 hover:text-white">✕</button>
    </div>
);


export default function App() {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [currentQuestion, setCurrentQuestion] = useState<number>(0);
    const [answers, setAnswers] = useState<(number | null)[]>(Array(8).fill(null));
    const [showResult, setShowResult] = useState<boolean>(false);
    const [activeFaq, setActiveFaq] = useState<number | null>(null);
    const [formState, setFormState] = useState<FormState>({ name: '', email: '', message: '' });
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
    const [scrolled, setScrolled] = useState<boolean>(false);
    const [isChatOpen, setIsChatOpen] = useState<boolean>(false);
    const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
    const [isTyping, setIsTyping] = useState<boolean>(false);
    const [activeService, setActiveService] = useState<number | null>(null);
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
    const [toast, setToast] = useState<string | null>(null);
    const chatRef = useRef<HTMLDivElement>(null);

    // Dark mode toggle effect
    useEffect(() => {
        const root = document.documentElement;
        if (isDarkMode) {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
    }, [isDarkMode]);

    // Show toast for 4 seconds when set
    useEffect(() => {
        if (toast) {
            const timer = setTimeout(() => setToast(null), 4000);
            return () => clearTimeout(timer);
        }
    }, [toast]);

    const { scrollYProgress } = useScroll();
    const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.9]);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isChatOpen && chatRef.current) {
            chatRef.current.scrollTop = chatRef.current.scrollHeight;
        }
    }, [chatMessages, isChatOpen]);

    useEffect(() => {
        const botMessage = (message, delay = 1000) => {
            setIsTyping(true);
            setTimeout(() => {
                setChatMessages(prev => [...prev, { text: message, sender: 'bot' }]);
                setIsTyping(false);
            }, delay);
        };

        if (chatMessages.length === 0 && isChatOpen) {
            botMessage("Olá! Sou o assistente virtual do Wellington Brito. Como posso ajudar você hoje?", 500);
        }
    }, [isChatOpen, chatMessages]);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const handleAnswer = (index, answer) => {
        const newAnswers = [...answers];
        newAnswers[index] = answer;
        setAnswers(newAnswers);
    };

    const nextQuestion = () => {
        if (currentQuestion < 7) setCurrentQuestion(prev => prev + 1);
    };

    const prevQuestion = () => {
        if (currentQuestion > 0) setCurrentQuestion(prev => prev - 1);
    };

    const calculateResult = () => {
        const score = answers.reduce((sum, ans) => sum + (ans || 0), 0);
        if (score <= 10) return "Seu bem-estar emocional está em um bom nível!";
        if (score <= 20) return "Você pode se beneficiar de algumas estratégias de autocuidado.";
        return "Recomendamos conversar com um profissional para apoio especializado.";
    };

    const submitTest = () => {
        if (answers.some(ans => ans === null)) {
            alert("Por favor, responda todas as perguntas.");
            return;
        }
        setShowResult(true);
    };

    const resetTest = () => {
        setAnswers(Array(8).fill(null));
        setCurrentQuestion(0);
        setShowResult(false);
    };

    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    const toggleService = (index) => {
        setActiveService(activeService === index ? null : index);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formState.name || !formState.email || !formState.message) {
            alert("Por favor, preencha todos os campos.");
            return;
        }
        setIsSubmitted(true);
        setFormState({ name: '', email: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 5000);
    };

    const handleChatSend = (e) => {
        e.preventDefault();
        if (!formState.message.trim()) return;

        const userMessage = formState.message;
        setChatMessages(prev => [...prev, { text: userMessage, sender: 'user' }]);
        setFormState(prev => ({ ...prev, message: '' }));

        // Respostas automáticas baseadas em palavras-chave
        setIsTyping(true);

        setTimeout(() => {
            if (userMessage.toLowerCase().includes('preço') || userMessage.toLowerCase().includes('valor')) {
                setChatMessages(prev => [...prev, { text: "Nossos valores são acessíveis e variam conforme o pacote de sessões. Para informações detalhadas, agende uma conversa inicial gratuita através do WhatsApp.", sender: 'bot' }]);
            } else if (userMessage.toLowerCase().includes('horário') || userMessage.toLowerCase().includes('disponível')) {
                setChatMessages(prev => [...prev, { text: "Atendemos de segunda a sábado, com horários flexíveis que se adaptam ao seu fuso horário, seja você no Brasil ou em qualquer parte do mundo.", sender: 'bot' }]);
            } else if (userMessage.toLowerCase().includes('primeira') || userMessage.toLowerCase().includes('início')) {
                setChatMessages(prev => [...prev, { text: "A primeira sessão é uma conversa inicial para entendermos suas necessidades e estabelecermos juntos o plano terapêutico. Podemos agendar essa conversa pelo WhatsApp.", sender: 'bot' }]);
            } else {
                setChatMessages(prev => [...prev, { text: "Obrigado pela sua mensagem! Para um atendimento mais completo, por favor entre em contato diretamente através do WhatsApp ou preencha o formulário no final da página.", sender: 'bot' }]);
            }
            setIsTyping(false);
        }, 1500);
    };

    const navItems = [
        { id: 'about', label: 'Sobre' },
        { id: 'services', label: 'Serviços' },
        { id: 'test', label: 'Teste Gratuito' },
        { id: 'faq', label: 'FAQ' },
        { id: 'contact', label: 'Contato' }
    ];

    const services = [
        {
            icon: <Shield className="w-8 h-8 text-blue-500" />,
            title: "Confidencialidade",
            description: "Total sigilo e privacidade em todos os atendimentos"
        },
        {
            icon: <Clock className="w-8 h-8 text-blue-500" />,
            title: "Horários Flexíveis",
            description: "Atendimento personalizado de acordo com sua disponibilidade"
        },
        {
            icon: <User className="w-8 h-8 text-blue-500" />,
            title: "Profissional Qualificado",
            description: "CRP registrado e experiência comprovada"
        },
        {
            icon: <Star className="w-8 h-8 text-blue-500" />,
            title: "Avaliações 5★",
            description: "Clientes satisfeitos com resultados transformadores"
        }
    ];

    const detailedServices = [
        {
            icon: <Heart className="w-10 h-10 text-blue-500" />,
            title: "Apoio Emocional",
            description: "Espaço seguro para expressar sentimentos, lidar com crises e desenvolver resiliência emocional com acompanhamento profissional.",
            details: "Ofereço escuta ativa e validação emocional para ajudar você a processar sentimentos complexos. Este serviço é ideal para momentos de crise, transições de vida ou quando você precisa de um suporte pontual para atravessar situações desafiadoras."
        },
        {
            icon: <Brain className="w-10 h-10 text-blue-500" />,
            title: "Terapia Personalizada",
            description: "Abordagens terapêuticas adaptadas às suas necessidades individuais, com foco em seus objetivos e estilo de vida.",
            details: "Desenvolvo um plano terapêutico personalizado considerando seu histórico, objetivos e contexto de vida. Utilizo técnicas da psicanálise, terapia cognitivo-comportamental e outras abordagens para proporcionar um tratamento eficaz e transformador."
        },
        {
            icon: <Calendar className="w-10 h-10 text-blue-500" />,
            title: "Agendamento Fácil",
            description: "Marque sua consulta em minutos, com horários disponíveis todos os dias e cancelamento flexível sem custos.",
            details: "Nosso sistema de agendamento online permite que você escolha o horário que melhor se adapta à sua rotina, com lembretes automáticos e opção de remarcar com facilidade. Atendemos em diversos fusos horários para brasileiros em qualquer parte do mundo."
        }
    ];

    const faqs = [
        {
            question: "Como funciona a psicoterapia online?",
            answer: "As sessões são realizadas através de plataformas seguras de videoconferência, com total privacidade e confidencialidade. Você participa de qualquer lugar com internet estável."
        },
        {
            question: "Atende brasileiros no Brasil e no exterior?",
            answer: "Sim! Atendemos brasileiros em todo o território nacional e também no exterior. Nossa experiência inclui compreensão das particularidades culturais e emocionais daqueles que vivem fora do Brasil, como saudade, adaptação a novos países e desafios de imigração."
        },
        {
            question: "Qual a duração das sessões?",
            answer: "As sessões têm duração de 50 minutos, com frequência semanal ou quinzenal, conforme acordo terapêutico estabelecido entre paciente e profissional."
        },
        {
            question: "Como é feito o pagamento?",
            answer: "Aceitamos transferência bancária, Pix e cartões de crédito/débito através de plataforma segura. Oferecemos opções de pacotes com descontos para compromissos mais longos."
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    const whatsappLink = "https://api.whatsapp.com/send/?phone=447512130453&text&type=phone_number&app_absent=0";
    const email = "wellington.brito@rocketmail.com";
    const heroText = "Ofereço psicoterapia online em português para brasileiros no Brasil e em qualquer lugar do mundo, com atendimento qualificado, confidencialidade total e horários flexíveis adaptados ao seu fuso horário.";

    const timeZones = [
        { name: "Brasil (São Paulo)", time: "14:30" },
        { name: "Europa (Lisboa)", time: "18:30" },
        { name: "Europa (Londres)", time: "17:30" },
        { name: "América (Nova York)", time: "12:30" },
        { name: "Japão (Tóquio)", time: "01:30" }
    ];

    const testimonials = [
        {
            name: "Ana L.",
            location: "São Paulo, Brasil",
            text: "As sessões com o Wellington me ajudaram a lidar com a ansiedade que estava afetando meu trabalho e relacionamentos. A abordagem dele é acolhedora e profissional.",
            image: "https://placehold.co/100x100/4F46E5/FFFFFF?text=AL",
            rating: 5
        },
        {
            name: "Ricardo M.",
            location: "Lisboa, Portugal",
            text: "Morando fora do Brasil há 3 anos, sentia muita dificuldade de adaptação e saudade. O Wellington entende perfeitamente os desafios de viver no exterior e me ajudou a encontrar meu equilíbrio.",
            image: "https://placehold.co/100x100/1F2937/FFFFFF?text=RM",
            rating: 5
        },
        {
            name: "Camila T.",
            location: "Nova York, EUA",
            text: "Encontrei no Wellington um profissional que compreende minha realidade como brasileira morando no exterior. As sessões online são tão eficazes quanto as presenciais e os horários flexíveis facilitam muito.",
            image: "https://placehold.co/100x100/059669/FFFFFF?text=CT",
            rating: 5
        }
    ];

    return (
        <div className="font-sans min-h-screen bg-gradient-to-b from-blue-50 to-white overflow-x-hidden">
            {/* WhatsApp Floating Button with Phone Icon */}
            <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 animate-pulse hover:animate-none"
                aria-label="WhatsApp"
            >
                <Phone className="w-7 h-7" />
            </a>

            {/* Chat Flutuante */}
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="fixed bottom-6 right-24 z-40"
            >
                <div className="relative">
                    {/* Bolhas de notificação */}
                    <div className="absolute -top-2 -right-2 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>

                    <button
                        onClick={() => setIsChatOpen(!isChatOpen)}
                        className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 flex items-center justify-center w-14 h-14"
                        aria-label={isChatOpen ? "Fechar chat" : "Abrir chat"}
                    >
                        {isChatOpen ? <X className="w-6 h-6" /> : <Bot className="w-6 h-6" />}
                    </button>

                    {/* Chat Window */}
                    <AnimatePresence>
                        {isChatOpen && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                className="absolute bottom-16 right-0 w-80 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
                            >
                                <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-4 text-white flex justify-between items-center">
                                    <div className="flex items-center space-x-2">
                                        <div className="bg-white p-1 rounded-full">
                                            <Brain className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <span className="font-bold">Assistente Wellington</span>
                                    </div>
                                    <button onClick={() => setIsChatOpen(false)} className="hover:bg-blue-500 p-1 rounded-full">
                                        <X className="w-4 h-4" />
                                    </button>
                                </div>

                                <div ref={chatRef} className="h-80 overflow-y-auto p-4 space-y-4 bg-gray-50">
                                    {chatMessages.map((msg, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                        >
                                            <div className={`max-w-[80%] rounded-2xl p-3 ${msg.sender === 'user'
                                                ? 'bg-blue-600 text-white rounded-br-none'
                                                : 'bg-white text-gray-800 rounded-bl-none shadow border border-gray-100'}`}>
                                                {msg.text}
                                            </div>
                                        </motion.div>
                                    ))}

                                    {isTyping && (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            className="flex justify-start"
                                        >
                                            <div className="bg-white rounded-2xl p-3 rounded-bl-none shadow border border-gray-100 flex space-x-1">
                                                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-pulse"></span>
                                                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-pulse delay-100"></span>
                                                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-pulse delay-200"></span>
                                            </div>
                                        </motion.div>
                                    )}
                                </div>

                                <form onSubmit={handleChatSend} className="p-3 border-t border-gray-100 bg-white">
                                    <div className="flex gap-2">
                                        <input
                                            type="text"
                                            value={formState.message}
                                            onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                            placeholder="Digite sua mensagem..."
                                            className="flex-1 p-2 px-4 border border-gray-200 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                                        />
                                        <button
                                            type="submit"
                                            disabled={!formState.message.trim()}
                                            className={`p-2 rounded-full transition-colors ${formState.message.trim()
                                                ? 'bg-blue-600 hover:bg-blue-700 text-white'
                                                : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
                                        >
                                            <Send className="w-5 h-5" />
                                        </button>
                                    </div>
                                </form>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>

            {/* Header */}
            <motion.header
                style={{ opacity: headerOpacity }}
                className={`fixed w-full z-30 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}
            >
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center space-x-2"
                    >
                        <div className="bg-blue-600 p-2 rounded-lg">
                            <Brain className="w-6 h-6 text-white" />
                        </div>
                        <span className={`text-xl font-bold ${scrolled ? 'text-gray-800' : 'text-white'} transition-colors`}>Wellington Brito PSI</span>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        {navItems.map((item) => (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                className={`font-medium transition-colors ${scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'}`}
                            >
                                {item.label}
                            </a>
                        ))}
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center space-x-2 px-4 py-2 rounded-full font-medium transition-all ${scrolled ? 'bg-green-500 hover:bg-green-600 text-white' : 'bg-white hover:bg-gray-100 text-green-600'}`}
                        >
                            <Phone className="w-4 h-4" />
                            <span>WhatsApp</span>
                        </a>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className={`md:hidden ${scrolled ? 'text-gray-800' : 'text-white'}`}
                        aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t mt-2 pb-4"
                    >
                        <div className="container mx-auto px-4 py-4 space-y-4">
                            {navItems.map((item) => (
                                <a
                                    key={item.id}
                                    href={`#${item.id}`}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="block py-2 text-gray-800 font-medium hover:text-blue-600 transition-colors"
                                >
                                    {item.label}
                                </a>
                            ))}
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center space-x-2 w-full py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition-colors"
                            >
                                <Phone className="w-4 h-4" />
                                <span>WhatsApp</span>
                            </a>
                        </div>
                    </motion.div>
                )}
            </motion.header>

            {/* Hero Section */}
            <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-r from-blue-50 to-indigo-50 relative overflow-hidden">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                    <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                    <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                </div>

                <div className="container mx-auto px-4 text-center relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
                    >
                        Cuidar da sua mente <span className="text-blue-600">é essencial</span> para viver bem
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-10"
                    >
                        Wellington Brito | CRP 02/15189
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="bg-white rounded-2xl shadow-xl p-6 md:p-8 max-w-2xl mx-auto mb-10 border border-gray-100"
                    >
                        <p className="text-lg text-gray-700 mb-6 text-left">
                            {heroText}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="#test"
                                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl transition-colors flex items-center justify-center transform hover:scale-105"
                            >
                                <MessageSquare className="mr-2 h-5 w-5" />
                                Teste Gratuito
                            </a>
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-xl transition-colors flex items-center justify-center transform hover:scale-105"
                            >
                                <Phone className="mr-2 h-5 w-5" />
                                Agendar Consulta
                            </a>
                        </div>
                    </motion.div>

                    {/* Indicador de rolagem */}
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="mt-8 mx-auto w-8 h-12 border-2 border-blue-600 rounded-full flex items-center justify-center text-blue-600"
                    >
                        <ChevronDown className="w-6 h-6" />
                    </motion.div>
                </div>
            </section>

            {/* Services Overview */}
            <section id="services" className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <motion.h2
                            variants={itemVariants}
                            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                        >
                            Por que escolher a Wellington Brito Psi?
                        </motion.h2>
                        <motion.p
                            variants={itemVariants}
                            className="text-lg text-gray-600"
                        >
                            Oferecemos um atendimento completo com foco no seu bem-estar emocional
                        </motion.p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 text-center transition-all duration-300 border border-gray-100 hover:shadow-lg hover:scale-105 relative overflow-hidden group"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-5 transition-opacity"></div>
                                <div className="relative z-10">
                                    <div className="flex justify-center mb-6">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-white transition-colors">{service.title}</h3>
                                    <p className="text-gray-600 group-hover:text-white transition-colors">{service.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Scroll Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 h-1 bg-blue-600 z-50" // Changed bg-primary to bg-blue-600 for consistency
                style={{ scaleX: scrollYProgress }}
            />

            {/* Video Platforms Section */}
            <section className="py-16 bg-gradient-to-b from-white to-slate-50">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-3xl mx-auto mb-12"
                    >
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                            Atendimento nas principais plataformas
                        </h3>
                        <p className="text-lg text-gray-600">
                            Escolha a plataforma de videochamada que você preferir para suas sessões online
                        </p>
                    </motion.div>

                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 max-w-4xl mx-auto">
                        {/* Google Meet */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="flex flex-col items-center group"
                        >
                            <div className="w-20 h-20 bg-white rounded-2xl shadow-md flex items-center justify-center mb-3 group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                                <svg className="w-12 h-12" viewBox="0 0 87.5 72" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Logo do Google Meet">
                                    <path d="m49.5 36l8.53 9.75 11.47 7.33 2-17.02-2-16.64-11.69 6.44z" fill="#00832d" />
                                    <path d="m0 51.5v-31c0-3.87 3.13-7 7-7h33.5v45h-33.5c-3.87 0-7-3.13-7-7z" fill="#0066da" />
                                    <path d="m40.5 58.5v-45l15.25-6.5 13.25-4.5v66l-13.25-4.5z" fill="#e94235" />
                                    <path d="m0 20.5v-2.5l20-15h20.5v10.5z" fill="#2684fc" />
                                    <path d="m69 7l-15.25 6.5-13.25 4.5v-10.5l10-7.5h1.5c3.87 0 7 3.13 7 7v0.5z" fill="#00ac47" />
                                    <path d="m40.5 58.5v10.5h-20.5l-20-15v-2.5z" fill="#00ac47" />
                                    <path d="m69 65v0.5c0 3.87-3.13 7-7 7h-1.5l-10-7.5v-10.5l13.25 4.5z" fill="#ffba00" />
                                </svg>
                            </div>
                            <span className="text-sm font-medium text-gray-700">Google Meet</span>
                        </motion.div>

                        {/* Zoom */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="flex flex-col items-center group"
                        >
                            <div className="w-20 h-20 bg-white rounded-2xl shadow-md flex items-center justify-center mb-3 group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                                <svg className="w-12 h-12" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Logo do Zoom">
                                    <path fill="#2196F3" d="M41,42H13c-2.2,0-4-1.8-4-4V18c0-2.2,1.8-4,4-4h28c2.2,0,4,1.8,4,4v20C45,40.2,43.2,42,41,42z" />
                                    <path fill="#FFF" d="M35 36L35 26 30 29 30 23 18 23 18 33 23 30 23 36z" />
                                </svg>
                            </div>
                            <span className="text-sm font-medium text-gray-700">Zoom</span>
                        </motion.div>

                        {/* WhatsApp Video */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="flex flex-col items-center group"
                        >
                            <div className="w-20 h-20 bg-white rounded-2xl shadow-md flex items-center justify-center mb-3 group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                                <svg className="w-12 h-12" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Logo do WhatsApp">
                                    <path fill="#25D366" d="M24,4C13,4,4,13,4,24c0,3.4,0.8,6.6,2.3,9.5L4,44l10.7-2.3C17.6,43.2,20.7,44,24,44c11,0,20-9,20-20S35,4,24,4z" />
                                    <path fill="#FFF" d="M35.2,32.5c-0.5,1.4-2.9,2.6-4.1,2.7c-1.1,0.1-2.1,0.5-7.1-1.5c-6-2.4-9.9-8.5-10.2-8.9c-0.3-0.4-2.4-3.2-2.4-6.1s1.5-4.3,2.1-4.9c0.5-0.6,1.1-0.7,1.5-0.7c0.4,0,0.7,0,1,0c0.3,0,0.8-0.1,1.2,0.9c0.5,1,1.6,3.9,1.7,4.2c0.2,0.3,0.3,0.6,0.1,1c-0.1,0.4-0.3,0.6-0.5,0.9c-0.3,0.3-0.6,0.6-0.8,0.8c-0.3,0.3-0.6,0.6-0.2,1.1c0.3,0.6,1.4,2.3,3.1,3.7c2.1,1.8,3.9,2.4,4.5,2.6c0.5,0.2,0.8,0.2,1.1-0.1c0.3-0.4,1.2-1.4,1.5-1.9c0.4-0.5,0.7-0.4,1.2-0.2c0.5,0.2,3,1.4,3.5,1.7c0.5,0.2,0.9,0.4,1,0.6C35.7,30.3,35.7,31.1,35.2,32.5z" />
                                </svg>
                            </div>
                            <span className="text-sm font-medium text-gray-700">WhatsApp</span>
                        </motion.div>

                        {/* Microsoft Teams */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-col items-center group"
                        >
                            <div className="w-20 h-20 bg-white rounded-2xl shadow-md flex items-center justify-center mb-3 group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                                <svg className="w-12 h-12" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Logo do Microsoft Teams">
                                    <path fill="#5059C9" d="M44,24c0,11-9,20-20,20S4,35,4,24S13,4,24,4S44,13,44,24z" />
                                    <path fill="#FFF" d="M25.5,18h-7C17.7,18,17,18.7,17,19.5v9c0,0.8,0.7,1.5,1.5,1.5h7c0.8,0,1.5-0.7,1.5-1.5v-9C27,18.7,26.3,18,25.5,18z M31,18h-2v12h2c0.8,0,1.5-0.7,1.5-1.5v-9C32.5,18.7,31.8,18,31,18z M22,14c-1.7,0-3,1.3-3,3s1.3,3,3,3s3-1.3,3-3S23.7,14,22,14z" />
                                </svg>
                            </div>
                            <span className="text-sm font-medium text-gray-700">Teams</span>
                        </motion.div>

                        {/* Skype */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="flex flex-col items-center group"
                        >
                            <div className="w-20 h-20 bg-white rounded-2xl shadow-md flex items-center justify-center mb-3 group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                                <svg className="w-12 h-12" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Logo do Skype">
                                    <path fill="#00AFF0" d="M44,24c0,11-9,20-20,20S4,35,4,24S13,4,24,4S44,13,44,24z" />
                                    <path fill="#FFF" d="M32.5,27.5c0,3-2.5,5.5-5.5,5.5c-0.9,0-1.7-0.2-2.4-0.6c-0.8,0.4-1.7,0.6-2.6,0.6c-3,0-5.5-2.5-5.5-5.5c0-0.9,0.2-1.8,0.6-2.6c-0.4-0.7-0.6-1.5-0.6-2.4c0-3,2.5-5.5,5.5-5.5c0.9,0,1.8,0.2,2.6,0.6c0.7-0.4,1.5-0.6,2.4-0.6c3,0,5.5,2.5,5.5,5.5c0,0.9-0.2,1.7-0.6,2.4C32.3,25.7,32.5,26.6,32.5,27.5z M27,20c-2.2,0-4,1.8-4,4s1.8,4,4,4s4-1.8,4-4S29.2,20,27,20z" />
                                </svg>
                            </div>
                            <span className="text-sm font-medium text-gray-700">Skype</span>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="text-center mt-8"
                    >
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Flexibilidade total para você escolher a plataforma que melhor se adapta às suas necessidades e preferências
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="bg-gradient-to-br from-blue-400 to-indigo-600 rounded-2xl w-full h-96 md:h-[400px] shadow-xl overflow-hidden flex items-center justify-center">
                                <img
                                    src="/wellington-brito-about.jpg"
                                    alt="Wellington Brito - Psicólogo Clínico"
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.parentElement.innerHTML = `
                                            <div class="text-center text-white p-8">
                                                <div class="bg-white w-24 h-24 rounded-full flex items-center justify-center mb-6 mx-auto">
                                                    <svg class="w-16 h-16 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                    </svg>
                                                </div>
                                                <h3 class="text-2xl font-bold mb-2">Wellington Brito</h3>
                                                <p class="text-xl font-semibold mb-1">CRP 02/15189</p>
                                                <p class="opacity-90">Psicólogo Clínico</p>
                                            </div>
                                        `;
                                    }}
                                    loading="lazy"
                                />
                            </div>
                            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-purple-200 rounded-full opacity-40"></div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                Sobre Mim
                            </h2>
                            <p className="text-lg text-gray-700 mb-6">
                                Sou Wellington Brito, Psicólogo Clínico (CRP 02/15189), especializado em atendimentos individuais e fundamentado na abordagem psicanalítica. Minha atuação é voltada para o cuidado integral da saúde mental, oferecendo um espaço de escuta qualificada, ética e acolhedora.
                            </p>

                            <div className="bg-blue-50 rounded-xl p-6 mb-8 border-l-4 border-blue-500">
                                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                                    <Brain className="mr-3 text-blue-600" />
                                    Meu Compromisso com a Psicanálise
                                </h3>
                                <p className="text-gray-700">
                                    Na clínica, trabalho com psicoterapia psicanalítica, um processo que promove autoconhecimento, elaboração de conflitos internos e a cura pela palavra. A psicanálise permite compreender as origens do sofrimento psíquico, indo além do alívio imediato de sintomas, e possibilita transformações profundas e duradouras na forma de viver e se relacionar.
                                </p>
                            </div>

                            <p className="text-gray-700 mb-6">
                                Atendo adultos e jovens em questões como ansiedade, depressão, angústia existencial, relacionamentos, autoestima, luto, estresse e dificuldades emocionais diversas. Cada encontro é construído como um espaço seguro para que o sujeito possa se ouvir, ressignificar experiências e desenvolver novos caminhos em direção a uma vida mais autêntica e equilibrada.
                            </p>

                            <div className="flex items-center space-x-4 bg-green-50 p-4 rounded-lg">
                                <Shield className="w-8 h-8 text-green-600" />
                                <div>
                                    <p className="font-bold text-gray-900">Psicólogo com CRP Ativo</p>
                                    <p className="text-gray-700">Atendimento profissional e ético, seguindo todas as diretrizes do Conselho Federal de Psicologia.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <div className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full mb-4 font-medium">
                            <HelpCircle className="inline mr-1 h-4 w-4" />
                            Perguntas Frequentes
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Tire suas dúvidas
                        </h2>
                        <p className="text-lg text-gray-600">
                            Encontre respostas para as perguntas mais comuns sobre nossos serviços
                        </p>
                    </motion.div>

                    <div className="max-w-3xl mx-auto">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`mb-4 border ${activeFaq === index ? 'border-blue-500' : 'border-gray-200'} rounded-xl overflow-hidden`}
                            >
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className={`w-full flex justify-between items-center p-6 text-left ${activeFaq === index ? 'bg-blue-50' : 'bg-gray-50 hover:bg-gray-100'} transition-colors`}
                                    aria-expanded={activeFaq === index}
                                    aria-controls={`faq-answer-${index}`}
                                >
                                    <span className={`text-lg font-medium ${activeFaq === index ? 'text-blue-700' : 'text-gray-900'}`}>{faq.question}</span>
                                    {activeFaq === index ? (
                                        <ChevronUp className="w-6 h-6 text-blue-600" />
                                    ) : (
                                        <ChevronDown className="w-6 h-6 text-gray-400" />
                                    )}
                                </button>
                                <AnimatePresence>
                                    {activeFaq === index && (
                                        <motion.div
                                            id={`faq-answer-${index}`}
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="px-6 pb-6 pt-2 text-gray-600"
                                        >
                                            {faq.answer}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Free Test Section */}
            <section id="test" className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <div className="inline-block bg-green-100 text-green-800 px-4 py-1 rounded-full mb-4 font-medium">
                            100% Gratuito • Resultado Imediato • Totalmente Anônimo
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Teste Gratuito de Necessidade de Psicoterapia
                        </h2>
                        <p className="text-lg text-gray-600">
                            Este teste rápido e confidencial ajuda a avaliar seu estado emocional atual e identificar se você pode se beneficiar de apoio psicológico profissional.
                        </p>
                    </motion.div>

                    {!showResult ? (
                        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white">
                                <div className="flex justify-between items-center">
                                    <span className="font-bold">Pergunta {currentQuestion + 1} de 8</span>
                                    <div className="flex space-x-1" role="progressbar" aria-valuenow={currentQuestion + 1} aria-valuemin="1" aria-valuemax="8" aria-label="Progresso do teste">
                                        {[...Array(8)].map((_, index) => (
                                            <div
                                                key={index}
                                                className={`w-2 h-2 rounded-full ${index <= currentQuestion ? 'bg-white' : 'bg-blue-200'}`}
                                                aria-label={`Pergunta ${index + 1}`}
                                            ></div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 md:p-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-6" id={`question-${currentQuestion}`}>
                                    {currentQuestion + 1}. {[
                                        "Nas últimas 2 semanas, com que frequência você se sentiu triste ou deprimido?",
                                        "Você tem sentido dificuldade em concentrar-se em tarefas diárias?",
                                        "Com que frequência você se sente ansioso ou preocupado excessivamente?",
                                        "Você tem tido dificuldade para dormir (insônia ou sono excessivo)?",
                                        "Você sente que perdeu o interesse em atividades que antes gostava?",
                                        "Você se sente sobrecarregado(a) com as responsabilidades diárias?",
                                        "Você tem sentido dificuldade em manter relacionamentos saudáveis?",
                                        "Você sente que sua autoestima está baixa ultimamente?"
                                    ][currentQuestion]}
                                </h3>

                                <div className="space-y-4 mb-8" role="radiogroup" aria-labelledby={`question-${currentQuestion}`}>
                                    {[
                                        ["Nunca", 0],
                                        ["Alguns dias / Raramente", 1],
                                        ["Mais da metade dos dias / Frequentemente", 2],
                                        ["Quase todos os dias / Sempre", 3]
                                    ].map(([text, value]) => (
                                        <button
                                            key={text}
                                            onClick={() => handleAnswer(currentQuestion, value)}
                                            className={`w-full text-left p-4 rounded-xl border transition-all ${answers[currentQuestion] === value
                                                ? "border-blue-500 bg-blue-50 ring-2 ring-blue-500"
                                                : "border-gray-200 hover:border-blue-300 hover:bg-blue-50"
                                                }`}
                                            role="radio"
                                            aria-checked={answers[currentQuestion] === value}
                                            aria-label={text}
                                        >
                                            {text}
                                        </button>
                                    ))}
                                </div>

                                <div className="flex justify-between pt-4 border-t border-gray-100">
                                    <button
                                        onClick={prevQuestion}
                                        disabled={currentQuestion === 0}
                                        className={`px-6 py-3 rounded-xl font-medium flex items-center ${currentQuestion === 0
                                            ? "text-gray-400 cursor-not-allowed"
                                            : "text-blue-600 hover:bg-blue-50"
                                            }`}
                                        aria-label="Pergunta anterior"
                                    >
                                        <ArrowLeft className="mr-2 h-4 w-4" />
                                        Anterior
                                    </button>

                                    {currentQuestion < 7 ? (
                                        <button
                                            onClick={nextQuestion}
                                            disabled={answers[currentQuestion] === null}
                                            className={`px-6 py-3 rounded-xl font-medium flex items-center ${answers[currentQuestion] === null
                                                ? "bg-gray-300 cursor-not-allowed"
                                                : "bg-blue-600 text-white hover:bg-blue-700"
                                                }`}
                                            aria-label="Próxima pergunta"
                                        >
                                            Próxima
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </button>
                                    ) : (
                                        <button
                                            onClick={submitTest}
                                            className="px-6 py-3 bg-green-600 text-white rounded-xl font-medium hover:bg-green-700 transition-colors flex items-center"
                                            aria-label="Ver resultado do teste"
                                        >
                                            Ver Resultado
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 p-8 text-center"
                            role="region"
                            aria-labelledby="test-result-heading"
                        >
                            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Check className="w-8 h-8 text-green-600" />
                            </div>
                            <h3 id="test-result-heading" className="text-2xl font-bold text-gray-900 mb-4">Resultado do Teste</h3>
                            <p className="text-lg text-gray-700 mb-6">{calculateResult()}</p>

                            <div className="bg-blue-50 rounded-xl p-6 mb-8">
                                <p className="text-gray-700 italic">
                                    Este teste oferece uma avaliação preliminar e não substitui uma consulta com um profissional de saúde mental. Recomendamos agendar uma sessão para uma avaliação completa e personalizada.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button
                                    onClick={resetTest}
                                    className="px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors"
                                    aria-label="Fazer um novo teste"
                                >
                                    Fazer Novo Teste
                                </button>
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-3 bg-green-600 text-white rounded-xl font-medium hover:bg-green-700 transition-colors flex items-center justify-center"
                                    aria-label="Agendar consulta via WhatsApp"
                                >
                                    <Phone className="mr-2 h-5 w-5" />
                                    Agendar Consulta
                                </a>
                            </div>
                        </motion.div>
                    )}
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 bg-gradient-to-b from-purple-50 to-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <div className="inline-block bg-yellow-100 text-yellow-800 px-4 py-1 rounded-full mb-4 font-medium">
                            <Mail className="inline mr-1 h-4 w-4" />
                            Entre em Contato
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Vamos conversar
                        </h2>
                        <p className="text-lg text-gray-600">
                            Envie sua mensagem ou agende uma conversa inicial sem compromisso
                        </p>
                    </motion.div>

                    <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                        {isSubmitted ? (
                            <div className="p-12 text-center" role="status" aria-live="polite">
                                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Check className="w-8 h-8 text-green-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Mensagem Enviada!</h3>
                                <p className="text-gray-600 mb-6">
                                    Obrigado por entrar em contato! Responderemos sua mensagem em breve.
                                </p>
                                <button
                                    onClick={() => setIsSubmitted(false)}
                                    className="px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors"
                                    aria-label="Enviar nova mensagem"
                                >
                                    Enviar Nova Mensagem
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="p-6 md:p-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Seu nome</label>
                                        <div className="relative">
                                            <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                                            <input
                                                id="name"
                                                type="text"
                                                value={formState.name}
                                                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                                                placeholder="Digite seu nome completo"
                                                required
                                                aria-required="true"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Seu e-mail</label>
                                        <div className="relative">
                                            <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                                            <input
                                                id="email"
                                                type="email"
                                                value={formState.email}
                                                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                                                placeholder="seuemail@dominio.com"
                                                required
                                                aria-required="true"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Escreva sua mensagem</label>
                                    <div className="relative">
                                        <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                                        <textarea
                                            id="message"
                                            value={formState.message}
                                            onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                            rows="5"
                                            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition resize-none"
                                            placeholder="Como posso ajudar você hoje?"
                                            required
                                            aria-required="true"
                                        ></textarea>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold py-4 px-6 rounded-xl hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 flex items-center justify-center shadow-lg"
                                    aria-label="Enviar mensagem de contato"
                                >
                                    <Send className="mr-2 h-5 w-5" />
                                    Enviar Mensagem
                                </button>

                                <p className="mt-4 text-sm text-gray-500 text-center">
                                    Respeitamos sua privacidade. Suas informações são mantidas em total sigilo.
                                </p>
                            </form>
                        )}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="mt-12 text-center"
                    >
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center bg-green-600 text-white font-bold py-4 px-8 rounded-xl hover:bg-green-700 transition-colors shadow-lg"
                            aria-label="Fale diretamente pelo WhatsApp"
                        >
                            <Phone className="mr-3 h-6 w-6" />
                            <span className="text-lg">Fale diretamente pelo WhatsApp</span>
                        </a>
                        <p className="mt-3 text-gray-600 text-lg font-medium">
                            Resposta rápida e atendimento personalizado para brasileiros no Brasil e no exterior
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 bg-gradient-to-b from-white to-indigo-50">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <div className="inline-block bg-yellow-100 text-yellow-800 px-4 py-1 rounded-full mb-4 font-medium">
                            <Star className="inline mr-1 h-4 w-4" />
                            Depoimentos
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            O que meus clientes dizem
                        </h2>
                        <p className="text-lg text-gray-600">
                            Experiências reais de brasileiros atendidos no Brasil e no exterior
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300"
                                role="article"
                                aria-labelledby={`testimonial-name-${index}`}
                            >
                                <div className="flex mb-4" role="img" aria-label={`${testimonial.rating} estrelas`}>
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" aria-hidden="true" />
                                    ))}
                                </div>
                                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                                <div className="flex items-center">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-gray-200"
                                        loading="lazy"
                                    />
                                    <div>
                                        <p id={`testimonial-name-${index}`} className="font-bold text-gray-900">{testimonial.name}</p>
                                        <p className="text-sm text-blue-600">{testimonial.location}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <div className="flex items-center space-x-2 mb-4">
                                <div className="bg-blue-600 p-2 rounded-lg">
                                    <Brain className="w-6 h-6 text-white" />
                                </div>
                                <span className="text-xl font-bold">Wellington Brito PSI</span>
                            </div>
                            <p className="text-gray-300 mb-4">
                                Cuidando da sua saúde mental com profissionalismo, empatia e confidencialidade total. Psicoterapia online de qualidade para transformar sua vida.
                            </p>
                            <div className="flex space-x-4">
                                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full transition-colors shadow-lg hover:scale-110" aria-label="Entrar em contato via WhatsApp">
                                    <Phone className="w-6 h-6" />
                                </a>
                                <button onClick={() => setIsChatOpen(true)} className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-colors shadow-lg hover:scale-110" aria-label="Abrir chat com assistente virtual">
                                    <Bot className="w-6 h-6" />
                                </button>
                                <button onClick={() => setIsDarkMode(!isDarkMode)} className="bg-gray-700 hover:bg-gray-600 text-white p-3 rounded-full transition-colors shadow-lg hover:scale-110" aria-label="Alternar modo escuro">
                                    {isDarkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
                                </button>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold mb-4 flex items-center">
                                <MapPin className="mr-2 h-5 w-5 text-blue-400" />
                                Serviços
                            </h3>
                            <ul className="space-y-2 text-gray-300">
                                <li>Psicoterapia Individual</li>
                                <li>Apoio Emocional</li>
                                <li>Orientação Profissional</li>
                                <li>Atendimento no Brasil e Exterior</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold mb-4 flex items-center">
                                <HelpCircle className="mr-2 h-5 w-5 text-blue-400" />
                                Recursos
                            </h3>
                            <ul className="space-y-2 text-gray-300">
                                <li><a href="#test" className="hover:text-white transition-colors">Teste Gratuito</a></li>
                                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
                                <li><a href="#about" className="hover:text-white transition-colors">Sobre</a></li>
                                <li><a href="#contact" className="hover:text-white transition-colors">Contato</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold mb-4">Contato</h3>
                            <div className="bg-gray-800 rounded-xl p-4">
                                <p className="font-bold text-blue-400 mb-2">CRP: 02/15189</p>
                                <p className="text-sm text-gray-300 mb-3">
                                    Atendimento psicológico online realizado por profissional registrado no Conselho Federal de Psicologia.
                                </p>
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-3 inline-flex items-center text-green-400 hover:text-green-300 transition-colors"
                                    aria-label="Ligar para o número de WhatsApp +44 7512 130453"
                                >
                                    <Phone className="w-4 h-4 mr-2" />
                                    <span>+44 7512 130453</span>
                                </a>
                                <br />
                                <a
                                    href={`mailto:${email}`}
                                    className="mt-2 inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                                    aria-label={`Enviar e-mail para ${email}`}
                                >
                                    <Mail className="w-4 h-4 mr-2" />
                                    <span>{email}</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
                        <p>© 2025 Wellington Brito. Todos os direitos reservados.</p>
                        <p className="mt-1">CRP: 02/15189 | Psicoterapia online para brasileiros no Brasil e no exterior</p>
                    </div>
                </div>
            </footer>
            {/* Toast Notification */}
            {toast && <Toast message={toast} onClose={() => setToast(null)} />}
        </div>
    );
}
