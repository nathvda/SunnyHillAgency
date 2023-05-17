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


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<App/>}>
      <Route index element={<Greetings/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/product" element={<Product/>}/>
      <Route path="/form" element={<Form/>}>
        <Route path="/form/step-one" element={<StepOne/>}/>
        <Route path="/form/step-two" element={<StepTwo/>}/>
        <Route path="/form/step-three" element={<StepThree/>}/>
      </Route>
    </Route>
    <Route path="*" element={<Error404/>}/>
    
    </>
  )
)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
