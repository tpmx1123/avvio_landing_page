import { useState } from "react";

const faqData = [
    {
        question: "What is Avvio and how does it work?",
        answer:
            "Avvio is a global financial platform that lets you send, receive, spend, and invest money from a single unified account.",
    },
    {
        question: "Is Avvio a bank?",
        answer:
            "No, Avvio is not a traditional bank. It combines banking, payments, and investing into one modern platform.",
    },
    {
        question: "Can I receive international payments?",
        answer:
            "Yes, you can receive payments globally using local account details like IBAN and supported currencies.",
    },
    {
        question: "Does Avvio offer a global card?",
        answer:
            "Yes, you get a virtual and physical card that works worldwide with zero foreign exchange fees.",
    },
    {
        question: "Is my money safe with Avvio?",
        answer:
            "Yes, Avvio uses secure infrastructure and gives users full control with self-custody features.",
    },
];

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="w-full py-10 px-6 md:px-16 bg-black text-white">
            <div className="max-w-4xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
                        Frequently Asked Questions
                    </h2>
                </div>

                {/* FAQ Items */}
                <div className="space-y-4">
                    {faqData.map((item, index) => (
                        <div
                            key={index}
                            className="border border-gray-800 rounded-2xl bg-white/5 backdrop-blur-md"
                        >
                            <button
                                onClick={() => toggle(index)}
                                className="w-full flex justify-between items-center p-5 text-left"
                            >
                                <span className="text-lg font-medium">
                                    {item.question}
                                </span>
                                <span className="text-xl">
                                    {activeIndex === index ? "−" : "+"}
                                </span>
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ${activeIndex === index ? "max-h-40 px-5 pb-5" : "max-h-0"
                                    }`}
                            >
                                <p className="text-gray-400">{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}