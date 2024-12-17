import accountsIcon from '../../assets/icons/accounts.png';
import creative from '../../assets/icons/creative.png';
import marketing from '../../assets/icons/marketing.png';
import chip from '../../assets/icons/chip.png';


const Category = () => {
    return (
        <div className="mt-12 px-4">
            <h3 className="text-center text-3xl font-bold">Job Category List</h3>
            <p className="text-center mt-4 text-gray-600">
                Explore thousands of job opportunities with all the information you need. Its your future.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mt-8 mx-auto">
                <div className="w-full sm:w-[256px] p-6 md:p-8 lg:p-10 bg-gradient-to-r from-teal-400 to-blue-500 text-center mx-auto rounded-lg">
                    <img className="mb-3 mx-auto" src={accountsIcon} alt="Accounts Icon" />
                    <h3 className="text-2xl font-bold text-white">Account & Finance</h3>
                    <p className="text-xl font-light text-gray-300">300 Jobs Available</p>
                </div>
                <div className="w-full sm:w-[256px] p-6 md:p-8 lg:p-10 bg-gradient-to-r from-teal-400 to-blue-500 text-center mx-auto rounded-lg">
                    <img className="mb-3 mx-auto" src={creative} alt="Creative Icon" />
                    <h3 className="text-2xl font-bold text-white">Creative Design</h3>
                    <p className="text-xl font-light text-gray-300">100+ Jobs Available</p>
                </div>
                <div className="w-full sm:w-[256px] p-6 md:p-8 lg:p-10 bg-gradient-to-r from-teal-400 to-blue-500 text-center mx-auto rounded-lg">
                    <img className="mb-3 mx-auto" src={marketing} alt="Marketing Icon" />
                    <h3 className="text-2xl font-bold text-white">Marketing & Sales</h3>
                    <p className="text-xl font-light text-gray-300">150 Jobs Available</p>
                </div>
                <div className="w-full sm:w-[256px] p-6 md:p-8 lg:p-10 bg-gradient-to-r from-teal-400 to-blue-500 text-center mx-auto rounded-lg">
                    <img className="mb-3 mx-auto" src={chip} alt="Engineering Icon" />
                    <h3 className="text-2xl font-bold text-white">Engineering Job</h3>
                    <p className="text-xl font-light text-gray-300">224 Jobs Available</p>
                </div>
            </div>

        </div>
    );
};

export default Category;