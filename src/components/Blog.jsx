import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Brain, Heart } from 'lucide-react';

const Blog = () => {
    const posts = [
        {
            title: "Understanding Anxiety",
            excerpt: "Why do we feel anxious? Explore the root causes and modern coping mechanisms for a balanced life.",
            category: "Mental Health",
            icon: <Brain className="w-6 h-6" />,
            image: "https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Dreams & Daily Stress",
            excerpt: "How your subconscious processes daily events through dreams. A Freudian perspective on modern stress.",
            category: "Psychoanalysis",
            icon: <BookOpen className="w-6 h-6" />,
            image: "https://images.unsplash.com/photo-1515895309288-a3a716cd60de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "The Benefits of Therapy",
            excerpt: "Breaking the stigma. Why talking to a professional is the ultimate act of self-care and strength.",
            category: "Wellness",
            icon: <Heart className="w-6 h-6" />,
            image: "https://images.unsplash.com/photo-1527137342181-19aab11a8ee8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        }
    ];

    return (
        <section id="blog" className="py-24 bg-bg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16 max-w-3xl">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-secondary font-bold tracking-widest uppercase text-sm"
                    >
                        Insights & Recursos
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl sm:text-5xl font-display font-black text-primary mt-4 mb-8"
                    >
                        A MODERN GUIDE TO <br /> MENTAL HEALTH
                    </motion.h2>

                    <motion.blockquote
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl font-serif italic text-textSecondary border-l-4 border-accent pl-6 py-2"
                    >
                        "Unexpressed emotions will never die. They are buried alive and will come forth later in uglier ways."
                        <footer className="text-sm font-sans not-italic mt-2 text-primary/60">— Sigmund Freud</footer>
                    </motion.blockquote>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <motion.article
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            whileHover={{ y: -10 }}
                            className="group bg-surface rounded-none border border-primary/10 overflow-hidden hover:shadow-neu transition-all duration-300"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10"></div>
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-4 right-4 bg-surface p-2 rounded-full z-20 text-primary">
                                    {post.icon}
                                </div>
                            </div>
                            <div className="p-8">
                                <span className="text-xs font-bold text-accent uppercase tracking-wider">{post.category}</span>
                                <h3 className="text-xl font-display font-bold text-primary mt-3 mb-3 group-hover:text-secondary transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-textSecondary mb-6 line-clamp-3">
                                    {post.excerpt}
                                </p>
                                <a href="#" className="inline-flex items-center text-primary font-bold text-sm hover:gap-2 transition-all">
                                    Ler Artigo <ArrowRight className="ml-1 w-4 h-4" />
                                </a>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
