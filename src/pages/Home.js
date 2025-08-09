import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle, Zap, TrendingUp, Users } from 'lucide-react';

const Home = () => {
    const howItWorksSteps = [
        { icon: CheckCircle, title: 'Elige tu plan', description: 'Selecciona el plan que mejor se adapte a tus necesidades.' },
        { icon: Zap, title: 'Grabamos', description: 'Nuestro equipo se encarga de la producción audiovisual.' },
        { icon: TrendingUp, title: 'Entregamos', description: 'Recibe contenido de alta calidad periódicamente.' },
        { icon: Users, title: 'Repite', description: 'Mantén tu presencia digital activa y en crecimiento.' },
    ];

    const benefits = [
        { title: 'Velocidad', description: 'Entregas rápidas para mantener tu ritmo de publicación.' },
        { title: 'Calidad', description: 'Producciones profesionales que destacan tu marca.' },
        { title: 'Escalabilidad', description: 'Planes adaptados a tu crecimiento y ambición.' },
        { title: 'Acompañamiento Creativo', description: 'Asesoría experta para potenciar tus ideas.' },
    ];

    return (
        <div className="pt-20"> {/* Offset for fixed navbar */}
            {/* Hero Section */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative bg-gradient-to-br from-amber-50 to-green-50 py-20 md:py-32 text-center overflow-hidden"
            >
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                        Producción audiovisual mensual para <br className="hidden md:block" /> marcas que <span className="text-amber-600">florecen</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-3xl mx-auto">
                        Diseñamos tu contenido. Tú te concentras en crecer.
                    </p>
                    <Link to="/planes">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold py-4 px-10 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            Ver planes
                        </motion.button>
                    </Link>
                </div>
            </motion.section>

            {/* Video Institucional */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
                    >
                        Conoce Florecer Áureo
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-amber-100"
                    >
                        {/* Placeholder for YouTube/Vimeo embed */}
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=YOUR_VIDEO_ID"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            className="w-full h-full"
                        ></iframe>
                    </motion.div>
                </div>
            </section>

            {/* Cómo Funciona */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
                    >
                        ¿Cómo funciona?
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {howItWorksSteps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-white p-8 rounded-2xl shadow-lg text-center border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className="p-4 bg-amber-100 rounded-full inline-flex mb-6">
                                    <step.icon size={36} className="text-amber-600" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                                <p className="text-gray-600">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Beneficios */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
                    >
                        Beneficios de Florecer Áureo
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="flex items-start bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100"
                            >
                                <CheckCircle size={28} className="text-green-500 mr-4 flex-shrink-0" />
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                                    <p className="text-gray-600">{benefit.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 bg-gradient-to-r from-green-600 to-blue-700 text-white text-center">
                <div className="container mx-auto px-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-4xl font-bold mb-6"
                    >
                        Tu marca florece cuando se expresa con narrativa visual
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
                    >
                        Producción audiovisual profesional mes a mes, sin complicaciones.
                    </motion.p>
                    <Link to="/planes">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-green-700 font-bold py-4 px-10 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            Suscríbete ahora
                        </motion.button>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;