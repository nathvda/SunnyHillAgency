import { useNavigate } from "react-router-dom";
import { useFormStore } from "../store";
import Submit from "../Submit";

const StepFour = () => {
  const formData = useFormStore((store) => store);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(formData);
    navigate("/form/confirmation", { replace: true });
  };

  const PreviousStep = () => {
    navigate("/form/step-three", { replace: true });
  };

  return (
    <div className="bg-white text-black flex-grow flex-col p-4 rounded-lg lg:w-1/2 m-auto">
      <div className="flex gap-4 justify-center">
        <div className="w-4 h-4 bg-red-300 rounded-lg"></div>
        <div className="w-4 h-4 rounded-lg bg-red-300"></div>
        <div className="w-4 h-4 rounded-lg bg-red-300"></div>
        <div className="w-4 h-4 rounded-lg bg-red-300"></div>
      </div>
      <h2 className="text-3xl font-bold ml-8">Confirmer vos informations</h2>
      <hr className="border-t my-5" />
      <p>
       C'est presque terminé ! Veuillez s'il vous plaît relire et confirmer les informations ci-dessous pour être certain que nous pourrons traiter votre demande dans les meilleures conditions. 
      </p>
      <hr className="border-t my-5" />
      
      <div><b>Prénom</b>: {formData.firstName}</div>
      <div><b>Nom</b>: {formData.lastName}</div>
      <div><b>Date de naissance</b>: {new Date(formData.dateOfBirth).toLocaleDateString()}</div>
      <div><b>Lieu de naissance</b>: {formData.placeOfBirth}</div>
      <div><b>Code promo</b>: {formData.codePromo}</div>
      <div><b>Numéro de téléphone</b>: {formData.phoneNumber}</div>

      <form
        className="bg-white bg-opacity-10 mb-2 mt-2 m-auto backdrop-blur-md flex-col gap-4"
        onSubmit={onSubmit}
      >
        <div className="flex gap-8 justify-end">
          <button
            className="flex bg-slate-400 text-white p-4 mt-4 rounded-md md:w-44"
            onClick={() => PreviousStep()}
          >
            Précédent
          </button>
          <Submit />
        </div>
      </form>
    </div>
  );
};

export default StepFour;
