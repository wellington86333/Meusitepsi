import React, { useState, useEffect, useRef } from 'react';
import {
    Menu, X, Phone, Mail, User, Shield, Clock, Star, MessageSquare,
    ChevronDown, ChevronUp, Send, Check, Brain, Heart, Calendar,
    HelpCircle, MapPin, ArrowRight, ArrowLeft, Loader, Globe, Bot,
    ClockIcon, Sparkles, MessageCircle
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

export default function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState(Array(8).fill(null));
    const [showResult, setShowResult] = useState(false);
    const [activeFaq, setActiveFaq] = useState(null);
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [chatMessages, setChatMessages] = useState([]);
    const [isTyping, setIsTyping] = useState(false);
    const [activeService, setActiveService] = useState(null);
    const chatRef = useRef(null);

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

            {/* Resto do código continua... */}
            {/* Por questões de espaço, vou continuar na próxima parte */}
        </div>
    );
}
