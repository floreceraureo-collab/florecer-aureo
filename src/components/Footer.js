import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <motion.footer
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-gray-900 text-gray-300 py-12 mt-20"
        >
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="space-y-4">
                    <h3 className="text-xl font-bold text-white mb-2">Florecer Áureo</h3>
                    <p className="text-gray-400">
                        Producción audiovisual mensual para marcas que florecen. Soluciones estratégicas y creativas en Colombia.
                    </p>
                    <div className="flex space-x-4 mt-4">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                            <Facebook size={24} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                            <Instagram size={24} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                            <Linkedin size={24} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                            <Youtube size={24} />
                        </a>
                    </div>
                </div>

                <div className="space-y-4">
                    <h3 className="text-xl font-bold text-white mb-2">Contacto</h3>
                    <p className="flex items-center gap-2 text-gray-400">
                        <Mail size={20} /> floreceraureo@gmail.com {/* Correo actualizado */}
                    </p>
                    <p className="flex items-center gap-2 text-gray-400">
                        <Phone size={20} /> +57 3025052624 {/* Teléfono actualizado */}
                    </p>
                    <p className="text-gray-400">Bogotá, Colombia</p>
                </div>

                <div className="space-y-4">
                    <h3 className="text-xl font-bold text-white mb-2">Enlaces Rápidos</h3>
                    <ul className="space-y-2">
                        <li><Link to="/" className="text-gray-400 hover:text-white transition-colors duration-300">Inicio</Link></li>
                        <li><Link to="/planes" className="text-gray-400 hover:text-white transition-colors duration-300">Planes de Suscripción</Link></li>
                        <li><Link to="/sobre-nosotros" className="text-gray-400 hover:text-white transition-colors duration-300">Sobre Nosotros</Link></li>
                        <li><Link to="/contacto" className="text-gray-400 hover:text-white transition-colors duration-300">Contáctanos</Link></li>
                    </ul>
                </div>
            </div>
            <div className="text-center text-gray-500 mt-10 pt-8 border-t border-gray-700">
                © {new Date().getFullYear()} Florecer Áureo. Todos los derechos reservados.
            </div>
        </motion.footer>
    );
};

export default Footer;