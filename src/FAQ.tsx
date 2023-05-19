import { Disclosure } from "@headlessui/react";
import CallToAction from "./CallToAction";
import { AiFillQuestionCircle } from "react-icons/ai";

const QUESTIONS = [
  {
    question: "Puis-je me faire rembourser?",
    answer: "Bien sûr, il suffit de remplir le formulaire prévu à cet effet",
  },
  {
    question:
      "Est-ce que c'est pas dangereux de se faire atterrir sur le soleil ?",
    answer: "Mais non tqt ma poule",
  },
  {
    question: "Est-ce qu'on peut vous faire confiance?",
    answer: "Évidemment !",
  },
];

const Faq = () => {
  return (
    <div className="p-8 text-sm flex-col gap-2">
      {QUESTIONS.map((a) => (
        <Disclosure>
          <Disclosure.Button className="bg-orange-100 p-8">
            <AiFillQuestionCircle /> {a.question}
          </Disclosure.Button>
          <Disclosure.Panel className="bg-orange-400 p-8">
            {a.answer}
          </Disclosure.Panel>
        </Disclosure>
      ))}
      <CallToAction />
    </div>
  );
};

export default Faq;
