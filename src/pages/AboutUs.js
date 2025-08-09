import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Handshake, Award, Leaf, Rocket, Users, CheckCircle } from 'lucide-react';

const AboutUs = () => {
    const values = [
        { icon: Lightbulb, title: 'Creatividad con propósito', description: 'Cada historia que contamos tiene un sentido humano, político o empresarial que trasciende lo estético.' },
        { icon: Handshake, title: 'Colaboración', description: 'Trabajamos con nuestros clientes como aliados estratégicos, no como simples proveedores.' },
        { icon: Award, title: 'Excelencia narrativa', description: 'Cuidamos cada plano, cada palabra y cada mensaje con un alto estándar de calidad visual y ética.' },
        { icon: Leaf, title: 'Sostenibilidad', description: 'Minimizamos el impacto ambiental de nuestras producciones, apostando por procesos digitales y responsables.' },
        { icon: Rocket, title: 'Innovación accesible', description: 'Usamos tecnología como puente, no como barrera. Democratizamos el acceso a contenidos audiovisuales de calidad.' },
        { icon: Users, title: 'Compromiso social', description: 'Integramos a jóvenes talentos, víctimas del conflicto y profesionales de sectores excluidos del ecosistema audiovisual tradicional.' },
    ];

    const policies = [
        { title: 'Política de uso responsable de IA', description: 'Solo utilizamos inteligencia artificial para acelerar tareas técnicas y creativas de bajo impacto autoral (subtítulos, borradores visuales, automatización de respuestas), asegurando siempre revisión humana final.' },
        { title: 'Política de sostenibilidad audiovisual', description: 'Adoptamos prácticas como cero papel, movilidad sostenible, reutilización de materiales y capacitación en producción verde.' },
        { title: 'Política de ética narrativa', description: 'No reproducimos discursos discriminatorios, estigmatizantes o que atenten contra la dignidad humana. Promovemos contenidos responsables que fomenten la inclusión, la verdad, la justicia y la memoria.' },
    ];

    return (
        <div className="pt-20 min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 py-16">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12"
                >
                    Sobre Nosotros
                </motion.h1>

                {/* Misión y Visión */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                        className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
                    >
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestra Misión</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Inspirar, producir y acompañar narrativas visuales que potencien la identidad de marcas personales, emprendimientos y organizaciones sociales en Colombia, integrando creatividad estratégica, tecnología de vanguardia y valores éticos en cada entrega audiovisual.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                        className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
                    >
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestra Visión</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Convertirnos en la productora líder en Colombia en soluciones audiovisuales estratégicas por suscripción, siendo reconocidos por nuestro impacto cultural, sostenibilidad ambiental, innovación tecnológica y compromiso con los territorios y comunidades vulnerables.
                        </p>
                    </motion.div>
                </div>

                {/* Valores */}
                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Nuestros Valores</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 text-center"
                            >
                                <div className="p-4 bg-amber-100 rounded-full inline-flex mb-6">
                                    <value.icon size={36} className="text-amber-600" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                                <p className="text-gray-600">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Breve Historia */}
                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 mb-16"
                >
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Nuestra Historia</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Florecer Áureo nace en Bogotá como una respuesta creativa, resiliente y estratégica al desafío que enfrentan miles de emprendimientos, fundaciones y profesionales independientes: construir presencia digital con contenido audiovisual coherente, auténtico y continuo.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Fundada por José Leonardo Macías Yépez, realizador de cine y audiovisuales, documentalista y comunicador con experiencia en narrativas de impacto, la empresa se constituye formalmente como S.A.S. en 2025. Tras una fase de validación con más de 10 perfiles de cliente tipo, ventas iniciales, contratos, alianzas y desarrollo de un modelo escalable basado en suscripciones mensuales, la productora da el salto al diseño de su propia plataforma para centralizar servicios, automatizar procesos y escalar a nivel nacional.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        Actualmente, Florecer Áureo cuenta con un equipo técnico y creativo completo, presencia digital activa, un sistema comercial automatizado y un enfoque claro en economía naranja, producción sostenible, y ética narrativa en la era digital.
                    </p>
                </motion.section>

                {/* Políticas Internas */}
                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
                >
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Políticas Internas</h2>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        A través de nuestras políticas institucionales, garantizamos una operación interna coherente con nuestros valores:
                    </p>
                    <ul className="space-y-4 mb-8">
                        {policies.map((policy, index) => (
                            <li key={index} className="flex items-start">
                                <CheckCircle size={24} className="text-green-500 mr-3 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-1">{policy.title}</h3>
                                    <p className="text-gray-600">{policy.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <p className="text-gray-700 leading-relaxed">
                        👉 Conoce nuestras políticas internas completas{' '}
                        <a href="#" className="text-blue-600 hover:underline font-semibold">aquí</a>
                        {' '} (este enlace podrá dirigirse al PDF o sección legal de tu futura plataforma)
                    </p>
                </motion.section>
            </div>
        </div>
    );
};

export default AboutUs;