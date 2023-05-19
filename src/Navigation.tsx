import { NavLink, Link } from 'react-router-dom';
import { GiStripedSun } from 'react-icons/gi';

const Navigation = () => {
    return (
        <div className="border-b border-gray-100 p-4 flex justify-between lg:justify-start lg:gap-10">
            <Link to="/"><GiStripedSun/></Link>
            <NavLink to="/">Accueil</NavLink>
            <NavLink to="/product">Notre offre</NavLink>
            <NavLink to="/about">Qui sommes-nous?</NavLink>
            <NavLink to="/faq">FAQ</NavLink>
        </div>
    );
};

export default Navigation;