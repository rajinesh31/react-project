import React from 'react';
import Header from './components/Header';
import Main from './components/main';
import Footer from './components/Footer';
import UsestateEx1  from './components/UsestateEx1';
import Weather from './components/Weather';
import Map from './components/Map';
import Useffect from './components/Useffect';
import './App.css';
import NavBar from './NavBar';
import Delhi from './container/Delhi'
import { GiftProvider } from './Context/Ex';
const App = () => {

  const gift = "Apple"

  return (
    <div>
            {/* <Header />
            <Main />
            <Footer/>
            <UsestateEx1 />
            <Weather />
            <Map />
            <Useffect /> */}
            <h1>sending gift to bangalure</h1>
            <GiftProvider>
              <Delhi gift = {gift}/> 
            </GiftProvider>

        </div>
  );
};

export default App;
// import React from 'react';
// import Header from './Header';
// import Main from './main';
// import Footer from './Footer';
// import Welcome from './Welcome';
// const App = () => {
//     return (
//         <div>
//             <Header />
//             <Main />
//             <Footer/>
//             <Welcome />
//         </div>
//     );
// };
// export default App;
// const App = () => {
//     const myname = "rajinesh"
//     const multipy = (a,b) => a*b
//     const specialclass = 'simple'
//     return (
//         <section id="section">
//             <p>{myname}</p>
//             <p>2 + 2 = {2 + 2}</p>
//             <p>2*2={multipy(2,2)}</p>
//             <p className={specialclass}>This is spicale</p>
//         </section>
        
//     );
// };
// export default App;
