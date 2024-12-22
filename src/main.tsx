import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import About from "./About.tsx";
import App from "./App.tsx";
import Error404 from "./Error404.tsx";
import Form from "./Form.tsx";
import StepOne from "./FormSteps/StepOne.tsx";
import StepThree from "./FormSteps/StepThree.tsx";
import StepTwo from "./FormSteps/StepTwo.tsx";
import Greetings from "./Greetings.tsx";
import "./index.css";
import Product from "./Product.tsx";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Confirm from "./Confirm.tsx";
import Faq from "./Faq.tsx";
import StepFour from "./FormSteps/StepFour.tsx";

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route index element={<Greetings />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/form" element={<Form />}>
          <Route index element={<StepOne />} />
          <Route path="/form/step-two" element={<StepTwo />} />
          <Route path="/form/step-three" element={<StepThree />} />
          <Route path="/form/step-four" element={<StepFour />} />
          <Route path="/form/confirm" element={<Confirm />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Route>
    </>,
  ),
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>,
);
