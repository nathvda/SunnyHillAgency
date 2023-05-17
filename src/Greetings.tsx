import CallToAction from "./CallToAction";

const Greetings = () => {
    return (
        <div className="flex flex-col">
            <h1 className="text-3xl">Plan your first Sun Landing today</h1>
            <p>Avec des années d'expérience, l'agence Sunny Hill vous propose une nouvelle expérience inédite : un atterrissage sur le soleil. Réservez aujourd'hui, vous ne le regretterez pas : satisfait ou remboursés.</p>
            <CallToAction/>
        </div>
    );
};

export default Greetings;