import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, TrendingUp, Users, ShieldCheck, ShoppingCart } from 'lucide-react';

const Home = () => {
    const navigate = useNavigate();
    const featuredProducts = [
        {
            id: 1,
            name: 'Premium Yellow Maize',
            price: '₦65,000/bag',
            description: 'Nutrient-rich yellow maize from Kaiama, high in Vitamin A & Beta-carotene.',
            image: '/assets/images/maize_yellow.jpg',
        },
        {
            id: 2,
            name: 'Soya Beans (Kaiama)',
            price: '₦75,000/bag',
            description: 'Export-quality soya beans supported by major industry partnerships.',
            image: '/assets/images/soya_beans.png',
        },
        {
            id: 3,
            name: 'Sorghum (Dawa)',
            price: '₦1,800/kg',
            description: 'Nutrient-dense, gluten-free Guinea Corn. Ideal for Tuwo, Kunu, and healthy diets.',
            image: '/assets/images/sorghum_red.jpg',
        },
    ];

    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center bg-agro-cream">
                <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
                    <div className="z-10">
                        <span className="inline-block bg-agro-green/10 text-agro-green font-bold px-4 py-1 rounded-full mb-6 text-sm uppercase tracking-wider">
                            Nigeria's Grain Hub
                        </span>
                        <h1 className="font-display font-black text-5xl md:text-7xl text-agro-forest leading-tight mb-6">
                            Premium Grains from <span className="text-agro-green italic">Kaiama</span> to the World
                        </h1>
                        <p className="text-lg text-gray-600 mb-10 max-w-lg leading-relaxed">
                            SA AGRO NIG LTD bridges the gap between Kwara's fertile lands and your bulk needs.
                            Scaling agriculture through digital readiness and sustainable impact.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                to="/catalog"
                                className="bg-agro-green text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-agro-forest transition-all shadow-xl hover:shadow-agro-green/20 group text-center cursor-pointer"
                            >
                                Order Bulk Grains <ArrowRight className="group-hover:translate-x-1 transition-transform pointer-events-none" />
                            </Link>
                            <Link
                                to="/catalog"
                                className="bg-white text-agro-forest border border-agro-forest/10 px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all text-center cursor-pointer"
                            >
                                Download Catalog
                            </Link>
                        </div>

                        {/* Impact Badges */}
                        <div className="mt-12 flex gap-8 items-center border-t border-agro-forest/5 pt-8">
                            <div>
                                <p className="font-display font-bold text-3xl text-agro-forest">50+</p>
                                <p className="text-sm text-gray-500 uppercase tracking-tighter">Jobs Target</p>
                            </div>
                            <div className="w-px h-12 bg-agro-forest/10"></div>
                            <div>
                                <p className="font-display font-bold text-3xl text-agro-forest">₦2.4M</p>
                                <p className="text-sm text-gray-500 uppercase tracking-tighter">Proj. Annual Profit</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-agro-grain/20 rounded-full blur-3xl"></div>
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-agro-green/20 rounded-full blur-3xl"></div>
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl skew-y-1 hover:skew-y-0 transition-transform duration-500">
                            <img
                                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1200"
                                alt="Kaiama Farm"
                                className="w-full h-[500px] object-cover"
                            />
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-agro-forest/80 to-transparent p-8">
                                <p className="text-white font-display font-medium text-lg italic">
                                    "Sustainable farming powered by Kwara's heartbeat."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6 text-center mb-16">
                    <h2 className="font-display font-bold text-3xl md:text-5xl text-agro-forest mb-4">Why Global Buyers Choose Us</h2>
                    <div className="w-24 h-1 bg-agro-grain mx-auto rounded-full"></div>
                </div>
                <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-3 gap-8">
                    {[
                        { icon: <ShieldCheck className="text-agro-green" size={32} />, title: 'Quality Assured', desc: 'Moisture-controlled and pre-vetted grain batches.' },
                        { icon: <TrendingUp className="text-agro-green" size={32} />, title: 'Scalable Supply', desc: 'Capable of handling 200kg to multi-tonne orders.' },
                        { icon: <Users className="text-agro-green" size={32} />, title: 'Impact Driven', desc: 'Every purchase supports 50+ local jobs in Kwara.' },
                    ].map((feature, idx) => (
                        <div
                            key={idx}
                            className="bg-agro-cream p-8 rounded-3xl border border-agro-forest/5 hover:border-agro-green/20 hover:shadow-lg transition-all"
                        >
                            <div className="mb-6 bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm">
                                {feature.icon}
                            </div>
                            <h3 className="font-display font-bold text-xl text-agro-forest mb-3">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Products Grid */}
            <section className="py-20 bg-agro-cream">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <div>
                            <h2 className="font-display font-bold text-3xl md:text-5xl text-agro-forest mb-4 text-left">Our Premium Produce</h2>
                            <p className="text-gray-600 max-w-md">Sourced with care, delivered with precision. Bulk options available for all grains.</p>
                        </div>
                        <button className="text-agro-green font-bold flex items-center gap-2 hover:underline">
                            View All Products <ArrowRight size={20} />
                        </button>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredProducts.map((product) => (
                            <div
                                key={product.id}
                                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all h-full flex flex-col"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute top-4 right-4 bg-agro-grain text-agro-forest font-bold px-4 py-1 rounded-full text-sm">
                                        {product.name.split(' ')[0]}
                                    </div>
                                </div>
                                <div className="p-8 flex flex-col flex-grow">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="font-display font-bold text-xl text-agro-forest">{product.name}</h3>
                                        <span className="text-agro-green font-bold text-lg">{product.price}</span>
                                    </div>
                                    <p className="text-gray-600 mb-8 flex-grow leading-relaxed">
                                        {product.description}
                                    </p>
                                    <a
                                        href={`https://api.whatsapp.com/send/?phone=2347064706084&text=${encodeURIComponent(`I am interested in ordering bulk ${product.name} from SA AGRO NIG LTD. Please provide current rates.`)}&type=phone_number&app_absent=0`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full bg-agro-forest text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 group-hover:bg-agro-green transition-all shadow-lg hover:shadow-agro-green/20 text-center cursor-pointer"
                                    >
                                        <ShoppingCart size={20} /> Add to Bulk Inquiry
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TEF Impact Section */}
            <section className="py-24 bg-agro-forest relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-agro-green/10 -skew-x-12"></div>
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-8">Ready for TEF 2026 & Digital Scaling</h2>
                            <p className="text-agro-cream/80 text-lg mb-8 leading-relaxed">
                                SA AGRO NIG LTD is not just a farm; it's a digital-ready engine for growth. Our platform
                                integrates secure payments, bulk logistics, and real-time tracking to ensure $5k impact
                                is felt across the Kwara grains industry.
                            </p>
                            <ul className="space-y-4 mb-10">
                                {[
                                    'Scalable E-commerce Architecture',
                                    'Real-time Inventory Tracking',
                                    'Paystack Payment Integration',
                                    '50 Sustainable Jobs Strategy'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-white text-left">
                                        <CheckCircle className="text-agro-grain" size={24} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <button className="bg-agro-grain text-agro-forest px-10 py-4 rounded-xl font-bold hover:bg-white transition-all shadow-xl">
                                Read Our Impact Story
                            </button>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4 pt-12">
                                <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=400" className="rounded-2xl shadow-lg" alt="Impact 1" />
                                <div className="bg-agro-green p-6 rounded-2xl text-white shadow-lg text-left">
                                    <p className="font-display font-bold text-2xl">200kg+</p>
                                    <p className="text-sm opacity-80 uppercase">Minimum Bulk Batch</p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="bg-agro-grain p-6 rounded-2xl text-agro-forest shadow-lg text-left">
                                    <p className="font-display font-bold text-2xl">200k/mo</p>
                                    <p className="text-sm opacity-80 uppercase">Revenue Target</p>
                                </div>
                                <img src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=400" className="rounded-2xl shadow-lg" alt="Impact 2" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
