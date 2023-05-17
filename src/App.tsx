import Footer from "./Footer";
import Navigation from "./Navigation"
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <div className="flex flex-col justify-between min-h-screen">
    <Navigation/>
    <Outlet/>
    <Footer/>
    </div>
  )
}

export default App
