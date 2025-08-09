import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Inicio', path: '/' },
        { name: 'Planes', path: '/planes' },
        { name: 'Sobre Nosotros', path: '/sobre-nosotros' },
        { name: 'Contacto', path: '/contacto' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 120, damping: 14 }}
            className="bg-white/80 backdrop-blur-lg shadow-md fixed w-full z-50 top-0"
        >
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link to="/" className="flex items-center">
                    {/* Ajustado el tamaño del logo y el margen para que se vea mejor */}
                    <img src="/logo.png" alt="Florecer Áureo Logo" className="h-12 w-auto mr-4" /> 
                    <span className="text-2xl font-bold text-gray-900">
                        Florecer Áureo
                    </span>
                </Link>

                <div className="hidden md:flex space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className="text-gray-700 hover:text-amber-600 font-medium transition-colors duration-300"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            <motion.div
                initial={false}
                animate={isOpen ? 'open' : 'closed'}
                variants={{
                    open: { opacity: 1, height: 'auto' },
                    closed: { opacity: 0, height: 0 },
                }}
                transition={{ duration: 0.3 }}
                className="md:hidden overflow-hidden bg-white/90"
            >
                <div className="flex flex-col px-4 py-2 space-y-2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            className="block py-2 text-gray-800 hover:bg-gray-100 rounded-md font-medium"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </motion.div>
        </motion.nav>
    );
};

export default Navbar;