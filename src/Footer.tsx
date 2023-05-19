import { Link } from 'react-router-dom';
import { AiFillPhone } from 'react-icons/ai';
import { IoLocationSharp } from 'react-icons/io5';

const Footer = () => {
    return (
        <div className="border-t border-gray-100 flex flex-col p-8 gap-4 mt-auto md:flex-row md:justify-evenly">
            <div className="flex-col flex gap-2">
                <h3 className="font-bold">Informations</h3>
                <Link to="/contact">Contactez-nous</Link>
            <Link to="/about">Qui sommes-nous?</Link>
            <Link to="/job">Jobs</Link>
            </div>
            <div className="flex-col flex gap-2">
            <h3 className="font-bold">Ressources</h3>
            <Link to="/contact">Voyager avec Sunny Hill</Link>
            <Link to="/about">Risques</Link>
            <Link to="/job">Plus</Link>
            </div>
            <div className="flex flex-col border-t w-80 md:pl-8 md:border-l md:border-t-0 justify-center gap-4">
            <div className="flex gap-2 items-center"><AiFillPhone/> +32 123 456 789</div>
            <div className="flex gap-2 items-center"><IoLocationSharp/> Quai Arthur Rimbaut, 501, Charleroi, Belgique</div>
            </div>
        </div>
    );
};

export default Footer;