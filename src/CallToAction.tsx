import { Link } from 'react-router-dom';

const CallToAction = () => {
    return (
        <>
            <Link to="/form" className="bg-blue-600 text-white p-4 rounded-md md:w-44">Start planning now</Link>
        </>
    );
};

export default CallToAction;