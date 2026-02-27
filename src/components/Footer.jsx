import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin, Leaf } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-agro-forest text-white pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-white/10 pb-12">
                    {/* Logo & Vision */}
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-lg overflow-hidden border border-white/10">
                                <img src="/logo_emblem.png" alt="SA AGRO" className="w-full h-full object-cover" />
                            </div>
                            <span className="font-display font-bold text-2xl tracking-tighter">SA <span className="text-agro-grain">AGRO</span></span>
                        </div>
                        <p className="text-gray-300 leading-relaxed mb-6">
                            Powering Nigeria's agricultural future from Kaiama. Premium grains, sustainable farming, and community impact.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://facebook.com/SuleimanBashiru" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-agro-green transition-all hover:-translate-y-1"><Facebook size={20} /></a>
                            <a href="https://twitter.com/saagronigltd" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-agro-green transition-all hover:-translate-y-1"><Twitter size={20} /></a>
                            <a href="https://instagram.com/suleimanbashiru9" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-agro-green transition-all hover:-translate-y-1"><Instagram size={20} /></a>
                            <a href="https://linkedin.com/in/SuleimanBashiru" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-agro-green transition-all hover:-translate-y-1"><Linkedin size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <div>
                            <h4 className="font-display font-bold text-lg mb-6">Explore</h4>
                            <ul className="space-y-4">
                                <li><Link to="/" className="text-gray-400 hover:text-agro-grain transition-colors">Home</Link></li>
                                <li><Link to="/catalog" className="text-gray-400 hover:text-agro-grain transition-colors">Bulk Catalog</Link></li>
                                <li><Link to="/consulting" className="text-gray-400 hover:text-agro-grain transition-colors">Consulting</Link></li>
                                <li><Link to="/partnerships" className="text-gray-400 hover:text-agro-grain transition-colors">Partnerships</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* Products */}
                    <div>
                        <h4 className="font-display font-bold text-lg mb-6">Top Grains</h4>
                        <ul className="space-y-4">
                            <li><Link to="/catalog" className="text-gray-400 hover:text-agro-grain transition-colors">Yellow Maize</Link></li>
                            <li><Link to="/catalog" className="text-gray-400 hover:text-agro-grain transition-colors">Soya Beans</Link></li>
                            <li><Link to="/catalog" className="text-gray-400 hover:text-agro-grain transition-colors">Sorghum (Dawa)</Link></li>
                            <li><Link to="/catalog" className="text-gray-400 hover:text-agro-grain transition-colors">B2B Bulk Orders</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-display font-bold text-lg mb-6">Get in Touch</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="text-agro-grain shrink-0" size={20} />
                                <span className="text-gray-400">26, Gabassawa St, Kaiama, Kwara (242101)</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="text-agro-grain shrink-0" size={20} />
                                <span className="text-gray-400">+234 706 470 6084</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="text-agro-grain shrink-0" size={20} />
                                <span className="text-gray-400">admin@saagro.com.ng</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>© 2026 SA AGRO NIG LTD. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
