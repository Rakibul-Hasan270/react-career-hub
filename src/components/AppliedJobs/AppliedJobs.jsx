import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getStoredCart } from "../Utility/LocalStg";
import AppliedJobFromStg from "../AppliedJobFromStg/AppliedJobFromStg";

const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [jobApplied, setJobApplied] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);

    const handleAppliedJobs = (filter) => {
        switch (filter) {
            case 'remote':
                setDisplayJobs(jobApplied.filter(job => job.remote_or_onsite === 'Remote'));
                break;
            case 'onsite':
                setDisplayJobs(jobApplied.filter(job => job.remote_or_onsite === 'Onsite'));
                break;
            default:
                setDisplayJobs(jobApplied);
        }
    };

    useEffect(() => {
        const storedJobIds = getStoredCart();
        if (jobs.length) {
            const appliedJobs = jobs.filter(job => storedJobIds.includes(job.id));
            setJobApplied(appliedJobs);
            setDisplayJobs(appliedJobs);
        }
    }, [jobs]);

    return (
        <div className="mt-10 max-w-7xl mx-auto px-6 md:px-8">
            <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
                Applied Jobs
            </h1>

            {/* Filter Section */}
            <div className="flex justify-between items-center mb-8">
                <p className="text-gray-600 text-sm md:text-base">
                    Easily manage your applied jobs below:
                </p>
                <div className="dropdown dropdown-end">
                    <label
                        tabIndex={0}
                        className="btn bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-400 hover:to-purple-400 px-6 py-2 rounded-lg shadow-lg text-sm md:text-base">
                        Filter Jobs
                    </label>
                    <ul
                        tabIndex={0}
                        className="dropdown-content menu p-2 shadow bg-white rounded-box w-52 border border-gray-200 z-10">
                        <li>
                            <button onClick={() => handleAppliedJobs('all')} className="hover:bg-gray-100 px-4 py-2 rounded">
                                All
                            </button>
                        </li>
                        <li>
                            <button onClick={() => handleAppliedJobs('remote')} className="hover:bg-gray-100 px-4 py-2 rounded">
                                Remote
                            </button>
                        </li>
                        <li>
                            <button onClick={() => handleAppliedJobs('onsite')} className="hover:bg-gray-100 px-4 py-2 rounded">
                                Onsite
                            </button>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Applied Jobs List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {displayJobs.length > 0 ? (
                    displayJobs.map(job => (
                        <AppliedJobFromStg key={job.id} job={job} />
                    ))
                ) : (
                    <p className="text-center text-gray-500 col-span-full">
                        No jobs found. Try a different filter.
                    </p>
                )}
            </div>
        </div>
    );
};

export default AppliedJobs;
