import CallToAction from "./CallToAction";

const Greetings = () => {
    return (
        <div className="flex flex-col justify-center p-8 gap-8 bg-black bg-hero-background text-white bg-cover h-auto flex-grow lg:pl-40">
            <h1 className="text-4xl font-bold lg:text-7xl">Envie de voyager?</h1>
            <p className="justify md:w-1/3 lg:text-2xl">Avec des années d'expérience, l'agence Sunny Hill met à votre service son équipe d'experts
             pour vous permettre de découvrir le monde. Réservez dès aujourd'hui pour obtenir votre package spécial.</p>
            <CallToAction/>
        </div>
    );
};

export default Greetings;