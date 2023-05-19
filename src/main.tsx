import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom';
import About from './About.tsx';
import Product from './Product.tsx';
import Greetings from './Greetings.tsx';
import Form from './Form.tsx';
import StepOne from './FormSteps/StepOne.tsx';
import StepTwo from './FormSteps/StepTwo.tsx';
import StepThree from './FormSteps/StepThree.tsx';
import Error404 from './Error404.tsx';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Faq from './FAQ.tsx';

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
})


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<App/>}>
      <Route index element={<Greetings/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/product" element={<Product/>}/>
      <Route path="/faq" element={<Faq/>}/>
      <Route path="/form" element={<Form/>}>
        <Route index element={<StepOne/>}/>
        <Route path="/form/step-two" element={<StepTwo/>}/>
        <Route path="/form/step-three" element={<StepThree/>}/>
      </Route>
      <Route path="*" element={<Error404/>}/>
    </Route>
    
    
    </>
  )
)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
    <RouterProvider router={router}/>
    </ApolloProvider>
  </React.StrictMode>,
)
