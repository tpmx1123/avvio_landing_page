import React from "react";
import { Link } from "react-router-dom";
import { useLayoutEffect } from "react";

const Brand = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="bg-black text-white min-h-screen relative">

            {/* CLOSE BUTTON - FIXED */}
            <Link
                to="/"
                className="fixed top-6 right-6 z-[9999] flex items-center justify-center w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition"
            >
                <span className="text-[28px] font-light leading-none -mt-[1px] text-white">
                    ×
                </span>
            </Link>

            {/* LOGO (TOP LEFT) */}
            <div className="absolute top-8 left-8">
                <img
                    src="https://res.cloudinary.com/di4caiech/image/upload/v1774411856/Icon_Color_4x-removebg-preview_wxqq4d.png"
                    alt="logo"
                    className="w-8 h-8 object-contain"
                />
            </div>

            {/* CENTER CONTENT */}
            <div className="max-w-4xl mx-auto pt-32 px-6">
                {/* TITLE */}
                <h1 className="text-[36px] md:text-[44px] font-semibold mb-4 tracking-tight">
                    Brand assets
                </h1>

                {/* BUTTON */}
                <a
                    href="https://drive.google.com/drive/folders/1OPAM_aYolqXyr34Z9aMCpet9tEnEbec9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#B4FF00] text-black px-6 py-2 rounded-full text-[14px] font-medium hover:scale-105 transition"
                >
                    Download logos
                </a>

            </div>

            {/* BRAND BLOCKS */}
            <div className="max-w-4xl mx-auto mt-20 px-6 pb-24">

                <div className="overflow-hidden rounded-xl shadow-lg">

                    {/* DARK */}
                    <div className="bg-[#0D1512] py-16 px-16">
                        <div className="flex items-center gap-2 mb-4">
                            <img
                                src="https://res.cloudinary.com/di4caiech/image/upload/v1774411856/Icon_Color_4x-removebg-preview_wxqq4d.png"
                                className="w-10 h-10 object-contain brightness-0 invert"
                            />
                            <span className="text-white text-[34px] font-bold tracking-tight">avvio</span>
                        </div>
                        <p className="text-gray-500 text-[11px] font-medium tracking-[0.2em] font-mono">
                            WHITE ON DARK
                        </p>
                    </div>

                    {/* GREEN */}
                    <div className="bg-[#B4FF00] py-16 px-16">
                        <div className="flex items-center gap-2 mb-4">
                            <img
                                src="https://res.cloudinary.com/di4caiech/image/upload/v1774411856/Icon_Color_4x-removebg-preview_wxqq4d.png"
                                className="w-[32px] brightness-0"
                            />
                            <span className="text-black text-[34px] font-bold tracking-tight">avvio</span>
                        </div>
                        <p className="text-black/60 text-[11px] font-medium tracking-[0.2em] font-mono">
                            DARK ON GREEN
                        </p>
                    </div>

                    {/* LIGHT */}
                    <div className="bg-[#F5F5F7] py-16 px-16">
                        <div className="flex items-center gap-2 mb-4">
                            <img
                                src="https://res.cloudinary.com/di4caiech/image/upload/v1774411856/Icon_Color_4x-removebg-preview_wxqq4d.png"
                                className="w-[32px] brightness-0"
                            />
                            <span className="text-black text-[34px] font-bold tracking-tight">avvio</span>
                        </div>
                        <p className="text-gray-400 text-[11px] font-medium tracking-[0.2em] font-mono">
                            DARK ON LIGHT
                        </p>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Brand;