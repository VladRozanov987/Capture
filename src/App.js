//Import pages
import { AboutUs, ContactUs, OurWork, Page404, MovieDetail } from "./pages";

//Import components
import Nav from "./components/Nav.component";

//Global style
import GlobalStyle from "./components/GlobalStyle.component";

//Router
import {Routes, Route, useLocation} from 'react-router-dom';

//Animation
import {AnimatePresence} from 'framer-motion';

function App() {

  const location = useLocation()

  return (
    <div className="App">
      <GlobalStyle />
      <Nav/>
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<AboutUs/>}/>
          <Route path='/about' element={<AboutUs/>}/>
          <Route path='/work' element={<OurWork/>}/>
          <Route path='/work/:id' element={<MovieDetail/>}/>
          <Route path='/contact' element={<ContactUs/>}/>
          <Route path='*' element={<Page404/>}/>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
