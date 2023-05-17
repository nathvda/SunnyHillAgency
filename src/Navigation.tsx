import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="border-b border-gray-100 p-4 flex justify-between">
            <NavLink to="/">Accueil</NavLink>
            <NavLink to="/product">Notre offre</NavLink>
            <NavLink to="/about">Qui sommes-nous?</NavLink>
            <NavLink to="/faq">FAQ</NavLink>
        </div>
    );
};

export default Navigation;