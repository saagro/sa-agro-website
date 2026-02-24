import React from 'react';
import { Briefcase, Gavel, FileText, TrendingUp, Handshake, Users, Award, ShieldCheck, Download, ExternalLink, Activity, LayoutGrid, Landmark } from 'lucide-react';

const Partnerships = () => {
    const handleWhatsAppInquiry = (topic) => {
        const phone = '2347064706084';
        const message = `Hello SA AGRO team, I am interested in ${topic}. Please provide more information.`;
        window.location.href = `https://api.whatsapp.com/send/?phone=${phone}&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;
    };

    const complianceDocs = [
        { title: 'CAC Certificate', category: 'RC: 1834091', status: 'Registered', date: 'Aug 30, 2021' },
        { title: 'NEPC Export License', category: 'RE: 0029672', status: 'Active', date: 'Oct 2025' },
        { title: 'SCUML Certification', category: 'RN: SC 242100257', status: 'Compliance', date: 'Nov 3, 2021' },
        { title: 'State Tax ID', category: 'ID: 2522420706336', status: 'Verified', date: 'Feb 2026' },
    ];

    return (
        <div className="bg-agro-cream min-h-screen">
            {/* Hero */}
            <section className="pt-24 pb-12">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <span className="inline-block bg-agro-green/10 text-agro-green font-bold px-4 py-1 rounded-full mb-6 text-sm uppercase tracking-wider">
                        Governance & Compliance
                    </span>
                    <h1 className="font-display font-black text-5xl md:text-7xl text-agro-forest leading-tight mb-8">
                        Strategic <span className="text-agro-green italic">Partnerships</span> Hub
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Positioning SA AGRO NIG LTD as a transparent, investment-ready enterprise.
                        Authorised Capital: <span className="text-agro-forest font-bold">₦1,000,000</span> | Registered Office: Kaiama, Kwara.
                    </p>
                </div>
            </section>

            {/* Partnership Lanes */}
            <section className="py-16">
                <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-8">
                    {/* Government Lane */}
                    <div
                        className="bg-white p-12 rounded-[3rem] shadow-sm border border-agro-forest/5 text-left"
                    >
                        <div className="bg-agro-green/5 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
                            <Gavel className="text-agro-green" size={32} />
                        </div>
                        <h2 className="font-display font-bold text-3xl text-agro-forest mb-6">Government & Agencies</h2>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            We align our Kaiama operations with State and Federal Agricultural Transformation plans. Our model is built for scalable rural development and food security.
                        </p>
                        <ul className="space-y-4 mb-10">
                            <li className="flex gap-3 text-agro-forest font-medium">
                                <Award size={20} className="text-agro-green shrink-0" /> Local Employment (50+ Jobs Strategy)
                            </li>
                            <li className="flex gap-3 text-agro-forest font-medium">
                                <FileText size={20} className="text-agro-green shrink-0" /> NEPC Exporter RE No: 0029672
                            </li>
                            <li className="flex gap-3 text-agro-forest font-medium">
                                <ShieldCheck size={20} className="text-agro-green shrink-0" /> SCUML / AML Compliant Entity
                            </li>
                        </ul>
                        <a
                            href={`https://api.whatsapp.com/send/?phone=2347064706084&text=${encodeURIComponent('Hello SA AGRO team, I am interested in Government Partnership & Profiles.')}&type=phone_number&app_absent=0`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full py-4 border-2 border-agro-green text-agro-green font-bold rounded-2xl hover:bg-agro-green hover:text-white transition-all cursor-pointer text-center block"
                        >
                            Request Gov Profile
                        </a>
                    </div>

                    {/* Financial Institutions Lane */}
                    <div
                        className="bg-agro-forest p-12 rounded-[3rem] shadow-xl text-white text-left"
                    >
                        <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
                            <TrendingUp className="text-agro-grain" size={32} />
                        </div>
                        <h2 className="font-display font-bold text-3xl mb-6">Loans & Grants Access</h2>
                        <p className="text-agro-cream/70 mb-8 leading-relaxed">
                            SA AGRO is structured for high transparency and financial accountability, with fully audited status since 2021.
                        </p>
                        <ul className="space-y-4 mb-10">
                            <li className="flex gap-3 text-agro-cream/90 font-medium">
                                <Briefcase size={20} className="text-agro-grain shrink-0" /> TEF 2026 Aligned Projections
                            </li>
                            <li className="flex gap-3 text-agro-cream/90 font-medium">
                                <Activity size={20} className="text-agro-grain shrink-0" /> YAEDP Accredited Entrepreneurship
                            </li>
                            <li className="flex gap-3 text-agro-cream/90 font-medium">
                                <LayoutGrid size={20} className="text-agro-grain shrink-0" /> Authorized Capital: ₦1M
                            </li>
                        </ul>
                        <a
                            href={`https://api.whatsapp.com/send/?phone=2347064706084&text=${encodeURIComponent('Hello SA AGRO team, I am interested in Investor/Bank Partnership.')}&type=phone_number&app_absent=0`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full py-4 bg-agro-grain text-agro-forest font-bold rounded-2xl hover:bg-white transition-all shadow-lg cursor-pointer text-center block"
                        >
                            Partner with Us
                        </a>
                    </div>
                </div>
            </section>

            {/* Document Verification Center */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="bg-agro-cream rounded-[4rem] p-8 md:p-16 border border-agro-forest/5 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-agro-green/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8 relative z-10 text-left">
                            <div className="max-w-xl">
                                <h2 className="font-display font-black text-4xl text-agro-forest mb-4 italic">Document <span className="text-agro-green not-italic">Verification Center</span></h2>
                                <p className="text-gray-500 text-lg">
                                    Official status: 26, Gabassawa St, Kaiama. RC 1834091.
                                </p>
                            </div>
                            <a
                                href={`https://api.whatsapp.com/send/?phone=2347064706084&text=${encodeURIComponent('Hello SA AGRO team, I am interested in Full Compliance Document Access.')}&type=phone_number&app_absent=0`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 bg-agro-forest text-white px-8 py-4 rounded-2xl font-bold shadow-xl hover:bg-agro-green transition-all group cursor-pointer"
                            >
                                <ShieldCheck className="pointer-events-none" /> Request Full Document Access
                            </a>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10 text-left">
                            {complianceDocs.map((doc, i) => (
                                <div key={i} className="bg-white p-8 rounded-3xl border border-agro-forest/5 hover:border-agro-green/30 hover:shadow-xl transition-all group">
                                    <div className="bg-agro-green/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-agro-green group-hover:bg-agro-green group-hover:text-white transition-all">
                                        <FileText size={24} />
                                    </div>
                                    <h4 className="font-bold text-agro-forest text-xl mb-1">{doc.title}</h4>
                                    <p className="text-xs text-agro-green font-bold uppercase tracking-widest mb-4">{doc.category}</p>

                                    <div className="flex justify-between items-center mt-6 pt-6 border-t border-gray-100">
                                        <div className="flex flex-col">
                                            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">Status</span>
                                            <span className="text-sm font-black text-agro-forest">{doc.status}</span>
                                        </div>
                                        <button className="p-2 bg-gray-50 rounded-lg text-gray-400 hover:text-agro-green transition-colors">
                                            <ExternalLink size={18} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Global Monetization / Banking Section */}
            <section className="py-24 bg-agro-forest relative overflow-hidden">
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="bg-white rounded-[3rem] p-12 md:p-20 shadow-2xl flex flex-col md:flex-row items-center gap-16 border border-white/10">
                        <div className="md:w-1/2 text-left">
                            <div className="bg-agro-green/10 w-20 h-20 rounded-3xl flex items-center justify-center mb-8">
                                <Landmark className="text-agro-green" size={40} />
                            </div>
                            <h2 className="font-display font-black text-4xl text-agro-forest mb-6 italic">Secure <span className="text-agro-green not-italic">Global Settlement</span></h2>
                            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                Facilitating international B2B transactions with institutional transparency via SWIFT/IBAN settlements. All payments must be strictly made to our official corporate account.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 text-agro-forest font-bold">
                                    <ShieldCheck className="text-agro-green" /> Anti-Money Laundering Compliant
                                </div>
                                <div className="flex items-center gap-4 text-agro-forest font-bold">
                                    <ShieldCheck className="text-agro-green" /> Audited Financial Pipeline
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/2 w-full">
                            <div className="bg-agro-cream p-8 md:p-12 rounded-[2.5rem] border-2 border-agro-green/20 relative">
                                <div className="absolute top-0 right-12 -translate-y-1/2 bg-agro-green text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full shadow-lg"> Verified Corporate Account </div>
                                <div className="space-y-8">
                                    <div className="text-left">
                                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-tighter mb-1">Account Name</p>
                                        <p className="text-2xl font-display font-black text-agro-forest">SA AGRO NIG LTD</p>
                                    </div>
                                    <div className="text-left">
                                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-tighter mb-1">Account Number</p>
                                        <p className="text-4xl font-display font-black text-agro-green tracking-tight">1012323282</p>
                                    </div>
                                    <div className="text-left">
                                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-tighter mb-1">Bank Institution</p>
                                        <p className="text-2xl font-display font-black text-agro-forest flex items-center gap-3">
                                            Keystone Bank <span className="text-sm bg-agro-green/10 text-agro-green px-3 py-1 rounded-lg">NGN</span>
                                        </p>
                                    </div>
                                </div>
                                <a
                                    href={`https://api.whatsapp.com/send/?phone=2347064706084&text=${encodeURIComponent('Hello SA AGRO team, I am interested in International SWIFT/IBAN Details.')}&type=phone_number&app_absent=0`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full mt-10 py-5 bg-agro-forest text-white rounded-2xl font-bold hover:bg-agro-green transition-all shadow-xl cursor-pointer text-center block"
                                >
                                    Request SWIFT/IBAN for International
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-white z-0"></div>
            </section>

            {/* Compliance / Credentials Section */}
            <section className="py-24">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h2 className="font-display font-bold text-3xl text-agro-forest mb-12">Governance & Credibility</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { label: 'RC Number', value: '1834091' },
                            { label: 'Incorporation', value: 'Aug 30, 2021' },
                            { label: 'Share Capital', value: '₦1,000,000' },
                            { label: 'Audit Readiness', value: 'Tier 1' },
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-2xl border border-agro-forest/5 text-left">
                                <p className="text-xs font-bold text-agro-green uppercase tracking-tighter mb-1">{item.label}</p>
                                <p className="text-lg font-display font-black text-agro-forest">{item.value}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Partnerships;
