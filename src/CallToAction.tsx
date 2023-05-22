import { Link } from 'react-router-dom';

const CallToAction = () => {
    return (
        <>
            <Link to="/form" className="flex bg-blue-400 text-white p-4 mt-4 rounded-md md:w-56">Contactez nos conseillers</Link>
        </>
    );
};

export default CallToAction;