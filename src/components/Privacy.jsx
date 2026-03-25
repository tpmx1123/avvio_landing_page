import React from "react";
import { Link } from "react-router-dom";

const Privacy = () => {
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
                    Privacy Policy
                </h1>

                <p className="text-[#6B7280] text-sm mb-12">
                    Last Updated: January 15, 2026
                </p>

                <p className="mb-6">
                    This Privacy Policy describes how Anzo Labs, Inc. (“Avvio,” “we,” “us”) collects,
                    uses, discloses, and protects information when you access or use the Avvio
                    application, website, wallet software, card services, virtual accounts,
                    trading, yield features, and related services (collectively, the “Service”).
                    By using Avvio, you acknowledge that you have read and understood this Privacy Policy.
                </p>

                {/* Section 1 */}
                <h2 className="text-white font-medium mt-12 mb-4 text-[20px] tracking-tight">
                    1. Information We Collect
                </h2>

                <p className="mb-6">
                    We collect information that you provide directly when creating an account,
                    communicating with support, or using regulated financial features. This may
                    include identifiers such as your name, email address, phone number, and
                    information required to satisfy identity verification and compliance obligations.
                </p>

                <p className="mb-6">
                    We also automatically collect limited technical information such as device
                    identifiers, IP addresses, app usage data, and log information in order to
                    operate, secure, and improve the Service. Transaction-related metadata,
                    including wallet addresses and transaction hashes, may be processed to display
                    activity and status within the app.
                </p>

                {/* Section 2 */}
                <h2 className="text-white font-medium mt-12 mb-4 text-[20px] tracking-tight">
                    2. Non-Custodial Wallet Data
                </h2>

                <p className="mb-6">
                    Avvio is a non-custodial application. We do not collect, store, or have access
                    to your private keys, seed phrases, or signing credentials.
                </p>

                <p className="mb-6">
                    Wallets for Bitcoin, Ethereum/EVM chains, and Solana are created and secured
                    using Turnkey’s MPC infrastructure. Avvio cannot initiate transactions,
                    sign messages, or access funds on your behalf.
                </p>

                {/* Section 3 */}
                <h2 className="text-white font-medium mt-12 mb-4 text-[20px] tracking-tight">
                    3. Information From Third Parties
                </h2>

                <p className="mb-6">
                    We receive limited information from third-party service providers necessary to
                    deliver the Service. This includes wallet authentication data from Turnkey;
                    transaction routing and execution data from OneBalance, LI.FI, Jupiter, and Relay;
                    pricing and asset data from market data providers; yield-related data from providers
                    such as yo.xyz; tokenized stock and real-world asset data from partners such as XStocks;
                    and compliance-related information from Bridge.xyz, card issuers, and identity verification partners.
                </p>

                <p className="mb-6">
                    Additional third-party providers may be integrated from time to time. Each provider
                    processes data in accordance with its own privacy policies.
                </p>

                {/* Section 4 */}
                <h2 className="text-white font-medium mt-12 mb-4 text-[20px] tracking-tight">
                    4. How We Use Information
                </h2>

                <p className="mb-6">
                    Information is used to create and maintain accounts, enable wallet functionality,
                    process swaps and transfers, facilitate card and fiat services, provide customer
                    support, comply with legal obligations, detect fraud, and improve the performance
                    and security of the Service.
                </p>

                <p className="mb-6">
                    Avvio does not sell personal information or use it for advertising unrelated to the Service.
                </p>

                {/* Section 5 */}
                <h2 className="text-white font-medium mt-12 mb-4 text-[20px] tracking-tight">
                    5. Blockchain Transparency
                </h2>

                <p className="mb-6">
                    Blockchain transactions are inherently public. When you use Avvio to broadcast
                    transactions, the associated wallet addresses and transaction details become
                    permanently visible on public blockchains.
                </p>

                <p className="mb-6">
                    Avvio cannot modify, delete, or obscure this information once it is recorded on-chain.
                </p>

                {/* Section 6 */}
                <h2 className="text-white font-medium mt-12 mb-4 text-[20px] tracking-tight">
                    6. Data Sharing
                </h2>

                <p className="mb-6">
                    We share information only as necessary with service providers, financial partners,
                    infrastructure vendors, and legal authorities where required by law.
                </p>

                <p className="mb-6">
                    Such sharing is limited to what is reasonably necessary to provide the Service,
                    meet regulatory obligations, or protect Avvio, our users, and partners from fraud or security risks.
                </p>

                {/* Section 7 */}
                <h2 className="text-white font-medium mt-12 mb-4 text-[20px] tracking-tight">
                    7. International Data Transfers
                </h2>

                <p className="mb-6">
                    Avvio operates globally. Your information may be processed in the United States
                    or other jurisdictions where our service providers operate.
                </p>

                <p className="mb-6">
                    We take reasonable measures to ensure appropriate safeguards are in place for
                    cross-border data transfers in accordance with applicable data protection laws.
                </p>

                {/* Section 8 */}
                <h2 className="text-white font-medium mt-12 mb-4 text-[20px] tracking-tight">
                    8. Data Retention
                </h2>

                <p className="mb-6">
                    We retain personal information only for as long as necessary to provide the Service,
                    comply with legal requirements, resolve disputes, and enforce agreements.
                </p>

                <p className="mb-6">
                    Public blockchain-related data such as wallet addresses and transactions remain
                    permanently available and cannot be deleted.
                </p>

                {/* Section 9 */}
                <h2 className="text-white font-medium mt-12 mb-4 text-[20px] tracking-tight">
                    9. Security
                </h2>

                <p className="mb-6">
                    Avvio implements administrative, technical, and organizational measures to
                    protect information against unauthorized access, loss, or misuse.
                </p>

                <p className="mb-6">
                    Despite these measures, no system is completely secure and we cannot guarantee
                    absolute security of information.
                </p>

                {/* Section 10 */}
                <h2 className="text-white font-medium mt-12 mb-4 text-[20px] tracking-tight">
                    10. Your Rights
                </h2>

                <p className="mb-6">
                    Depending on your jurisdiction, you may have rights to access, correct, delete,
                    or restrict your personal information.
                </p>

                {/* Section 11 */}
                <h2 className="text-white font-medium mt-12 mb-4 text-[20px] tracking-tight">
                    11. Age Restrictions
                </h2>

                <p className="mb-6">
                    Avvio is not intended for individuals under the age of eighteen (18).
                </p>

                {/* Section 12 */}
                <h2 className="text-white font-medium mt-12 mb-4 text-[20px] tracking-tight">
                    12. Changes to This Policy
                </h2>

                <p className="mb-6">
                    We may update this Privacy Policy from time to time. Continued use of the Service
                    constitutes acceptance of the revised policy.
                </p>

                {/* Section 13 */}
                <h2 className="text-white font-medium mt-12 mb-4 text-[20px] tracking-tight">
                    13. Contact
                </h2>

                <p className="mb-2">Anzo Labs, Inc.</p>
                <p className="mb-2">support@avvio.xyz</p>
                <p className="mb-4">https://avvio.xyz</p>

                <p className="mb-6">
                    Anzo Labs, Inc. is a financial technology company and not a bank. Fiat services
                    and card programs are provided by licensed partners.
                </p>

                <p className="text-[#6B7280] text-sm mt-12">
                    © 2026 Anzo Labs, Inc. All rights reserved.
                </p>

            </div>
        </div>
    );
};

export default Privacy;