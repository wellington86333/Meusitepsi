import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight, ArrowLeft, Phone, AlertTriangle } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const FreeTest = () => {
    const { t } = useLanguage();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState(Array(8).fill(null));
    const [showResult, setShowResult] = useState(false);

    const questions = t.freeTest.questions;
    const options = t.freeTest.options;

    const handleAnswer = (index) => {
        const newAnswers = [...answers];
        newAnswers[currentQuestion] = index;
        setAnswers(newAnswers);

        if (currentQuestion < questions.length - 1) {
            setTimeout(() => setCurrentQuestion(prev => prev + 1), 300);
        } else {
            setTimeout(() => setShowResult(true), 300);
        }
    };

    const calculateScore = () => {
        return answers.reduce((a, b) => a + b, 0);
    };

    const getResult = () => {
        const score = calculateScore();
        if (score <= 7) return t.freeTest.results[0];
        if (score <= 14) return t.freeTest.results[1];
        if (score <= 21) return t.freeTest.results[2];
        return t.freeTest.results[3];
    };

    const resetTest = () => {
        setAnswers(Array(8).fill(null));
        setCurrentQuestion(0);
        setShowResult(false);
    };

    return (
        <section id="test" className="py-24 bg-bg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 transform origin-top-right -z-10"></div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-block py-1 px-3 border border-secondary/30 rounded-full text-secondary text-xs font-bold tracking-widest uppercase mb-4"
                    >
                        {t.freeTest.badge}
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl sm:text-5xl font-display font-black text-primary mb-6"
                    >
                        {t.freeTest.title} <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">{t.freeTest.titleHighlight}</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-textSecondary font-sans max-w-2xl mx-auto"
                    >
                        {t.freeTest.description}
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-surface border-2 border-primary shadow-[8px_8px_0px_0px_rgba(26,26,26,1)] p-8 md:p-12 relative"
                >
                    {!showResult ? (
                        <>
                            <div className="mb-8">
                                <div className="flex justify-between text-sm font-bold text-primary mb-2">
                                    <span>{t.freeTest.questionLabel} {currentQuestion + 1}</span>
                                    <span>{currentQuestion + 1} {t.freeTest.of} {questions.length}</span>
                                </div>
                                <div className="w-full bg-primary/10 h-2 rounded-full overflow-hidden">
                                    <motion.div
                                        className="bg-secondary h-full"
                                        initial={{ width: 0 }}
                                        animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                                        transition={{ duration: 0.5 }}
                                    />
                                </div>
                            </div>

                            <AnimatePresence mode='wait'>
                                <motion.div
                                    key={currentQuestion}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <h3 className="text-2xl font-display font-bold text-primary mb-8 min-h-[80px]">
                                        {questions[currentQuestion]}
                                    </h3>

                                    <div className="space-y-3">
                                        {options.map((option, index) => (
                                            <button
                                                key={index}
                                                onClick={() => handleAnswer(index)}
                                                className={`w-full text-left p-4 border-2 transition-all duration-200 font-sans font-medium flex items-center justify-between group ${answers[currentQuestion] === index
                                                    ? 'border-secondary bg-secondary/10 text-primary'
                                                    : 'border-primary/10 hover:border-primary hover:bg-primary/5 text-textSecondary hover:text-primary'
                                                    }`}
                                            >
                                                {option}
                                                {answers[currentQuestion] === index && (
                                                    <Check className="text-secondary w-5 h-5" />
                                                )}
                                            </button>
                                        ))}
                                    </div>
                                </motion.div>
                            </AnimatePresence>

                            <div className="flex justify-between mt-8 pt-6 border-t border-primary/10">
                                <button
                                    onClick={() => setCurrentQuestion(prev => Math.max(0, prev - 1))}
                                    disabled={currentQuestion === 0}
                                    className={`flex items-center gap-2 font-bold text-sm uppercase tracking-wider transition-colors ${currentQuestion === 0 ? 'text-primary/30 cursor-not-allowed' : 'text-primary hover:text-secondary'
                                        }`}
                                >
                                    <ArrowLeft className="w-4 h-4" /> {t.freeTest.previous}
                                </button>
                                {currentQuestion === questions.length - 1 && answers[currentQuestion] !== null && (
                                    <button
                                        onClick={() => setShowResult(true)}
                                        className="flex items-center gap-2 font-bold text-sm uppercase tracking-wider text-primary hover:text-secondary transition-colors"
                                    >
                                        {t.freeTest.viewResult} <ArrowRight className="w-4 h-4" />
                                    </button>
                                )}
                            </div>
                        </>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-8"
                        >
                            <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <AlertTriangle className="w-10 h-10 text-secondary" />
                            </div>
                            <h3 className="text-3xl font-display font-black text-primary mb-4">
                                {t.freeTest.resultTitle}
                            </h3>
                            <p className="text-xl text-textSecondary font-sans mb-8 leading-relaxed">
                                {getResult()}
                            </p>

                            <div className="bg-primary/5 p-4 rounded-lg mb-8 text-sm text-textSecondary italic">
                                {t.freeTest.disclaimer}
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button
                                    onClick={resetTest}
                                    className="px-8 py-3 border-2 border-primary text-primary font-bold uppercase tracking-wider hover:bg-primary hover:text-bg transition-all"
                                >
                                    {t.freeTest.retakeTest}
                                </button>
                                <a
                                    href="#contact"
                                    className="px-8 py-3 bg-primary text-bg font-bold uppercase tracking-wider hover:bg-primary/90 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] hover:translate-y-1 hover:shadow-none flex items-center justify-center gap-2"
                                >
                                    <Phone className="w-4 h-4" /> {t.freeTest.bookAppointment}
                                </a>
                            </div>
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default FreeTest;
