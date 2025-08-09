import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube, Send, MessageCircle } from 'lucide-react';
import TicketForm from '../components/TicketForm'; // Importamos el nuevo componente TicketForm
import AuthButtons from '../components/AuthButtons'; // Importamos el nuevo componente AuthButtons

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí iría la lógica para enviar el formulario, por ejemplo, a una API o servicio de correo
        console.log('Formulario enviado:', formData);
        alert('¡Gracias por tu mensaje! Nos pondremos en contacto pronto.');
        setFormData({ name: '', email: '', phone: '', message: '' });
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
                    Contáctanos
                </motion.h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
                    >
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Información de Contacto</h2>
                        <div className="space-y-6 text-gray-700">
                            <div className="flex items-center gap-4">
                                <Mail size={28} className="text-amber-600 flex-shrink-0" />
                                <div>
                                    <h3 className="font-semibold text-lg">Correo Electrónico</h3>
                                    <p>floreceraureo@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <Phone size={28} className="text-amber-600 flex-shrink-0" />
                                <div>
                                    <h3 className="font-semibold text-lg">Teléfono</h3>
                                    <p>+57 3025052624</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <MapPin size={28} className="text-amber-600 flex-shrink-0" />
                                <div>
                                    <h3 className="font-semibold text-lg">Ubicación</h3>
                                    <p>Bogotá, Colombia</p>
                                </div>
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-6">Síguenos en Redes</h3>
                        <div className="flex space-x-6">
                            <a href="#" className="text-gray-600 hover:text-amber-600 transition-colors duration-300">
                                <Facebook size={32} />
                            </a>
                            <a href="#" className="text-gray-600 hover:text-amber-600 transition-colors duration-300">
                                <Instagram size={32} />
                            </a>
                            <a href="#" className="text-gray-600 hover:text-amber-600 transition-colors duration-300">
                                <Linkedin size={32} />
                            </a>
                            <a href="#" className="text-gray-600 hover:text-amber-600 transition-colors duration-300">
                                <Youtube size={32} />
                            </a>
                        </div>
                    </motion.div>

                    {/* Contact Form (Reemplazado por TicketForm) */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
                    >
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Envíanos un Mensaje</h2>
                        <p className="text-gray-600 mb-4">
                            Para consultas generales o soporte, por favor usa el formulario de ticket.
                        </p>
                        <AuthButtons /> {/* Botones de autenticación */}
                        <div className="mt-6">
                            <TicketForm /> {/* Componente de formulario de tickets */}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* WhatsApp Floating Button */}
            <motion.a
                href="https://wa.me/573025052624"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 flex items-center justify-center z-50"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.5 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <MessageCircle size={32} />
            </motion.a>
        </div>
    );
};

export default Contact;