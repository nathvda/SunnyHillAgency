import CallToAction from "./CallToAction";

const About = () => {
    return (
        <div className="p-8">
            <h3 className="text-xl font-bold">Sunny Hill</h3>
            <p>Tout a commencé en 1987 quand les premiers inventeurs se sont décidés à explorer le soleil. Il est vrai qu'il y faisait un peu chaud, mais certains rêveurs avaient envie de l'explorer.</p>
            <h3 className="text-xl font-bold">Nos valeurs</h3>
            <p>Un autre pavé pour vous dire combien nos valeurs sont belles.</p>
            <CallToAction/>
        </div>
    );
};

export default About;