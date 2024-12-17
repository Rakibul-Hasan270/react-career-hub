import contact from '../../assets/images/contact.png';

const ContactUs = () => {
    return (
        <section className="py-16 bg-gray-100 mt-9">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800">Contact Us</h2>
                    <p className="text-lg text-gray-600 mt-4">
                        Have questions or need help? Feel free to reach out to us. We are here to assist you!
                    </p>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-12">
                    <div className="w-full md:w-1/2">
                        <img
                            src={contact}
                            alt="Contact Us"
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                    </div>

                    {/* Right Section: Contact Form */}
                    <div className="w-full md:w-1/2 bg-white p-8 rounded-lg shadow-lg">
                        <form className="space-y-6">
                            <div>
                                <label className="block text-lg font-medium text-gray-800 mb-2" htmlFor="name">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Enter your name"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                                />
                            </div>

                            <div>
                                <label className="block text-lg font-medium text-gray-800 mb-2" htmlFor="email">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                                />
                            </div>

                            <div>
                                <label className="block text-lg font-medium text-gray-800 mb-2" htmlFor="subject">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    placeholder="Enter subject"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                                />
                            </div>

                            <div>
                                <label className="block text-lg font-medium text-gray-800 mb-2" htmlFor="message">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows="5"
                                    placeholder="Write your message here"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-cyan-500 text-white py-3 rounded-lg font-semibold hover:bg-cyan-600 transition duration-300"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
