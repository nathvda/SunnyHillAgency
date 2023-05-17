import { Fragment } from "react";
import { Tab } from "@headlessui/react";

const FAQ = () => {
    return (
        <div>
            <Tab.Group>
                <Tab.List className="bg-orange-100 p-8">
                <Tab>
                    Puis-je me faire rembourser?
                </Tab>
                <Tab>
                    Est-ce que c'est pas dangereux de se faire atterrir sur le soleil ?
                </Tab>
                <Tab>
                    Est-ce qu'on peut vous faire confiance?
                </Tab>
                </Tab.List> 
                <Tab.Panels className="bg-orange-400 p-8">
        <Tab.Panel>Content 1</Tab.Panel>
        <Tab.Panel>Content 2</Tab.Panel>
        <Tab.Panel>Content 3</Tab.Panel>
        </Tab.Panels>
            </Tab.Group>
        </div>
    );
};

export default FAQ;