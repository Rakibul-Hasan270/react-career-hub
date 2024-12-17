import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-10 mt-10">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* About Section */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">About Us</h3>
                        <p className="text-gray-400 text-sm">
                            We are committed to providing the best job opportunities for talented professionals. Join us in building your future.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="/about" className="text-gray-400 hover:text-cyan-400 transition duration-300">About Us</a></li>
                            <li><a href="/jobs" className="text-gray-400 hover:text-cyan-400 transition duration-300">Browse Jobs</a></li>
                            <li><a href="/contact" className="text-gray-400 hover:text-cyan-400 transition duration-300">Contact</a></li>
                            <li><a href="/privacy" className="text-gray-400 hover:text-cyan-400 transition duration-300">Privacy Policy</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">Contact</h3>
                        <p className="text-gray-400 text-sm">1234 Street Name, City, Country</p>
                        <p className="text-gray-400 text-sm">Email: support@company.com</p>
                        <p className="text-gray-400 text-sm">Phone: +123 456 7890</p>
                    </div>

                    {/* Social Media */}
                    <div className="flex items-center space-x-4">
                        <h3 className="text-2xl font-semibold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-cyan-400 transition duration-300">
                                <FaFacebook size={24} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-cyan-400 transition duration-300">
                                <FaTwitter size={24} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-cyan-400 transition duration-300">
                                <FaInstagram size={24} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-cyan-400 transition duration-300">
                                <FaLinkedin size={24} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Company Name. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
