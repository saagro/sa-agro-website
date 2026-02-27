import React from 'react';
import { Shield, FileText, Scale } from 'lucide-react';

const TermsOfService = () => {
    return (
        <div className="bg-white min-h-screen pt-24 pb-16">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                <header className="mb-12 border-b border-gray-100 pb-8">
                    <div className="flex items-center gap-3 mb-4 text-agro-green">
                        <Scale size={32} />
                        <h1 className="font-display font-bold text-4xl text-gray-900">Terms of Service</h1>
                    </div>
                    <p className="text-gray-500">Effective Date: February 27, 2026</p>
                </header>

                <div className="prose prose-lg max-w-none text-gray-700 space-y-8 font-primary">
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                        <p>
                            Welcome to SA AGRO NIG LTD. By accessing our website (https://saagro.com.ng) or utilizing our agricultural services, you agree to be bound by these Terms of Service. Please read them carefully. If you do not agree with any part of these terms, you must not use our services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Agricultural Trade & Commodities</h2>
                        <p>
                            SA AGRO NIG LTD specializes in the supply of high-fidelity agricultural commodities, including Maize, Soya Beans, Sorghum, and Cashew Nuts.
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mt-4">
                            <li><strong>Product Quality</strong>: We guarantee that all products meet the specifications agreed upon at the time of order.</li>
                            <li><strong>Pricing</strong>: Commodity prices are subject to market fluctuations. Final pricing is confirmed at the point of Pro-Forma Invoice issuance.</li>
                            <li><strong>Delivery</strong>: Delivery timelines are estimates and depend on logistics and seasonal factors.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">3. B2B & Wholesale Orders</h2>
                        <p>
                            Professional bulk orders are governed by specific trade contracts. Payments for bulk
                            orders should only be made to our official corporate account (Keystone Bank, Acc: 1012323282).
                            SA AGRO NIG LTD is not liable for payments made to unauthorized accounts.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Intellectual Property</h2>
                        <p>
                            All content on this website, including logos, text, and imagery related to "Premium Kaiama Grains," is the property of SA AGRO NIG LTD and protected by Nigerian and international copyright laws.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Limitation of Liability</h2>
                        <p>
                            SA AGRO NIG LTD shall not be liable for any indirect, incidental, or consequential damages resulting from the use of our website or the purchase of our products. In no event shall our total liability exceed the amount paid for the specific service or product in question.
                        </p>
                    </section>

                    <section className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                        <h2 className="text-xl font-bold text-gray-900 mb-3">6. Governing Law</h2>
                        <p className="mb-0">
                            These terms are governed by and construed in accordance with the laws of the Federal Republic of Nigeria. Any disputes arising shall be subject to the exclusive jurisdiction of the courts in Kwara State, Nigeria.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Contact Information</h2>
                        <p>
                            For legal inquiries or clarification on these terms, please contact:
                        </p>
                        <div className="mt-4 p-4 border-l-4 border-agro-green bg-agro-green/5">
                            <p className="font-bold text-gray-900">The Legal Department</p>
                            <p>SA AGRO NIG LTD</p>
                            <p>26, Gabassawa Street, Kaiama, Kwara State</p>
                            <p>Email: admin@saagro.com.ng</p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default TermsOfService;
