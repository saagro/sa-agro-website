import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: 'Bulk Inquiry',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for your inquiry. SA AGRO team will contact you shortly!');
        setFormData({ name: '', email: '', subject: 'Bulk Inquiry', message: '' });
    };

    return (
        <div className="bg-agro-cream min-h-screen py-24 text-left">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-16">
                        {/* Contact Info */}
                        <div>
                            <h1 className="font-display font-black text-4xl md:text-5xl text-agro-forest mb-6">Let's Talk <span className="text-agro-green italic">Grains</span></h1>
                            <p className="text-gray-600 text-lg mb-12">
                                Have questions about bulk shipping, pricing, or our farming practices in Kaiama?
                                Our team is ready to assist you in scaling your grain supply chain.
                            </p>

                            <div className="space-y-8 text-left">
                                <div className="flex items-start gap-6">
                                    <div className="bg-white p-4 rounded-2xl shadow-sm text-agro-green shrink-0">
                                        <MapPin size={28} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-agro-forest text-xl mb-1">Visit Our Hub</h4>
                                        <p className="text-gray-500">26, Gabassawa Street, Kaiama, Kwara State (HQ)</p>
                                        <p className="text-gray-500">Post Code: 242101</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6">
                                    <div className="bg-white p-4 rounded-2xl shadow-sm text-agro-green shrink-0">
                                        <Phone size={28} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-agro-forest text-xl mb-1">Call Us</h4>
                                        <p className="text-gray-500">+234 706 470 6084 (MD Office)</p>
                                        <p className="text-gray-500">+234 706 853 3807 (Operations)</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6">
                                    <div className="bg-white p-4 rounded-2xl shadow-sm text-agro-green shrink-0">
                                        <Mail size={28} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-agro-forest text-xl mb-1">Email Inquiry</h4>
                                        <p className="text-gray-500">info@saagro.com.ng</p>
                                        <p className="text-gray-500">sales@saagro.com.ng</p>
                                        <p className="text-gray-500">admin@saagro.com.ng</p>
                                    </div>
                                </div>
                            </div>

                            {/* Social Media Links */}
                            <div className="mt-12">
                                <h4 className="font-bold text-agro-forest text-xl mb-6 font-display uppercase tracking-widest text-sm">Follow Our Journey</h4>
                                <div className="flex gap-4">
                                    <a href="https://facebook.com/SuleimanBashiru" target="_blank" rel="noopener noreferrer" className="p-4 bg-white rounded-2xl shadow-sm text-agro-green hover:bg-agro-green hover:text-white transition-all">
                                        <Facebook size={24} />
                                    </a>
                                    <a href="https://twitter.com/saagronigltd" target="_blank" rel="noopener noreferrer" className="p-4 bg-white rounded-2xl shadow-sm text-agro-green hover:bg-agro-green hover:text-white transition-all">
                                        <Twitter size={24} />
                                    </a>
                                    <a href="https://instagram.com/suleimanbashiru9" target="_blank" rel="noopener noreferrer" className="p-4 bg-white rounded-2xl shadow-sm text-agro-green hover:bg-agro-green hover:text-white transition-all">
                                        <Instagram size={24} />
                                    </a>
                                    <a href="https://linkedin.com/in/SuleimanBashiru" target="_blank" rel="noopener noreferrer" className="p-4 bg-white rounded-2xl shadow-sm text-agro-green hover:bg-agro-green hover:text-white transition-all">
                                        <Linkedin size={24} />
                                    </a>
                                </div>
                            </div>

                            {/* Business Hours */}
                            <div className="mt-12 p-8 bg-agro-forest rounded-[2rem] text-white">
                                <div className="flex items-center gap-3 mb-4">
                                    <Clock className="text-agro-grain" />
                                    <h4 className="font-bold text-lg text-left">Operational Hours</h4>
                                </div>
                                <div className="flex justify-between text-sm text-agro-cream/70">
                                    <span>Mon - Friday</span>
                                    <span>8:00 AM - 6:00 PM</span>
                                </div>
                                <div className="flex justify-between text-sm text-agro-cream/70 mt-2">
                                    <span>Saturday</span>
                                    <span>9:00 AM - 2:00 PM</span>
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-agro-forest/5">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-bold text-agro-forest mb-2 uppercase tracking-tight">Full Name</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-agro-green transition-all"
                                        placeholder="Enter your name"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-agro-forest mb-2 uppercase tracking-tight">Email Address</label>
                                    <input
                                        type="email"
                                        required
                                        className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-agro-green transition-all"
                                        placeholder="name@company.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-agro-forest mb-2 uppercase tracking-tight">Requirement Type</label>
                                    <select
                                        className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-agro-green transition-all appearance-none"
                                        value={formData.subject}
                                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                    >
                                        <option>Bulk Inquiry</option>
                                        <option>Logistics Support</option>
                                        <option>Farmer Partnership</option>
                                        <option>Media/Press</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-agro-forest mb-2 uppercase tracking-tight">Message</label>
                                    <textarea
                                        rows="4"
                                        required
                                        className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-agro-green transition-all resize-none"
                                        placeholder="How can we help your business?"
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    ></textarea>
                                </div>
                                <button className="w-full bg-agro-green text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-agro-forest transition-all shadow-xl shadow-agro-green/20">
                                    <Send size={20} /> Send Inquiry
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
