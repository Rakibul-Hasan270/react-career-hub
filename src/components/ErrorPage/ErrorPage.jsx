import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const navigate = useNavigate(); // useNavigate() replaces useHistory() in v6

    const handleGoBack = () => {
        navigate(-1); // Go back one step in the history stack
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-800 text-white px-4">
            <div className="text-center max-w-lg w-full bg-gray-900 p-8 rounded-lg shadow-lg">
                <h1 className="text-6xl font-bold text-red-500">404</h1>
                <h2 className="text-3xl font-semibold mt-4">Oops! Page Not Found</h2>
                <p className="mt-2 text-lg text-gray-400">Sorry, the page you are looking for does not exist or has been moved.</p>

                <div className="mt-6">
                    <button
                        onClick={handleGoBack}
                        className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
                    >
                        Go Back
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
