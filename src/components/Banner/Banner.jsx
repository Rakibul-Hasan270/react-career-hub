import userImage from '../../assets/images/user.png';

const Banner = () => {
    return (
        <div>
            <div className="hero py-12">
                <div className="hero-content flex-col lg:flex-row-reverse items-center lg:items-start text-center lg:text-left">
                    <img
                        src={userImage}
                        alt="User"
                        className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                            One Step Closer To Your <br />
                            <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                                Dream Job
                            </span>
                        </h1>
                        <p className="py-6">
                            Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
                        </p>
                        <button className="btn bg-gradient-to-r from-cyan-800 to-blue-800">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
