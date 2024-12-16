import accountsIcon from '../../assets/icons/accounts.png';
import creative from '../../assets/icons/creative.png';
import marketing from '../../assets/icons/marketing.png';
import chip from '../../assets/icons/chip.png';


const Category = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <div className="w-full max-w-[256px] p-6 md:p-8 lg:p-10 bg-cyan-800 text-center mx-auto">
                <img className="mb-3 mx-auto" src={accountsIcon} alt="Accounts Icon" />
                <h3 className="text-2xl font-bold">Account & Finance</h3>
                <p className="text-xl font-light">300 Jobs Available</p>
            </div>
            <div className="w-full max-w-[256px] p-6 md:p-8 lg:p-10 bg-cyan-800 text-center mx-auto">
                <img className="mb-3 mx-auto" src={creative} alt="Creative Icon" />
                <h3 className="text-2xl font-bold">Creative Design</h3>
                <p className="text-xl font-light">100+ Jobs Available</p>
            </div>
            <div className="w-full max-w-[256px] p-6 md:p-8 lg:p-10 bg-cyan-800 text-center mx-auto">
                <img className="mb-3 mx-auto" src={marketing} alt="Marketing Icon" />
                <h3 className="text-2xl font-bold">Marketing & Sales</h3>
                <p className="text-xl font-light">150 Jobs Available</p>
            </div>
            <div className="w-full max-w-[256px] p-6 md:p-8 lg:p-10 bg-cyan-800 text-center mx-auto">
                <img className="mb-3 mx-auto" src={chip} alt="Engineering Icon" />
                <h3 className="text-2xl font-bold">Engineering Job</h3>
                <p className="text-xl font-light">224 Jobs Available</p>
            </div>
        </div>

    );
};

export default Category;