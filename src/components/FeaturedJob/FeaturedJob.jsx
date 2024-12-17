import { useEffect } from "react";
import { useState } from "react";
import FeaturedJobContainer from "../FeaturedJobContainer/FeaturedJobContainer";

const FeaturedJob = () => {
    const [data, setData] = useState([]);
    const [dataLength, setDataLength] = useState(4);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    return (
        <div className="mt-14">
            <h3 className="text-center text-3xl font-bold">Featured Jobs</h3>
            <p className="text-center mt-4 text-gray-600">
                Explore thousands of job opportunities with all the information you need. Its your future
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-7">
                {
                    data.slice(0, dataLength).map(data => <FeaturedJobContainer key={data.id} data={data}></FeaturedJobContainer>)
                }
            </div>
            <div className={dataLength === data.length && 'hidden'}>
                <div className="flex justify-center mt-8">
                    <button onClick={() => setDataLength(data.length)} className='btn bg-gradient-to-r from-cyan-500 to-blue-500'>Show More</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedJob;