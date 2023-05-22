import { Disclosure } from "@headlessui/react";
import CallToAction from "./CallToAction";
import { AiFillQuestionCircle } from "react-icons/ai";

const QUESTIONS = [
  {
    question: "En combien de temps peut-on attendre une réponse d'un conseiller?",
    answer: "Nos conseillers sont relativement occupés, mais la moyenne de réponse est de 5 jours ouvrés. Après complétion du formulaire de contact, vous recevrez une confirmation ainsi qu'un numéro de client.",
  },
  {
    question:
      "Je n'ai pas reçu de nouvelles de la part de Sunny Hill, cela fait déjà plus de 5 jours ouvrés. Quelle est la marche à suivre?",
    answer: "Il est possible que votre message n'ait pas été envoyé correctement ou que nos serveurs l'aient perdu en chemin. Pensez tout de même à vérifier dans vos spams si un message ne s'y est pas perdu. Enfin, si le doute persiste, contactez le service client pour toute information supplémentaire.",
  },
  {
    question: "J'ai organisé mon voyage, mais j'aimerais l'annuler. Comment m'y prendre ?",
    answer: "Si vous avez déjà payé votre voyage, rien n'est perdu ! Avec Sunny Hill, vous avez 30 jours pour exercer votre droit de rétractation, à compter du versement de l'acompte. Prenez contact avec nos conseillers ou rendez-vous dans l'une de nos agences pour connaître la marche à suivre.",
  },
];

const Faq = () => {
  return (
    <div className="p-8 text-sm flex-col gap-2 flex">
      {QUESTIONS.map((a) => (
        <Disclosure>
          <Disclosure.Button className="border border-gray-100 p-8 rounded-md shadow-sm border-b-red-600 border-b-2 lg:text-xl lg:flex lg:items-center lg:gap-8">
            <AiFillQuestionCircle /> {a.question}
          </Disclosure.Button>
          <Disclosure.Panel className="bg-gray-100 p-8  lg:text-xl">
            {a.answer}
          </Disclosure.Panel>
        </Disclosure>
      ))}
      <CallToAction />
    </div>
  );
};

export default Faq;
