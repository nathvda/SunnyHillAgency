import CallToAction from "./CallToAction";
import Titres from "./Titres";

const About = () => {
    return (
        <div className="p-8">
            <Titres>Sunny Hill</Titres>
            <p className="p-8">Notre agence met à disposition une liste de voyage organisés qui permettront aux voyageurs d'éviter le maximum de problèmes en cours de route. Chez Sunny Hill, on s'occupe de tout : de la réservation à la résolution des problèmes, en passant par les activités sur place. Vous n'avez qu'à poser vos bagages et à vous détendre.</p>
            <Titres>Nos valeurs</Titres>
            <p className="p-8">Chez Sunny Hill, on prône l'efficacité. Nos conseillers sont à l'écoute et feront tout leur possible pour trouver le voyage qui vous convient, à l'endroit qui vous convient.</p>
            <Titres>En savoir+ </Titres>
            <p className="p-8">Pour toute question, n'hésitez pas à compléter le formulaire de contact en cliquant sur le bouton suivant, un de nos conseillers entrera en contact avec vous dans les plus brefs délais.</p>

            <CallToAction/>
        </div>
    );
};

export default About;