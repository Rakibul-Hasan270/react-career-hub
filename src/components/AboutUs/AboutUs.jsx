import about from '../../assets/images/about.jpg'

const AboutUs = () => {
    return (
        <section className="py-16 bg-gray-100 mt-9">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
                    <div className="w-full md:w-1/2">
                        <img
                            src={about}
                            alt="About Us"
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                    </div>

                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">আমাদের কোম্পানি সম্পর্কে</h2>
                        <p className="text-lg text-gray-600 mb-6">
                            আমরা একটি কোম্পানি যা সকল আকারের ব্যবসার জন্য উদ্ভাবনী সমাধান প্রদান করতে প্রতিশ্রুতিবদ্ধ। আমাদের লক্ষ্য হল প্রতিষ্ঠানগুলিকে তাদের লক্ষ্য অর্জনে সহায়তা করা, বিশ্বস্ত সেবা এবং বিশেষজ্ঞ পরামর্শ প্রদান করে।
                        </p>
                        <p className="text-lg text-gray-600 mb-6">
                            একটি শক্তিশালী পেশাদার দলের সঙ্গে আমরা বিভিন্ন ক্ষেত্রে শীর্ষস্থানীয় সেবা প্রদান করি যেমন মার্কেটিং, ডেভেলপমেন্ট এবং কনসাল্টিং। আমাদের উদ্দেশ্য হল আমাদের ক্লায়েন্টদের সাথে দীর্ঘস্থায়ী অংশীদারিত্ব গঠন করা এবং অসাধারণ ফলাফল প্রদান করা।
                        </p>
                        <a
                            href="/contact"
                            className="inline-block bg-cyan-500 text-white py-2 px-6 rounded-lg font-semibold hover:bg-cyan-600 transition duration-300"
                        >
                            আমাদের সাথে যোগাযোগ করুন
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
