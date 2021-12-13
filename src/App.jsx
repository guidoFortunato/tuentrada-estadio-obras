import React, { useEffect } from 'react';
import Section from './components/main/Section';
import SectionHistoria from './components/main/SectionHistoria';
import Imagenes from './components/main/Imagenes';
import Contacto from './components/main/Contacto';
import Footer from './components/footer/Footer';
import {
    BrowserRouter as Router,
    Route,
    Switch
  
  } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
//import BotonFlotante from './components/BotonFlotante';
import Eventos from './components/main/Eventos';
import DetalleEvento from './components/EventDetail/DetalleEvento';
import VariablesProvider from './context/VariablesProvider';
import TagManager from 'react-gtm-module';
//import Error404 from './components/auth/Error404';


const TagManagerArgs = {
  gtmId: 'GTM-N2N9W5J'
}

TagManager.initialize(TagManagerArgs)



function App() {
  
  useEffect(() => {
    
    TagManager.initialize(TagManagerArgs)
    
  }, [])





  return (
    <>
    <VariablesProvider>

      <Router basename={'/estadio/obras'}> 
      

        <Switch>
                 
          <Route path='/' exact>
            <Navbar/>
            <Section />         
            <Eventos />
            <SectionHistoria />
            <Imagenes />
            <Contacto />
            {/* <BotonFlotante/> */}
            <Footer />           
          </Route> 

          <Route path='/:id' exact >
            <DetalleEvento />            
          </Route>


          {/* <Route path='*' component={Error404} /> */}
        
        </Switch>
      </Router>
    </VariablesProvider>
    </>

  
  
  );
}

export default App;
