import PropTypes from 'prop-types';
import { IoLocationOutline } from "react-icons/io5";
import { FaMagnifyingGlassDollar } from "react-icons/fa6";
import { Link } from 'react-router';

const FeaturedJobContainer = ({ data }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = data;

    return (
        <div className="card card-compact shadow-xl border p-6 rounded-lg hover:shadow-2xl transition-shadow duration-300">
            <img src={logo} alt={`${company_name} logo`} className="w-28 h-16 mx-auto" />
            <div className="mt-4 space-y-3">
                <h2 className="text-xl font-semibold text-gray-800">{job_title}</h2>
                <p className="text-lg font-light text-gray-600">{company_name}</p>
                <div className="flex gap-4 mt-2 flex-wrap">
                    <button className="btn border-cyan-400 hover:bg-gradient-to-r from-cyan-500 to-blue-500 text-sm md:text-base">{remote_or_onsite}</button>
                    <button className="btn border-cyan-400 hover:bg-gradient-to-r from-cyan-500 to-blue-500 text-sm md:text-base">{job_type}</button>
                </div>
                <div className='flex gap-6 mt-3 flex-wrap'>
                    <h4 className='flex items-center gap-1 font-semibold text-sm text-gray-700'>
                        <IoLocationOutline /> {location}
                    </h4>
                    <h4 className='flex items-center gap-1 font-semibold text-sm text-gray-700'>
                        <FaMagnifyingGlassDollar /> Salary: {salary}
                    </h4>
                </div>
                <div className="card-actions mt-4">
                    <Link to={`/job/${id}`}>
                        <button className="btn bg-gradient-to-r from-cyan-400 to-blue-400 hover:bg-gradient-to-l from-blue-400 to-cyan-400 text-white text-sm md:text-base">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

FeaturedJobContainer.propTypes = {
    data: PropTypes.object.isRequired
};

export default FeaturedJobContainer;
