import { Tab } from "@headlessui/react";
import CallToAction from "./CallToAction";

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

const FAQ = () => {
  return (
    <div className="p-8">
      <Tab.Group>
        <Tab.List className="bg-orange-100 p-8 flex gap-8">
          {QUESTIONS.map((a) => (
            <Tab className="bg-blue active:bg-orange-600">{a.question}</Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="bg-orange-400 p-8">
          {QUESTIONS.map((a) => (
            <Tab.Panel>{a.answer}</Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
      <CallToAction />
    </div>
  );
};

export default FAQ;
