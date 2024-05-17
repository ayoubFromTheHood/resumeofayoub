import { BrowserRouter } from "react-router-dom"
import { About , Contact , Experience , Feedbacks , Hero , Navbar , Tech , Works , StarsCanvas } from "./components"
import {sun} from "./assets"


const App = () =>  {
  

  return (
    <BrowserRouter>
  <div className="relative z-0 gradient-bg">
  <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center  ">
  <img src={sun} alt='sun' className='absolute w-2/6 top-56 right-5  animate-blob' />

    <div className="filter-me">

 <Navbar/>
<Hero/>
</div>

    </div>
    <About/>
    <Experience />
    <Tech/>
    <Works/>
    <div className="relative z-0">
      <Contact/>
      <StarsCanvas/>
    </div>
  </div>
  </BrowserRouter>)
}

export default App



