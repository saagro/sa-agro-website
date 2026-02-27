import React from 'react';
import { Shield, Eye, Lock } from 'lucide-react';

const PrivacyPolicy = () => {
    return (
        <div className="bg-white min-h-screen pt-24 pb-16">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                <header className="mb-12 border-b border-gray-100 pb-8">
                    <div className="flex items-center gap-3 mb-4 text-agro-green">
                        <Shield size={32} />
                        <h1 className="font-display font-bold text-4xl text-gray-900">Privacy Policy</h1>
                    </div>
                    <p className="text-gray-500">Last Updated: February 27, 2026</p>
                </header>

                <div className="prose prose-lg max-w-none text-gray-700 space-y-8 font-primary">
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Commitment to Privacy</h2>
                        <p>
                            At SA AGRO NIG LTD, we respect your privacy and are committed to protecting the personal data you share with us. This policy outlines how we collect, use, and safeguard your information when you visit our website or interact with our services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
                        <p>We may collect information in the following ways:</p>
                        <ul className="list-disc pl-6 space-y-2 mt-4">
                            <li><strong>Direct Information</strong>: Name, phone number, and email address provided via our contact or bulk inquiry forms.</li>
                            <li><strong>B2B Data</strong>: Company names and registration details provided for partnership or procurement purposes.</li>
                            <li><strong>Log Data</strong>: IP addresses and browser types for the purpose of improving website performance and security.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Use of Information</h2>
                        <p>We use the collected data exclusively to:</p>
                        <ul className="list-disc pl-6 space-y-2 mt-4">
                            <li>Facilitate bulk orders and partnerships.</li>
                            <li>Respond to technical and consulting inquiries.</li>
                            <li>Provide statutory information related to our agricultural operations.</li>
                            <li>Comply with Nigerian trade and anti-money laundering regulations (SCUML).</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h2>
                        <p>
                            We implement industry-standard security measures to protect your information. Access to personal data is restricted to authorized employees who require that information to fulfill our service obligations.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Third-Party Sharing</h2>
                        <p>
                            We do not sell, trade, or otherwise transfer your personal information to outside parties except to trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.
                        </p>
                    </section>

                    <section className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                        <h2 className="text-xl font-bold text-gray-900 mb-3">6. Contact Us</h2>
                        <p className="mb-0">
                            If you have any questions regarding this Privacy Policy or the handling of your data, please contact our Data Protection Officer at:
                            <br />
                            <span className="font-bold text-agro-green">admin@saagro.com.ng</span>
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
