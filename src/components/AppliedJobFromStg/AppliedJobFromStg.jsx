import PropTypes from "prop-types";
import { IoLocationOutline } from "react-icons/io5";
import { FaMagnifyingGlassDollar } from "react-icons/fa6";
import { Link } from "react-router";

const AppliedJobFromStg = ({ job }) => {
    const { id, company_name, logo, job_title, job_type, location, remote_or_onsite, salary } = job;

    return (
        <div className="max-w-7xl mx-auto bg-white shadow-md hover:shadow-lg rounded-lg p-6 mb-6 transition-shadow duration-300">
            {/* Container for Job Info */}
            <div className="flex flex-col md:flex-row gap-6 items-center">

                {/* Logo Section */}
                <div className="flex-shrink-0 w-32 h-32 bg-gray-50 flex items-center justify-center rounded-lg shadow-inner">
                    <img
                        className="object-contain w-20 h-20 md:w-24 md:h-24"
                        src={logo}
                        alt={`${company_name} logo`}
                    />
                </div>

                {/* Job Details */}
                <div className="flex-1">
                    <div className="mb-4">
                        <h3 className="text-xl font-bold text-gray-800">{job_title}</h3>
                        <p className="text-gray-500">{company_name}</p>
                    </div>

                    {/* Job Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-4 py-2 border border-blue-400 text-blue-500 rounded-full text-sm font-medium">
                            {remote_or_onsite}
                        </span>
                        <span className="px-4 py-2 border border-blue-400 text-blue-500 rounded-full text-sm font-medium">
                            {job_type}
                        </span>
                    </div>

                    {/* Location and Salary */}
                    <div className="flex flex-col md:flex-row gap-4 text-gray-600">
                        <div className="flex items-center gap-2">
                            <IoLocationOutline className="text-blue-500" />
                            <span>{location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaMagnifyingGlassDollar className="text-blue-500" />
                            <span>Salary: {salary}</span>
                        </div>
                    </div>
                </div>

                {/* Action Button */}
                <div className="flex-shrink-0">
                    <Link to={`/details/${id}`}><button className="px-6 py-3 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-700 hover:to-blue-700 rounded-full shadow-md text-base font-semibold transition-all duration-300 transform hover:scale-105">
                        View Details
                    </button></Link>
                </div>
            </div>
        </div>
    );
};

AppliedJobFromStg.propTypes = {
    job: PropTypes.object.isRequired,
};

export default AppliedJobFromStg;
