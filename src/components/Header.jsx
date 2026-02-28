import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Leaf, ShoppingCart, Facebook, Instagram, Twitter, Linkedin, Send, Music } from 'lucide-react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Products', path: '/catalog' },
        { name: 'Consulting', path: '/consulting' },
        { name: 'Partnerships', path: '/partnerships' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
            <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
                <Link to="/" className="flex items-center gap-3 group">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-agro-green/20 group-hover:border-agro-green transition-all shadow-lg shadow-agro-green/10">
                        <img
                            src="/logo_emblem.png"
                            alt="SA AGRO Logo"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <span className="font-display font-black text-2xl tracking-tighter text-agro-forest group-hover:text-agro-green transition-colors">
                        SA <span className="text-agro-green">AGRO</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`font-medium transition-colors hover:text-agro-green ${location.pathname === link.path ? 'text-agro-green' : 'text-agro-forest'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="flex items-center gap-3 border-l pl-8 border-gray-100">
                        <a href="https://facebook.com/SuleimanBashiru" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-agro-green transition-colors"><Facebook size={18} /></a>
                        <a href="https://twitter.com/saagronigltd" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-agro-green transition-colors"><Twitter size={18} /></a>
                        <a href="https://instagram.com/suleimanbashiru9" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-agro-green transition-colors"><Instagram size={18} /></a>
                        <a href="https://linkedin.com/in/SuleimanBashiru" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-agro-green transition-colors"><Linkedin size={18} /></a>
                        <a href="https://tiktok.com/@saagronigltd" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-agro-green transition-colors"><Music size={18} /></a>
                        <a href="https://t.me/saagronigltd" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-agro-green transition-colors"><Send size={18} /></a>
                    </div>
                    <Link
                        to="/catalog"
                        className="bg-agro-green text-white px-6 py-2 rounded-full font-bold hover:bg-agro-forest transition-all shadow-lg hover:shadow-agro-green/20 text-center"
                    >
                        Order Bulk
                    </Link>
                </nav>

                {/* Mobile Toggle */}
                <button className="md:hidden text-agro-forest" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white border-t py-4 px-4 shadow-xl">
                    <nav className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-lg font-medium p-2 border-b border-gray-50 ${location.pathname === link.path ? 'text-agro-green' : 'text-agro-forest'
                                    }`}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            to="/catalog"
                            className="bg-agro-green text-white py-3 rounded-xl font-bold mt-2 shadow-lg text-center"
                            onClick={() => setIsOpen(false)}
                        >
                            Order Bulk
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
