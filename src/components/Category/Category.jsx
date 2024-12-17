import accountsIcon from '../../assets/icons/accounts.png';
import creative from '../../assets/icons/creative.png';
import marketing from '../../assets/icons/marketing.png';
import chip from '../../assets/icons/chip.png';

const Category = () => {
    return (
        <div className="mt-12 px-4">
            <h3 className="text-center text-4xl font-bold text-gray-800">Job Category List</h3>
            <p className="text-center mt-4 text-gray-600 max-w-2xl mx-auto">
                Explore thousands of job opportunities with all the information you need. Its your future—take charge!
            </p>

            <div className="flex flex-wrap justify-center gap-8 mt-12">
                <div className="w-full sm:w-[256px] p-8 bg-gradient-to-r from-purple-500 to-indigo-500 hover:scale-105 transition-transform duration-300 shadow-lg rounded-lg cursor-pointer text-center">
                    <img className="mb-5 mx-auto w-16 h-16" src={accountsIcon} alt="Accounts Icon" />
                    <h3 className="text-2xl font-bold text-white">Account & Finance</h3>
                    <p className="text-lg font-light text-gray-200 mt-2">300+ Jobs Available</p>
                </div>

                <div className="w-full sm:w-[256px] p-8 bg-gradient-to-r from-teal-500 to-cyan-500 hover:scale-105 transition-transform duration-300 shadow-lg rounded-lg cursor-pointer text-center">
                    <img className="mb-5 mx-auto w-16 h-16" src={creative} alt="Creative Icon" />
                    <h3 className="text-2xl font-bold text-white">Creative Design</h3>
                    <p className="text-lg font-light text-gray-200 mt-2">100+ Jobs Available</p>
                </div>

                <div className="w-full sm:w-[256px] p-8 bg-gradient-to-r from-blue-500 to-cyan-500 hover:scale-105 transition-transform duration-300 shadow-lg rounded-lg cursor-pointer text-center">
                    <img className="mb-5 mx-auto w-16 h-16" src={marketing} alt="Marketing Icon" />
                    <h3 className="text-2xl font-bold text-white">Marketing & Sales</h3>
                    <p className="text-lg font-light text-gray-200 mt-2">150+ Jobs Available</p>
                </div>

                <div className="w-full sm:w-[256px] p-8 bg-gradient-to-r from-green-500 to-teal-500 hover:scale-105 transition-transform duration-300 shadow-lg rounded-lg cursor-pointer text-center">
                    <img className="mb-5 mx-auto w-16 h-16" src={chip} alt="Engineering Icon" />
                    <h3 className="text-2xl font-bold text-white">Engineering Job</h3>
                    <p className="text-lg font-light text-gray-200 mt-2">224+ Jobs Available</p>
                </div>
            </div>
        </div>
    );
};

export default Category;
