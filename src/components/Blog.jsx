import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Brain, Heart } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Blog = () => {
    const { t } = useLanguage();

    const icons = [Brain, BookOpen, Heart];

    const posts = t.blog.posts.map((post, index) => ({
        ...post,
        icon: icons[index],
        image: [
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&q=80",
            "https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=800&h=600&fit=crop&q=80",
            "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&h=600&fit=crop&q=80"
        ][index]
    }));

    return (
        <section id="blog" className="py-24 bg-surface relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-bg to-transparent"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-secondary font-bold tracking-widest uppercase text-sm"
                    >
                        {t.blog.badge}
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl sm:text-5xl font-display font-black text-primary mt-4 mb-8"
                    >
                        {t.blog.title} <br /> {t.blog.titleHighlight}
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="bg-bg p-8 border-l-4 border-secondary relative my-12"
                    >
                        <p className="font-serif italic text-xl text-textSecondary">
                            "{t.blog.quote}"
                        </p>
                        <p className="text-sm font-bold mt-4 text-primary">{t.blog.quoteAuthor}</p>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <motion.article
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group cursor-pointer"
                        >
                            <div className="relative overflow-hidden mb-6 border-2 border-primary/10">
                                <div className="absolute top-4 right-4 bg-surface/90 backdrop-blur px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary z-10">
                                    {post.category}
                                </div>
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
                                />
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-center gap-2 text-secondary">
                                    <post.icon className="w-5 h-5" />
                                    <span className="text-sm font-bold">5 min read</span>
                                </div>
                                <h3 className="text-2xl font-display font-bold text-primary group-hover:text-secondary transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-textSecondary font-sans leading-relaxed">
                                    {post.excerpt}
                                </p>
                                <a href="#" className="inline-flex items-center text-primary font-bold text-sm hover:gap-2 transition-all">
                                    {t.blog.readArticle} <ArrowRight className="ml-1 w-4 h-4" />
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
