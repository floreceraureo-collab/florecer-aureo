import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, ChevronDown, ChevronUp, CreditCard, Smartphone, Banknote } from 'lucide-react';

const Plans = () => {
    const plans = [
        {
            name: 'Starter Reel',
            price: '393.000 COP / mes',
            color: 'bg-green-500',
            details: [
                '1 jornada de grabación mensual (2h)',
                '1 Reel editado + adaptación adicional',
                'Subtítulos, música y edición pro',
                'Asesoría creativa de 30 min',
                'Transporte incluido'
            ],
            idealFor: 'creadores emergentes o marcas personales en redes'
        },
        {
            name: 'Presencia Expandida',
            price: '774.000 COP / mes',
            color: 'bg-amber-500',
            details: [
                '1 grabación mensual (3h)',
                '2 Reels + 1 testimonial corto',
                'Diseño de portadas + 3 miniaturas',
                'Formatos vertical, cuadrado y horizontal',
                'Transporte incluido'
            ],
            idealFor: 'quienes quieren mantenerse activos cada semana'
        },
        {
            name: 'Impulso Creativo',
            price: '1.528.000 COP / mes',
            color: 'bg-orange-500',
            details: [
                '2 jornadas de grabación / mes',
                '5 piezas editadas + video demo',
                'Testimonial emocional',
                'Plantillas para publicación',
                'Transporte incluido'
            ],
            idealFor: 'quienes desean subir el nivel de su presencia digital'
        },
        {
            name: 'Producción Ejecutiva',
            price: '3.006.000 COP / mes',
            color: 'bg-red-500',
            details: [
                '2 jornadas extendidas (4–6h)',
                'Hasta 8 entregables + institucional',
                'Coaching en cámara + guiones base',
                'Dirección creativa personalizada',
                'Transporte incluido'
            ],
            idealFor: 'empresas y líderes que quieren contenido de alto impacto'
        },
        {
            name: 'Posicionamiento Total',
            price: '4.484.000 COP / mes',
            color: 'bg-purple-500',
            details: [
                '3 jornadas completas / mes',
                '12 entregables + 1 documental corto',
                'Storytelling estratégico',
                'Branding visual audiovisual',
                'Transporte incluido'
            ],
            idealFor: 'servicio integral premium para empresas o fundaciones'
        },
        {
            name: 'Producción Total Expandida',
            price: '8.968.000 COP / mes',
            color: 'bg-blue-600',
            details: [
                '6 jornadas de grabación completas',
                'Hasta 6 locaciones diferentes (interiores y exteriores, en Bogotá y alrededores).',
                'Coordinación logística avanzada (cronograma, permisos, checklist por locación).',
                'Posibilidad de incluir talento externo, clientes o equipos de trabajo.',
                'Hasta 24 piezas audiovisuales editadas:',
                '  - Reels narrativos y virales (x10)',
                '  - Video institucional de alto impacto',
                '  - Making-of o detrás de cámaras',
                '  - Cápsulas educativas / entrevistas (x4)',
                '  - Testimoniales / clientes reales (x3)',
                '  - Video de presentación ejecutiva',
                '  - 1 documental corto profesional (hasta 6 minutos)',
                '  - Animación o motion graphics explicativo (1 pieza técnica)',
                'Estrategia narrativa y asesoría de posicionamiento:',
                '  - Taller de identidad narrativa (1 sesión online)',
                '  - Construcción de storytelling transmedia',
                '  - Brief de comunicación con enfoque emocional y estratégico',
                '  - Guiones y estructura narrativa por cada línea de contenido',
                'Dirección de arte y diseño audiovisual de marca:',
                '  - Coaching personalizado de presentación en cámara (2 sesiones)',
                '  - Diseño de intro/outro de marca',
                '  - Paquete gráfico completo para video (tipografías, color, transiciones, lower thirds)',
                '  - Música original o licencia premium incluida',
                'Adaptación multiplataforma y entrega optimizada:',
                '  - Versiones específicas para Instagram, TikTok, YouTube, Facebook, LinkedIn',
                '  - Formatación vertical, horizontal y cuadrada según cada canal',
                '  - Thumbnails diseñados para YouTube y reels destacados',
                '  - Archivo editable (si el cliente lo solicita)',
                'Soporte creativo y comercial mensual:',
                '  - Presentación animada del servicio / pitch de marca',
                '  - Acompañamiento creativo mensual (2 sesiones)',
                '  - Asesoría técnica sobre el uso y difusión del contenido',
                '  - Kit de contenido para newsletter o e-mailing',
                'Bonos exclusivos del plan expandido:',
                '  - Video de cierre de campaña o resumen mensual adicional (1)',
                '  - Acceso a recursos educativos exclusivos de Florecer Áureo (videos + plantillas)',
                '  - Acumulación doble de puntos redimibles para canje de producciones futuras',
                'Transporte (Bogotá y alrededores) Incluido (hasta 2 locaciones fuera de Bogotá con un radio de 30 km)',
                'Cubre desplazamiento del equipo técnico, equipo creativo y material audiovisual',
                'Tiempo de entrega total: 15 a 20 días hábiles, dividido por etapas de contenido y revisión'
            ],
            idealFor: 'campañas institucionales, lanzamientos estratégicos, procesos de memoria, liderazgo de pensamiento, documental de marca, formación interna o impacto social.'
        }
    ];

    const [expandedPlan, setExpandedPlan] = useState(null);

    const toggleDetails = (index) => {
        setExpandedPlan(expandedPlan === index ? null : index);
    };

    return (
        <div className="pt-20 min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 py-16">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12"
                >
                    Nuestros Planes de Suscripción
                </motion.h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden flex flex-col"
                        >
                            <div className={`p-8 text-white ${plan.color} rounded-t-3xl`}>
                                <h2 className="text-3xl font-bold mb-2">{plan.name}</h2>
                                <p className="text-xl font-semibold mb-4">{plan.price}</p>
                                <p className="text-sm opacity-90">Ideal para {plan.idealFor}</p>
                            </div>
                            <div className="p-8 flex-grow flex flex-col justify-between">
                                <ul className="space-y-3 text-gray-700 mb-6">
                                    {plan.details.slice(0, 3).map((detail, i) => (
                                        <li key={i} className="flex items-center">
                                            <CheckCircle size={20} className="text-green-500 mr-2 flex-shrink-0" />
                                            <span>{detail.split(':')[0]}</span>
                                        </li>
                                    ))}
                                    {plan.details.length > 3 && (
                                        <li className="text-gray-500 text-sm italic">
                                            ...y más detalles al ver el plan completo
                                        </li>
                                    )}
                                </ul>

                                <motion.button
                                    onClick={() => toggleDetails(index)}
                                    className="w-full bg-gray-100 text-gray-800 font-semibold py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors duration-300"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Ver detalles {expandedPlan === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                </motion.button>

                                <AnimatePresence>
                                    {expandedPlan === index && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="mt-6 border-t border-gray-200 pt-6"
                                        >
                                            <h3 className="text-lg font-semibold text-gray-800 mb-3">Detalles Completos:</h3>
                                            <ul className="space-y-2 text-gray-600">
                                                {plan.details.map((detail, i) => (
                                                    <li key={i} className="flex items-start">
                                                        {detail.startsWith('  -') ? (
                                                            <span className="ml-4 mr-2">-</span>
                                                        ) : (
                                                            <CheckCircle size={18} className="text-green-500 mr-2 flex-shrink-0 mt-1" />
                                                        )}
                                                        <span>{detail}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                            <motion.button
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="mt-8 w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                                            >
                                                Suscribirse ahora
                                            </motion.button>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Sección de Métodos de Pago Simplificada */}
                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="mt-20 bg-white p-8 rounded-3xl shadow-xl border border-gray-100 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                        💳 Métodos de Pago
                    </h2>
                    <div className="flex flex-wrap justify-center gap-6 text-xl font-semibold text-gray-700">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center bg-gray-100 px-6 py-3 rounded-full shadow-sm"
                        >
                            <CheckCircle size={24} className="text-green-500 mr-2" /> Mercado Pago
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center bg-gray-100 px-6 py-3 rounded-full shadow-sm"
                        >
                            <CheckCircle size={24} className="text-green-500 mr-2" /> Wompi (Bancolombia)
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center bg-gray-100 px-6 py-3 rounded-full shadow-sm"
                        >
                            <CheckCircle size={24} className="text-green-500 mr-2" /> Stripe
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center bg-gray-100 px-6 py-3 rounded-full shadow-sm"
                        >
                            <CheckCircle size={24} className="text-green-500 mr-2" /> Nequi y Daviplata (pagos móviles)
                        </motion.div>
                    </div>
                </motion.section>
            </div>
        </div>
    );
};

export default Plans;