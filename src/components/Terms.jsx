import React from "react";
import { Link } from "react-router-dom";

const Terms = () => {
    return (
        <div className="bg-black text-white min-h-screen px-6 md:px-24 py-20">

            {/* Top Bar */}
            <div className="flex justify-between items-center mb-20">
                <img
                    src="https://res.cloudinary.com/di4caiech/image/upload/v1774411856/Icon_Color_4x-removebg-preview_wxqq4d.png"
                    alt="Avvio Logo"
                    className="w-7 h-7 object-contain"
                />

                <Link
                    to="/"
                    className="bg-white text-black px-5 py-2 rounded-full text-sm font-medium"
                >
                    Get early access
                </Link>
            </div>

            {/* Content */}
            <div className="max-w-[640px] mx-auto text-[#A1A1AA] leading-[1.9] text-[16px]">

                <h1 className="text-[48px] font-semibold text-white tracking-tight mb-4">
                    Terms of Service
                </h1>

                <p className="text-[#6B7280] text-sm mb-12">
                    Last Updated: February 10, 2026
                </p>

                <p className="mb-6">
                    These Terms of Service (“Terms”) constitute a legally binding agreement between you and Anzo Labs, Inc. (“Avvio,” “we,” “us”) governing your access to and use of the Avvio application, wallet software, and related services.
                </p>

                {/* 1 */}
                <h2 className="text-white font-medium mt-12 mb-4 text-[20px] tracking-tight">
                    1. Eligibility and Compliance
                </h2>

                <p className="mb-6">
                    You represent that you are at least eighteen (18) years of age and comply with all applicable laws.
                </p>

                <p className="mb-6">
                    You are responsible for compliance with digital asset, AML, sanctions, and tax regulations.
                </p>

                {/* 2 */}
                <h2 className="text-white font-medium mt-12 mb-4 text-[20px] tracking-tight">
                    2. Nature of the Avvio Service (Non-Custodial)
                </h2>

                <p className="mb-6">
                    Avvio is a non-custodial wallet. You fully control your assets.
                </p>

                <p className="mb-6">
                    We do not store, access, or manage your funds. Third-party services provide additional features.
                </p>

                {/* 3 */}
                <h2 className="text-white font-medium mt-12 mb-4 text-[20px] tracking-tight">
                    3. Wallet Creation and Keys
                </h2>

                <p className="mb-6">
                    Wallets are created securely using MPC infrastructure. You are responsible for your credentials.
                </p>

                <p className="mb-6">
                    Loss of credentials may result in permanent loss of funds.
                </p>

                {/* 4 */}
                <h2 className="text-white font-medium mt-12 mb-4 text-[20px] tracking-tight">
                    4. Transactions
                </h2>

                <p className="mb-6">
                    Blockchain transactions are irreversible and depend on external networks.
                </p>

                <p className="mb-6">
                    Avvio does not guarantee execution speed or success.
                </p>

                {/* 5 */}
                <h2 className="text-white font-medium mt-12 mb-4 text-[20px] tracking-tight">
                    5. Risks
                </h2>

                <p className="mb-6">
                    Digital assets are volatile and may result in total loss.
                </p>

                <p className="mb-6">
                    You are responsible for evaluating risks before using the service.
                </p>

                {/* 6 */}
                <h2 className="text-white font-medium mt-12 mb-4 text-[20px] tracking-tight">
                    6. Fees
                </h2>

                <p className="mb-6">Fees may include:</p>

                <ul className="list-disc pl-5 space-y-2 mb-6">
                    <li>Blockchain network fees</li>
                    <li>Third-party provider fees</li>
                    <li>Avvio service fees</li>
                </ul>

                {/* 7 */}
                <h2 className="text-white font-medium mt-12 mb-4 text-[20px] tracking-tight">
                    7. Prohibited Activities
                </h2>

                <p className="mb-6">
                    You may not use the service for illegal activities including fraud, money laundering, or manipulation.
                </p>

                {/* 8 */}
                <h2 className="text-white font-medium mt-12 mb-4 text-[20px] tracking-tight">
                    8. Tokenized Assets & Responsibility
                </h2>

                <p className="mb-6">
                    Access to tokenized securities and RWAs is provided by licensed partners.
                </p>

                <p className="mb-6">
                    Avvio does not provide investment advice or determine asset classification.
                </p>

                {/* 9 */}
                <h2 className="text-white font-medium mt-12 mb-4 text-[20px] tracking-tight">
                    9. Additional Fees & Disclosures
                </h2>

                <p className="mb-6">
                    Fees may include gas fees, third-party fees, and Avvio routing fees.
                </p>

                {/* 10 */}
                <h2 className="text-white font-medium mt-12 mb-4 text-[20px] tracking-tight">
                    10. Acceptable Use
                </h2>

                <p className="mb-6">
                    You must not misuse the platform, attempt to bypass security, or violate regulations.
                </p>

                {/* 11 */}
                <h2 className="text-white font-medium mt-12 mb-4 text-[20px] tracking-tight">
                    11. Account & Data
                </h2>

                <p className="mb-6">
                    Account deletion removes off-chain data but blockchain data remains permanent.
                </p>

                {/* 12 */}
                <h2 className="text-white font-medium mt-12 mb-4 text-[20px] tracking-tight">
                    12. Risks & No Advice
                </h2>

                <p className="mb-6">
                    Digital assets are highly volatile and not financial advice.
                </p>

                {/* 13 */}
                <h2 className="text-white font-medium mt-12 mb-4 text-[20px] tracking-tight">
                    13. Limitation of Liability
                </h2>

                <p className="mb-6">
                    Avvio is not liable for indirect damages or losses due to blockchain or third-party failures.
                </p>

                {/* 14 */}
                <h2 className="text-white font-medium mt-12 mb-4 text-[20px] tracking-tight">
                    14. Governing Law
                </h2>

                <p className="mb-6">
                    These Terms are governed by the laws of Delaware.
                </p>

                {/* 15 */}
                <h2 className="text-white font-medium mt-12 mb-4 text-[20px] tracking-tight">
                    15. Contact
                </h2>

                <p className="mb-2">Anzo Labs, Inc.</p>
                <p className="mb-2">support@avvio.xyz</p>
                <p className="mb-4">https://avvio.xyz</p>

                <p className="mb-6">
                    Anzo Labs, Inc. is a self-custodial wallet, not a bank or broker.
                </p>

                <p className="text-[#6B7280] text-sm mt-12">
                    © 2026 Anzo Labs, Inc. All rights reserved.
                </p>

            </div>
        </div>
    );
};

export default Terms;