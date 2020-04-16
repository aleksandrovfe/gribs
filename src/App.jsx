import React from 'react';
import ThreeJs from './ThreeJS';
import Sign from './Sign';
import {SocailNetworkProj, PresentationPageProj,
  PhoneCatalogProj, TodoAppProject,
} from './Data';

const App = () => {
  return (
    <div className="app">
      <Sign />
      <div className="container">
        <ThreeJs codeLink={SocailNetworkProj.codeLink} sign={SocailNetworkProj.sign} link={SocailNetworkProj.link} description={SocailNetworkProj.description} img={SocailNetworkProj.img}/>
        <ThreeJs codeLink={PresentationPageProj.codeLink} sign={PresentationPageProj.sign} link={PresentationPageProj.link} description={PresentationPageProj.description} img={PresentationPageProj.img}/>
        <ThreeJs codeLink={PhoneCatalogProj.codeLink} sign={PhoneCatalogProj.sign} link={PhoneCatalogProj.link} description={PhoneCatalogProj.description} img={PhoneCatalogProj.img}/>
        <ThreeJs codeLink={TodoAppProject.codeLink} sign={TodoAppProject.sign} link={TodoAppProject.link} description={TodoAppProject.description} img={TodoAppProject.img}/>
      </div>
    </div>
  );
}

export default App;