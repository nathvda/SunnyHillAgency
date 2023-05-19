import CallToAction from "./CallToAction";

const Greetings = () => {
    return (
        <div className="flex flex-col justify-center p-8 gap-8 bg-black bg-hero-background text-white bg-cover h-auto flex-grow">
            <h1 className="text-4xl font-bold">Envolez-vous aujourd'hui</h1>
            <p className="justify md:w-96">Avec des années d'expérience, l'agence Sunny Hill vous propose une nouvelle expérience inédite : un atterrissage sur le soleil. Réservez aujourd'hui, vous ne le regretterez pas : satisfait ou remboursés.</p>
            <CallToAction/>
        </div>
    );
};

export default Greetings;