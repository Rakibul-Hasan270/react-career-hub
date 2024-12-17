import PropTypes from 'prop-types';
import { IoLocationOutline } from "react-icons/io5";
import { FaMagnifyingGlassDollar } from "react-icons/fa6";


const FeaturedJobContainer = ({ data }) => {

    const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary, } = data;

    return (
        <div className="card card-compact shadow-xl border p-6">
            <img src={logo} alt="" className="w-28 h-16" />
            <div className="mt-5 space-y-2">
                <h2 className="text-xl font-bold">{job_title}</h2>
                <p className='text-xl font-light'>{company_name}</p>
                <div className="flex gap-4">
                    <button className="btn border-[gradient-to-r from-teal-400 to-blue-500]">{remote_or_onsite}</button>
                    <button className="btn bg-gradient-to-r from-teal-400 to-blue-500">{job_type}</button>
                </div>
                <div className='flex gap-10'>
                    <h4 className='flex items-center gap-1 font-semibold'><IoLocationOutline /> {location}</h4>
                    <h4 className='flex items-center gap-1 font-semibold'><FaMagnifyingGlassDollar />Salary: {salary}</h4>
                </div>
                <div className="card-actions justify-start">
                    <button className="btn bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500">View Details</button>
                </div>
            </div>
        </div>

    );
};

FeaturedJobContainer.propTypes = {
    data: PropTypes.object.isRequired
}

export default FeaturedJobContainer;