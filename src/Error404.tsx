import { Link } from "react-router-dom";

const Error404 = () => {
    return (
        <div className="flex flex-col justify-center items-center flex-grow">
            <p className="text-5xl font-weight">ERREUR 404</p>

            <p>Il semble que cette page n'existe pas!</p>

            <Link to="/" className="text-red-800">Retourner à l'acceuil</Link>
        </div>
    );
};

export default Error404;