import userImage from '../../assets/images/user.png';

const Banner = () => {
    return (
        <div className="min-w-[200px]">
            <div className="hero py-8 md:py-12">
                <div className="hero-content flex flex-col lg:flex-row-reverse items-center lg:items-start text-center lg:text-left gap-6 lg:gap-12">
                    <img
                        src={userImage}
                        alt="User"
                        className="w-full max-w-[200px] sm:max-w-[300px] md:max-w-sm rounded-lg shadow-2xl"
                    />
                    <div>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                            One Step Closer To Your <br />
                            <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                                Dream Job
                            </span>
                        </h1>
                        <p className="py-4 sm:py-6 text-sm sm:text-base lg:text-lg">
                            Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job applications from start to finish.
                        </p>
                        <button className="btn bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
