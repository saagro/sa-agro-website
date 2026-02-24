import React from 'react';
import { BarChart3, Users, Settings, Database, ArrowRight, ShieldCheck, Globe, Landmark } from 'lucide-react';

const Consulting = () => {
    const handleWhatsAppInquiry = (topic) => {
        const phone = '2347064706084';
        const message = `Hello SA AGRO Strategy Team, I am interested in consulting for: ${topic}.`;
        window.location.href = `https://api.whatsapp.com/send/?phone=${phone}&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;
    };

    const services = [
        {
            title: 'Supply Chain Optimization',
            icon: <Settings className="text-agro-green" size={32} />,
            desc: 'Expert logistics and inventory management strategies for industrial grain processors in Nigeria.',
            features: ['Inventory Forecasting', 'Logistics Bottleneck Analysis', 'Cost Reduction Frameworks']
        },
        {
            title: 'Sustainability & ESG Advisory',
            icon: <Globe className="text-agro-green" size={32} />,
            desc: 'Aligning agricultural operations with global Environmental, Social, and Governance (ESG) standards.',
            features: ['Carbon Footprint Monitoring', 'Fair Trade Certification Prep', 'Community Impact Assessment']
        },
        {
            title: 'Policy & Development Strategy',
            icon: <Database className="text-agro-green" size={32} />,
            desc: 'Partnering with state and local governments to design effective agricultural transformation programs.',
            features: ['Market Access Research', 'Smallholder Integration Models', 'Policy Impact Analysis']
        }
    ];

    return (
        <div className="bg-white min-h-screen">
            {/* Hero */}
            <section className="py-24 bg-agro-forest text-white relative overflow-hidden">
                <div className="container mx-auto px-4 md:px-6 relative z-10 text-left">
                    <div className="max-w-3xl">
                        <span className="text-agro-grain font-bold tracking-widest uppercase text-sm mb-4 block">Strategic Advisory</span>
                        <h1 className="font-display font-black text-5xl md:text-7xl mb-8 leading-tight">
                            Scaling Agriculture Through <span className="text-agro-grain italic">Expert Insight</span>
                        </h1>
                        <p className="text-xl text-agro-cream/70 leading-relaxed mb-10">
                            SA AGRO NIG LTD provides high-level consultancy for corporate processors and government bodies looking to modernize Nigeria's grain supply chain.
                        </p>
                        <a
                            href="https://api.whatsapp.com/send/?phone=2347064706084&text=Hello+SA+AGRO+Strategy+Team%2C+I+am+interested+in+the+Consultancy+Profile.&type=phone_number&app_absent=0"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-agro-green text-white px-10 py-4 rounded-2xl font-bold shadow-xl hover:bg-agro-grain hover:text-agro-forest transition-all flex items-center justify-center gap-2 cursor-pointer"
                        >
                            Request Consultancy Profile <ArrowRight size={20} className="pointer-events-none" />
                        </a>
                    </div>
                </div>
                <div className="absolute top-0 right-0 w-1/2 h-full bg-agro-green opacity-10 -skew-x-12 translate-x-1/4"></div>
            </section>

            {/* Services Grid */}
            <section className="py-24 bg-agro-cream">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="font-display font-bold text-4xl text-agro-forest mb-4">Our Service Pillars</h2>
                        <div className="w-20 h-1.5 bg-agro-green mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {services.map((service, idx) => (
                            <div
                                key={idx}
                                className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-agro-forest/5 hover:shadow-xl hover:-translate-y-2 transition-all text-left"
                            >
                                <div className="bg-agro-cream w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
                                    {service.icon}
                                </div>
                                <h3 className="font-display font-bold text-2xl text-agro-forest mb-4">{service.title}</h3>
                                <p className="text-gray-600 mb-8 leading-relaxed">{service.desc}</p>
                                <ul className="space-y-3">
                                    {service.features.map((f, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-agro-forest font-medium">
                                            <ShieldCheck size={16} className="text-agro-green" /> {f}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Corporate/Gov Contact */}
            <section className="py-24 text-left">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="bg-agro-forest rounded-[3rem] p-12 md:p-20 text-white flex flex-col md:flex-row items-center justify-between gap-12 shadow-2xl">
                        <div className="max-w-xl">
                            <h2 className="font-display font-bold text-3xl md:text-5xl mb-6">Partner for Institutional Growth</h2>
                            <p className="text-agro-cream/70 text-lg leading-relaxed">
                                Whether you are a financial institution evaluating agro-investments or a state government designing development hubs, our consultancy team is ready.
                            </p>
                        </div>
                        <div className="shrink-0 flex flex-col gap-4 w-full md:w-auto">
                            <a
                                href={`https://api.whatsapp.com/send/?phone=2347064706084&text=${encodeURIComponent('Hello SA AGRO Strategy Team, I am interested in Institutional Strategy Partnering.')}&type=phone_number&app_absent=0`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-agro-grain text-agro-forest px-10 py-5 rounded-2xl font-bold hover:bg-white transition-all text-center cursor-pointer block"
                            >
                                Contact Strategy Team
                            </a>
                            <div className="flex items-center justify-center gap-2 text-sm text-agro-cream/50">
                                <Users size={16} /> 12+ Corporate Projects Completed
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8 py-8 border-t border-gray-100 italic text-gray-400 text-sm">
                        <div className="flex items-center gap-2">
                            <ShieldCheck size={18} className="text-agro-green" /> Payments only to SA AGRO NIG LTD Official Account
                        </div>
                        <div className="flex items-center gap-2">
                            <Landmark size={18} className="text-agro-green" /> Keystone Bank (Acc: 1012323282)
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Consulting;
