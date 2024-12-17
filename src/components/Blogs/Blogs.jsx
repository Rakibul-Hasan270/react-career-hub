const Blog = () => {
    const blogPosts = [
        {
            id: 1,
            image: "https://i.postimg.cc/QN5RqX7j/responcive.webp",
            title: "How to Build Responsive Websites",
            description:
                "Learn the key principles and techniques to build responsive websites that look great on any device.",
            link: "/blog/build-responsive-websites",
        },
        {
            id: 2,
            image: "https://i.postimg.cc/4dHjqGFb/fremwork.webp",
            title: "Top 10 JavaScript Frameworks in 2024",
            description:
                "Explore the most popular JavaScript frameworks to use for your projects in 2024 and beyond.",
            link: "/blog/javascript-frameworks-2024",
        },
        {
            id: 3,
            image: "https://i.postimg.cc/PrbndtfS/modern.webp",
            title: "Design Tips for Modern Websites",
            description:
                "Discover essential design tips that will help you create modern and visually appealing websites.",
            link: "/blog/design-tips-modern-websites",
        },
    ];

    return (
        <section className="py-16 bg-gray-100 mt-8">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800">Our Blog</h2>
                    <p className="text-lg text-gray-600 mt-4">
                        Stay updated with the latest trends, tips, and tutorials in web development and design.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-gray-800">{post.title}</h3>
                                <p className="text-gray-600 mt-4">{post.description}</p>
                                <a
                                    href={post.link}
                                    className="inline-block mt-4 text-cyan-500 font-semibold hover:underline"
                                >
                                    Read More →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
