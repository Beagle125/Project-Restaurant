import './styles.css';
import * as myModules from './myModules.js';

const DOMManipulator = (() => {
    /*Determine the main container*/
    const mainContainer = document.getElementById('content');
    const moduleContainer = document.createElement('div');

    /*Load the homepage*/
    myModules.homePageLoader(moduleContainer);
    mainContainer.appendChild(moduleContainer);
})();