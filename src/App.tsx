import Footer from "./Footer";
import Navigation from "./Navigation"
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <>
    <Navigation/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App
