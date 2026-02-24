import React, { useState } from 'react';
import { Search, Filter, ShoppingBag, Info, ArrowUpRight, ShieldCheck, Landmark } from 'lucide-react';

const products = [
    {
        id: 1,
        name: 'Premium Yellow Maize (Kaiama)',
        category: 'Grains',
        price: '₦65,000',
        unit: 'per 100kg bag',
        minOrder: '100kg (1 bag)',
        description: 'High-quality kernels rich in Vitamin A & Beta-carotene. Versatile for yellow akamu (pap), cornmeal, and high-energy livestock feed. Sourced from Kaiama meander belt deposits.',
        image: '/assets/images/maize_yellow.jpg',
        stock: 'Available',
    },
    {
        id: 2,
        name: 'Soya Beans (Kaiama)',
        category: 'Legumes',
        price: '₦75,000',
        unit: 'per 50kg bag',
        minOrder: '500kg (10 bags)',
        description: 'High-protein soybeans supported by Amo Byng & Olam partnerships. Cultivated across 1,500 hectares in Kaiama. Cleaned, sorted, and strictly regulated for quality. Ideal for oil extraction.',
        image: '/assets/images/soya_beans.png',
        stock: 'Available',
    },
    {
        id: 3,
        name: 'Elubo Kaiama (Yam Flour)',
        category: 'Processed',
        price: '₦100,000',
        unit: 'per 100kg bag',
        minOrder: '100kg',
        description: 'Authentic yam flour from Kaiama — peeled, parboiled, dried & ground white yam. Off-white in texture, turns rich dark-brown when cooked into Amala Isu. Unadulterated, superior quality over common market blends. Rich in carbohydrates, fiber & potassium.',
        image: '/assets/images/yam_flour.jpg',
        stock: 'In Stock',
    },
    {
        id: 4,
        name: 'Raw Cashew Nut (Kaiama RCN)',
        category: 'Nuts & Seeds',
        price: '₦1,350,000',
        unit: 'per MT (Metric Ton)',
        minOrder: '1 MT (80kg jute bags)',
        description: 'Premium RCN from Kaiama. Feb 2026 Market Rates: Wet ₦1,750-1,800/kg, Dry ₦1,950-2,800/kg. Bulk price ₦1.1M-1.35M/MT based on KOR (45–50+ lbs). Nut count: 180–200/kg. Moisture: 7–9%. Export-ready for Vietnam/India (FOB/CIF available).',
        image: '/assets/images/cashew.jpg',
        stock: 'Export Ready',
    },
    {
        id: 5,
        name: 'Shea Nut (Kaiama)',
        category: 'Nuts & Seeds',
        price: '₦1,350',
        unit: 'per kg',
        minOrder: '1,000kg',
        description: 'Sun-dried Shea nuts from Kaiama. Early 2025 Market: ₦1,300–₦1,400/kg. Major production hub with 250,000+ trees. Women-harvested. High oil content for cosmetics & pharma. 50-tonne govt processing factory nearby.',
        image: '/assets/images/shea_nut.png',
        stock: 'Available',
    },
    {
        id: 6,
        name: 'Sorghum (Dawa / Guinea Corn)',
        category: 'Grains',
        price: '₦1,800',
        unit: 'per kg',
        minOrder: '200kg',
        description: 'Nutrient-dense, gluten-free staple. Used for Tuwon Dawa and Kunu. Rich in protein & antioxidants. Ideal for diabetic-friendly diets and weight management.',
        image: '/assets/images/sorghum_red.jpg',
        stock: 'Available',
    },
];

const Catalog = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = ['All', 'Grains', 'Legumes', 'Processed', 'Nuts & Seeds'];

    const handleWhatsAppInquiry = (productName) => {
        const phone = '2347064706084';
        const text = `I am interested in ordering bulk ${productName} from SA AGRO NIG LTD. Please provide current rates and delivery lead times.`;
        const url = `https://api.whatsapp.com/send/?phone=${phone}&text=${encodeURIComponent(text)}&type=phone_number&app_absent=0`;
        window.location.href = url;
    };

    const filteredProducts = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="bg-agro-cream min-h-screen pt-12 pb-24 text-left">
            <div className="container mx-auto px-4 md:px-6">
                {/* Header */}
                <div className="mb-12">
                    <h1 className="font-display font-black text-4xl md:text-5xl text-agro-forest mb-4">Bulk Procurement</h1>
                    <p className="text-gray-600 max-w-2xl text-lg">
                        Direct access to Kwara's finest produce. Select from our catalog for bulk supply to your industry or retail hub.
                    </p>
                </div>

                {/* Filters */}
                <div className="bg-white p-4 rounded-3xl shadow-sm border border-agro-forest/5 mb-12 flex flex-col md:flex-row gap-4 items-center justify-between">
                    <div className="relative w-full md:w-96">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="text"
                            placeholder="Search products..."
                            className="w-full pl-12 pr-4 py-3 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-agro-green transition-all"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-6 py-2 rounded-xl font-bold transition-all whitespace-nowrap ${selectedCategory === cat ? 'bg-agro-green text-white shadow-lg shadow-agro-green/20' : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Product Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
                    {filteredProducts.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-agro-forest/5 hover:shadow-xl transition-all flex flex-col md:flex-row group"
                        >
                            <div className="md:w-1/3 relative overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 min-h-[250px]"
                                />
                                <div className="absolute inset-0 bg-agro-forest/10 group-hover:bg-transparent transition-colors"></div>
                                <div className="absolute top-4 left-4">
                                    <span className="bg-white/90 backdrop-blur-sm text-agro-forest text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter shadow-sm">
                                        {product.stock}
                                    </span>
                                </div>
                            </div>
                            <div className="md:w-2/3 p-8 flex flex-col">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <span className="text-xs font-bold uppercase tracking-widest text-agro-green mb-1 block">{product.category}</span>
                                        <h3 className="font-display font-bold text-2xl text-agro-forest">{product.name}</h3>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-2xl font-black text-agro-green">{product.price}</p>
                                        <p className="text-xs text-gray-400 font-medium">Min Order: {product.minOrder}</p>
                                    </div>
                                </div>
                                <p className="text-gray-600 mb-8 flex-grow leading-relaxed">
                                    {product.description}
                                </p>
                                <div className="flex gap-3">
                                    <a
                                        href={`https://api.whatsapp.com/send/?phone=2347064706084&text=${encodeURIComponent(`I am interested in ordering bulk ${product.name} from SA AGRO NIG LTD. Please provide current rates.`)}&type=phone_number&app_absent=0`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-grow bg-agro-forest text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-agro-green transition-colors shadow-lg shadow-agro-forest/10 hover:shadow-agro-green/20 text-center cursor-pointer"
                                    >
                                        <ShoppingBag size={20} className="pointer-events-none" /> Order Bulk
                                    </a>
                                    <button className="p-4 bg-agro-cream text-agro-forest rounded-2xl hover:bg-agro-grain hover:text-white transition-all">
                                        <Info size={20} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Empty State */}
                {filteredProducts.length === 0 && (
                    <div className="text-center py-24">
                        <p className="text-gray-400 text-xl font-medium">No produce found matching your search.</p>
                    </div>
                )}

                {/* Pricing Table Note */}
                <div className="mt-24 p-12 bg-agro-forest rounded-[3rem] text-white relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 w-1/4 h-full bg-agro-green opacity-10 -skew-x-12"></div>
                    <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="font-display font-bold text-3xl mb-6 flex items-center gap-3">
                                Industry Rates & Logistics <ArrowUpRight className="text-agro-grain" />
                            </h2>
                            <p className="text-agro-cream/70 text-lg leading-relaxed mb-8">
                                We offer competitive pricing for industrial quantities (&gt;2 Tonnes). All shipments are tracked and handled by our logistics partners from Kaiama or Lagos depots.
                            </p>
                            <a
                                href={`https://wa.me/2347064706084?text=${encodeURIComponent('I am interested in a Custom Quote for Bulk Export/Industrial Supply.')}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-agro-grain text-agro-forest px-8 py-3 rounded-xl font-bold hover:bg-white transition-all cursor-pointer text-center"
                            >
                                Request Custom Quote
                            </a>
                        </div>
                        <div className="space-y-4">
                            {[
                                { label: 'Moisture Level', value: '< 13%' },
                                { label: 'Purity Level', value: '> 98%' },
                                { label: 'Standard Pack', value: '100kg/Bag' },
                                { label: 'Delivery Time', value: '3-7 Days' },
                            ].map((item, idx) => (
                                <div key={idx} className="flex justify-between border-b border-white/10 pb-2">
                                    <span className="text-agro-cream/60">{item.label}</span>
                                    <span className="font-bold text-agro-grain">{item.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bulk Settlement & Payments */}
            <section className="py-24 bg-agro-forest relative overflow-hidden">
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="bg-white rounded-[4rem] p-12 md:p-20 shadow-2xl flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2 text-left">
                            <span className="inline-block bg-agro-green/10 text-agro-green font-bold px-4 py-1 rounded-full mb-6 text-sm uppercase tracking-wider">
                                Global Industrial Sales
                            </span>
                            <h2 className="font-display font-black text-4xl text-agro-forest mb-8 italic">
                                Bulk Procurement <span className="text-agro-green not-italic">& Settlement</span>
                            </h2>
                            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                                We facilitate large-scale agricultural exports and industrial grain supply with secure, transparent payment protocols. All transactions follow international trade compliance standards.
                            </p>

                            <div className="grid grid-cols-2 gap-6 mb-12">
                                <div className="p-6 bg-agro-cream rounded-3xl border border-agro-green/10">
                                    <p className="text-[10px] font-black text-agro-green uppercase tracking-widest mb-2">Order Threshold</p>
                                    <p className="text-xl font-display font-black text-agro-forest">5 - 5,000 MT</p>
                                </div>
                                <div className="p-6 bg-agro-cream rounded-3xl border border-agro-green/10">
                                    <p className="text-[10px] font-black text-agro-green uppercase tracking-widest mb-2">Lead Time</p>
                                    <p className="text-xl font-display font-black text-agro-forest">7 - 21 Days</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center gap-4 text-agro-forest font-bold">
                                    <ShieldCheck className="text-agro-green" /> Letter of Credit (L/C) Accepted
                                </div>
                                <div className="flex items-center gap-4 text-agro-forest font-bold">
                                    <ShieldCheck className="text-agro-green" /> Official Invoice Issued Pre-Payment
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-1/2 w-full">
                            <div className="bg-agro-cream rounded-[3rem] p-10 border-2 border-agro-green/20 relative shadow-inner text-left">
                                <div className="absolute top-0 right-12 -translate-y-1/2 bg-agro-green text-white text-[10px] font-black uppercase tracking-widest px-6 py-2 rounded-full shadow-lg">
                                    Official Corporate Account
                                </div>

                                <div className="space-y-8">
                                    <div className="text-left">
                                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Beneficiary</p>
                                        <p className="text-2xl font-display font-bold text-agro-forest">SA AGRO NIG LTD</p>
                                    </div>
                                    <div className="text-left">
                                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Settlement Account</p>
                                        <p className="text-5xl font-display font-black text-agro-green tracking-tighter">1012323282</p>
                                    </div>
                                    <div className="text-left">
                                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Banking Institution</p>
                                        <p className="text-2xl font-display font-bold text-agro-forest">Keystone Bank</p>
                                    </div>
                                </div>

                                <div className="mt-12 pt-12 border-t border-agro-green/10 flex flex-col sm:flex-row gap-4">
                                    <button
                                        onClick={() => window.location.href = '/letterhead.html'}
                                        className="flex-1 bg-agro-forest text-white py-5 rounded-2xl font-bold hover:bg-agro-green transition-all shadow-xl text-center cursor-pointer"
                                    >
                                        Generate Pro-Forma
                                    </button>
                                    <a
                                        href={`https://api.whatsapp.com/send/?phone=2347064706084&text=${encodeURIComponent('I am interested in entering the WhatsApp Deal Room for General Bulk Inquiry.')}&type=phone_number&app_absent=0`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 bg-white border-2 border-agro-forest text-agro-forest py-5 rounded-2xl font-bold hover:bg-agro-forest hover:text-white transition-all text-center cursor-pointer"
                                    >
                                        WhatsApp Deal Room
                                    </a>
                                </div>

                                <p className="mt-6 text-[10px] text-gray-400 font-medium leading-relaxed">
                                    *Please note: SA AGRO NIG LTD will never request payments via personal accounts. Always verify our RC 1834091 before settlement.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <Landmark size={400} className="absolute -bottom-20 -right-20 text-white" />
                </div>
            </section>
        </div>
    );
};

export default Catalog;
