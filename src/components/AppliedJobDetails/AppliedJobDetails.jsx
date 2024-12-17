import { useLoaderData, useParams } from "react-router";
import { AiTwotoneDollar } from "react-icons/ai";
import { CiCalendar } from "react-icons/ci";
import { MdLocalPhone } from "react-icons/md";
import { AiTwotoneMail } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";

const AppliedJobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);

    const job = jobs.find(job => job.id === idInt);
    const { job_description, job_responsibility, educational_requirements, experiences, salary, job_title, contact_information } = job;

    return (
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 min-h-screen mt-9">
            <h1 className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                Job Details
            </h1>
            <div className="max-w-7xl mx-auto grid gap-4 p-4 md:grid-cols-4">
                <div className="col-span-3 space-y-5 bg-white p-6 shadow-md rounded-lg">
                    <h3 className="text-xl">
                        <span className="text-xl font-bold">Job Description: </span>{job_description}
                    </h3>
                    <h3 className="text-xl">
                        <span className="text-xl font-bold">Job Responsibility: </span>{job_responsibility}
                    </h3>
                    <h3 className="text-xl">
                        <span className="text-xl font-bold">Educational Requirements: </span>{educational_requirements}
                    </h3>
                    <h3 className="text-xl">
                        <span className="text-xl font-bold">Experiences: </span>{experiences}
                    </h3>
                </div>

                <div className="p-6 space-y-5 bg-gradient-to-b from-cyan-100 to-blue-50 shadow-md rounded-lg self-start md:self-auto md:justify-self-auto">
                    <h2 className="border-b-2 pb-3 text-xl font-bold">Job Details</h2>

                    <h3 className="flex items-center gap-2">
                        <AiTwotoneDollar className="text-cyan-600 text-xl font-bold" />
                        <span className="text-xl font-semibold">Salary:</span> {salary}
                    </h3>

                    <h3 className="flex items-center gap-2">
                        <CiCalendar className="text-cyan-600 text-2xl font-bold" />
                        <span className="text-xl font-semibold">Job Title:</span> {job_title}
                    </h3>

                    <h3 className="border-b-2 pb-3 text-xl font-bold">Contact Information</h3>

                    <h3 className="flex items-center gap-2">
                        <MdLocalPhone className="text-cyan-600 text-xl font-bold" />
                        <span className="text-xl font-semibold">Phone:</span> {contact_information.phone}
                    </h3>

                    <h3 className="flex items-center gap-2">
                        <AiTwotoneMail className="text-cyan-600 text-xl font-bold" />
                        <span className="text-xl font-semibold">Email:</span> {contact_information.email}
                    </h3>

                    <h3 className="flex items-center gap-2">
                        <IoLocationOutline className="text-cyan-600 text-2xl font-bold" />
                        <span className="text-xl font-semibold">Address:</span> {contact_information.address}
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default AppliedJobDetails;