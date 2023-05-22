import {BsCheckCircle} from 'react-icons/bs'

const Confirm = () => {
    return (
        <div className="flex flex-grow justify-center items-center text-center">
          <div className="text-green-800 text-5xl font-bold">Merci d'avoir rempli ce formulaire.
          <BsCheckCircle/></div>  
        </div>
    );
};

export default Confirm;