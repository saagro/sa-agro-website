import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Heart, Award, Users, Globe, Briefcase, Shield } from 'lucide-react';

const About = () => {
    return (
        <div className="bg-white text-left">
            {/* Intro Hero */}
            <section className="py-24 bg-agro-cream relative overflow-hidden">
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="max-w-3xl">
                        <span className="text-agro-green font-bold tracking-widest uppercase text-sm mb-4 block">Our Story</span>
                        <h1 className="font-display font-black text-5xl md:text-7xl text-agro-forest leading-tight mb-8">
                            Empowering Agriculture through <span className="text-agro-green italic">Digital Innovation</span>
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed mb-12">
                            Founded in Kaiama, Kwara State, SA AGRO NIG LTD (RC 1834091) was born from a vision to modernize
                            the Nigerian grain market. Incorporated on Aug 30, 2021, we combine centuries of farming tradition with 21st-century technology.
                        </p>
                    </div>
                </div>
                <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/3 h-full bg-agro-green/5 blur-3xl rounded-full"></div>
            </section>

            {/* Leadership Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <div>
                            <h2 className="font-display font-black text-4xl text-agro-forest mb-4 italic">Company <span className="text-agro-green not-italic">Leadership</span></h2>
                            <p className="text-gray-500">The visionaries driving SA AGRO's expansion and community impact.</p>
                        </div>
                        <div className="bg-agro-green/5 px-6 py-3 rounded-2xl border border-agro-green/10">
                            <span className="text-agro-forest font-bold text-sm">Authorised Share Capital: ₦1,000,000</span>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center bg-agro-cream p-8 rounded-[2.5rem] border border-agro-forest/5">
                            <div className="w-24 h-24 bg-agro-green rounded-full flex items-center justify-center text-white font-black text-3xl shrink-0">BS</div>
                            <div>
                                <h3 className="font-display font-bold text-2xl text-agro-forest">Bashiru Suleiman</h3>
                                <p className="text-agro-green font-bold uppercase tracking-widest text-sm mb-2">Founder & Managing Director</p>
                                <p className="text-gray-500 text-sm italic mb-3">80% Majority Shareholder. YAEDP Certified Expert.</p>
                                <div className="inline-flex items-center gap-2 bg-white px-3 py-1 rounded-full border border-agro-green/20">
                                    <Award size={14} className="text-agro-green" />
                                    <span className="text-[10px] font-bold text-agro-forest uppercase tracking-tighter">ID: YAEDP45820875100</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center bg-agro-cream p-8 rounded-[2.5rem] border border-agro-forest/5">
                            <div className="w-24 h-24 bg-agro-grain rounded-full flex items-center justify-center text-agro-forest font-black text-3xl shrink-0">IH</div>
                            <div>
                                <h3 className="font-display font-bold text-2xl text-agro-forest">Meimunah Ibrahim H.</h3>
                                <p className="text-agro-forest font-bold uppercase tracking-widest text-sm mb-2">Director</p>
                                <p className="text-gray-500 text-sm italic mb-3">20% Shareholder. Regulatory Compliance & Operations.</p>
                                <div className="inline-flex items-center gap-2 bg-white px-3 py-1 rounded-full border border-agro-forest/20 text-agro-forest">
                                    <Shield size={14} className="text-agro-green" />
                                    <span className="text-[10px] font-bold uppercase tracking-tighter">CAC Verified Status</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Philosophy */}
            <section className="py-24 bg-agro-cream/30">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid md:grid-cols-3 gap-12">
                        {[
                            { icon: <Target className="text-agro-green" size={40} />, title: 'Our Mission', desc: 'To provide high-quality, sustainable grains to bulk buyers while ensuring fair prices for local Kwara farmers.' },
                            { icon: <Globe className="text-agro-green" size={40} />, title: 'Our Vision', desc: 'To become the leading digital-first agricultural venture in North-Central Nigeria by 2030.' },
                            { icon: <Heart className="text-agro-green" size={40} />, title: 'Our Values', desc: 'Integrity in every bag, transparency in every transaction, and growth for every community member.' },
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="p-10 rounded-[2.5rem] bg-white border border-transparent hover:border-agro-green/10 transition-all hover:shadow-lg"
                            >
                                <div className="mb-6">{item.icon}</div>
                                <h3 className="font-display font-bold text-2xl text-agro-forest mb-4">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Kwara Impact / TEF Fit */}
            <section className="py-24 bg-agro-forest text-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid md:grid-cols-2 gap-20 items-center">
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800"
                                alt="Kaiama Community"
                                className="rounded-[3rem] shadow-2xl relative z-10"
                            />
                            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-agro-green/20 rounded-full blur-3xl"></div>
                        </div>
                        <div>
                            <h2 className="font-display font-bold text-3xl md:text-5xl mb-8">The $5k Impact: Beyond Just Grains</h2>
                            <p className="text-agro-cream/70 text-lg mb-8 leading-relaxed">
                                As part of our TEF 2026 commitment, SA AGRO NIG LTD is focusing on a high-impact strategy
                                in Kwara State. Our goal is not just revenue, but community elevation.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                <div className="flex gap-4 items-start">
                                    <div className="bg-agro-green p-3 rounded-2xl shrink-0"><Users size={24} /></div>
                                    <div>
                                        <h4 className="font-bold text-xl mb-1 text-left">50 Direct Jobs</h4>
                                        <p className="text-sm text-agro-cream/50 text-left">Increasing employment in Kaiama through processing and logistics.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="bg-agro-green p-3 rounded-2xl shrink-0"><Briefcase size={24} /></div>
                                    <div>
                                        <h4 className="font-bold text-xl mb-1 text-left">B2B Empowerment</h4>
                                        <p className="text-sm text-agro-cream/50 text-left">Supporting Lagos-based retailers with consistent, high-yield supply.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="bg-agro-green p-3 rounded-2xl shrink-0"><Award size={24} /></div>
                                    <div>
                                        <h4 className="font-bold text-xl mb-1 text-left">Fair Trade</h4>
                                        <p className="text-sm text-agro-cream/50 text-left">Ensuring our 15+ partner farmers receive 20% above market rates.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership / CTA */}
            <section className="py-24 text-center">
                <div className="container mx-auto px-4 md:px-6">
                    <h2 className="font-display font-bold text-4xl text-agro-forest mb-6">Drive Impact with Us</h2>
                    <p className="text-gray-500 max-w-xl mx-auto mb-12">
                        Whether you're a bulk buyer or a potential partner, your collaboration fuels Nigeria's agriculture.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-block bg-agro-green text-white px-12 py-4 rounded-2xl font-bold shadow-xl hover:bg-agro-forest transition-all text-center cursor-pointer"
                    >
                        Connect with SA AGRO
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default About;
