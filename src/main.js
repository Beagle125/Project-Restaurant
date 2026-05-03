import './styles.css';
import * as myModules from './myModules.js';

const DOMManipulator = (() => {
    /*Determine the main container*/
    const mainContainer = document.getElementById('content');
    const homeButton = document.getElementById('bHome');
    const menuButton = document.getElementById('bMenu');
    const reserveButton = document.getElementById('bReserve');

    /*Load the modules*/
    const addHomeModule = () => {
        myModules.homePageLoader(mainContainer);
    };

    const addMenuModule = () => {
        myModules.menuPageLoader(mainContainer);
    };

    const addReserveModule = () => {
        myModules.reservePageLoader(mainContainer);
    }

    /*Remove the current content module*/
    const removeModule = () => {
        mainContainer.replaceChildren();
    };


    /*Initial load to the homepage*/
    addHomeModule();

    /*Event listeners*/
    homeButton.addEventListener('click', () => {
        removeModule();
        addHomeModule();
    });

    menuButton.addEventListener('click', () => {
        removeModule();
        addMenuModule();
    });

    reserveButton.addEventListener('click', () => {
        removeModule();
        addReserveModule();
    });

})();