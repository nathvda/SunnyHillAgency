import { AiFillCheckCircle } from "react-icons/ai";
import CallToAction from "./CallToAction";
import Titres from "./Titres";

const products = [
    {
        name: "Demi-pension",
        description:"Un premier voyage découverte parmi un choix de destinations.",
        included: ["Service client", "Frais de bagage", "Frais hôtelier", "Frais d'animation", "Demi-pension"]
    },
    {
        name: "Pension complète",
        description:"Voyage tout inclus, parmi un choix de destination en Europe.",
        included: ["Service client", "Frais de bagage", "Frais hôtelier", "Frais d'animation", "Pension complète", "Assurance annulation", "Assurance contre le vol"]
    },
    
    {
        name: "Pension complète + ",
        description:"Voyage tout inclus, parmi un choix de destination en Europe, activités inclues.",
        included: ["Service client 24h/7 ", "Frais de bagage", "Frais hôtelier", "Frais d'animation", "Pension complète", "Assurance annulation", "Assurance contre le vol", "3 Activités au choix"]
    }
]

const Product = () => {
    return (
        <div>
            <Titres>Nos produits</Titres>
            <div className="flex flex-col md:flex-row gap-8 m-8 flex-wrap">
            {products.map((a,index)=> (  
                <div key={index} className="bg-white text-black flex-grow flex-col p-8 rounded-lg shadow-md border border-gray-100 lg:w-1/5 justify-between">
                <h3 className="font-bold text-2xl text-center mb-8">{a.name}</h3>
                <hr/>
                <div>
                {
                a.included.map(b => (<p className="border-b-blue-100 border-b p-2 flex justify-start gap-8 items-center"><AiFillCheckCircle/>{b}</p>)
                )
                }
                </div>
                <CallToAction/>
                </div>

            ))}
            </div>
        </div>
    );
};

export default Product;