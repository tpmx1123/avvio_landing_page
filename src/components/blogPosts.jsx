
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const blogPosts = [
    {
        id: 1,
        title: "The future of global banking",
        description:
            "How modern financial platforms are redefining global money movement.",
        content:
            "Global banking is evolving rapidly with fintech innovation. Platforms like Avvio allow users to send, receive, and invest money globally without friction. This shift is removing borders and creating a unified financial ecosystem.",
        date: "March 20, 2026",
        image: "https://images.unsplash.com/photo-1559526324-593bc073d938",
    },
    {
        id: 2,
        title: "Why traditional banks are failing",
        description:
            "Understanding the limitations of legacy systems in a global world.",
        content:
            "Traditional banks are slow, expensive, and not designed for global users. Fintech platforms provide faster, cheaper, and more transparent alternatives, making them the preferred choice for modern users.",
        date: "March 18, 2026",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
    },
    {
        id: 3,
        title: "Crypto + Fiat: The new normal",
        description:
            "How hybrid financial systems are becoming the future of finance.",
        content:
            "The integration of crypto and fiat is redefining finance. Users now expect seamless transitions between currencies, investments, and payments—all in one platform.",
        date: "March 15, 2026",
        image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040",
    },
];

export default function Blog() {
    const { id } = useParams();

    const post = blogPosts.find((p) => p.id === Number(id));
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    return (
        <>
            <div className="bg-black text-white min-h-screen">
                <Navbar useColorLogo={true} />

                {/* 👉 If NO id → Show Blog List */}
                {!id && (
                    <>
                        {/* Header */}
                        <section className="px-5 md:px-16 pt-28 md:pt-32 pb-12 md:pb-16">
                            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
                                Blog
                            </h1>
                            <p className="text-gray-400 mt-4 max-w-xl text-[15px] md:text-base">
                                Insights, ideas, and updates from the future of global finance.
                            </p>
                        </section>

                        {/* Blog Cards */}
                        <section className="px-5 md:px-16 pb-24 md:pb-28">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                                {blogPosts.map((post) => (
                                    <Link
                                        key={post.id}
                                        to={`/blog/${post.id}`}
                                        className="border border-gray-800 rounded-2xl p-4 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-gray-600 transition transform hover:scale-[1.02] block"
                                    >
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="rounded-xl mb-4 w-full h-44 md:h-40 object-cover opacity-90"
                                        />

                                        <p className="text-sm text-gray-500 mb-2">
                                            {post.date}
                                        </p>

                                        <h3 className="text-lg font-semibold mb-2">
                                            {post.title}
                                        </h3>

                                        <p className="text-gray-400 text-sm">
                                            {post.description}
                                        </p>
                                    </Link>
                                ))}
                            </div>
                        </section>
                    </>
                )}

                {/* 👉 If id exists → Show Detail Page */}
                {id && post && (
                    <section className="px-5 md:px-16 pt-28 md:pt-32 pb-24 md:pb-20 max-w-3xl mx-auto">
                        <Link
                            to="/blog"
                            className="text-gray-400 hover:text-white mb-6 inline-block"
                        >
                            ← Back to Blog
                        </Link>

                        <img
                            src={post.image}
                            alt={post.title}
                            className="rounded-xl mb-6 w-full h-52 md:h-64 object-cover"
                        />

                        <p className="text-gray-500 mb-3">{post.date}</p>

                        <h1 className="text-[34px] md:text-5xl leading-tight font-semibold mb-6">
                            {post.title}
                        </h1>

                        <p className="text-gray-400 leading-relaxed text-[17px] md:text-lg">
                            {post.content}
                        </p>
                    </section>
                )}
            </div>
            <Footer />
        </>
    );
}