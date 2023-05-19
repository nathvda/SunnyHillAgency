import { AiFillCheckCircle } from "react-icons/ai";
import CallToAction from "./CallToAction";

const products = [
    {
        name: "Débutant",
        description:"Un premier voyage unique pour découvrir le soleil et savoir ce qui se cache sous la surface.",
        price: 150,
        included: ["Service client", "Premiers soins", "Crème solaire", "Frais dentiste", "Essence"]
    },
    {
        name: "Amateur",
        description:"Vous avez déjà participé à l'aventure et vous voulez retenter l'expérience? Rien de plus facile.",
        price: 1504,
        included: ["Service client", "Premiers soins", "Crème solaire", "Frais funéraires", "Essence", "Repas complets"]
    }
]

const Product = () => {
    return (
        <div>
           <h3 className="text-3xl font-bold">Nos produits</h3>
           <div className="flex gap-8 m-8">
           {products.map(a => (  
               <div className="bg-white text-black flex-grow flex-col p-8 rounded-lg shadow-md border border-gray-100">
                <h3 className="font-bold text-xl text-center">{a.name}</h3>
               <hr/>
               <p className="text-center text-blue-600 font-bold">{a.price}€</p>
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