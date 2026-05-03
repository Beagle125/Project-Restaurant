export const menuPageLoader = (mainContainer) => {
    /*Create the main menuPage div*/
    const menuPage = document.createElement('div');
    menuPage.id = 'menuPage';

    /*Create all the elements for the title*/
    const headerText = document.createElement('p');
    const breakLine = document.createElement('br');
    const highlightText = document.createElement('span');
    headerText.className = 'headerText';
    highlightText.className = 'highlightText';

    headerText.textContent = 'A selection of';
    highlightText.textContent = 'Classics';

    /*Create all the elements for the menu section*/
    const textSectionMenu = document.createElement('div');
    textSectionMenu.className = 'textSectionMenu';

    const menuItem1 = document.createElement('div');
    const menuHeader1 = document.createElement('p');
    const menuBody1 = document.createElement('p');
    menuItem1.className = 'menuItem';
    menuHeader1.className = 'headerText';
    menuBody1.className = 'bodyText';

    const menuItem2 = document.createElement('div');
    const menuHeader2 = document.createElement('p');
    const menuBody2 = document.createElement('p');
    menuItem2.className = 'menuItem';
    menuHeader2.className = 'headerText';
    menuBody2.className = 'bodyText';

    const menuItem3 = document.createElement('div');
    const menuHeader3 = document.createElement('p');
    const menuBody3 = document.createElement('p');
    menuItem3.className = 'menuItem';
    menuHeader3.className = 'headerText';
    menuBody3.className = 'bodyText';

    /* Add the text content for menu */
    menuHeader1.textContent = 'Jasmine';
    menuHeader2.textContent = 'Ginseng';
    menuHeader3.textContent = 'White Dragon';

    menuBody1.textContent = "Scented with the aroma of jasmine flowers, jasmine tea aids in calming the mind, boosts the immune system, and improves mental health. It is one of the founder's favorite tea.";
    menuBody2.textContent = "Made from the Ginseng plant roots. The Ginseng is a delectable brew that reduces fatigue, the Earth Kingdom elites like to infuse this with honey to counter its bitter taste.";
    menuBody3.textContent = "A tea so delicious that it is heartbreaking! It is brewed from the leaves and flowers of the rare White Dragon Bush. Most locals mistake this with the White Jade bush which is lethal.";

    /*Stitch the header together*/
    headerText.appendChild(highlightText);
    headerText.insertBefore(breakLine, highlightText);

    /*Stitch the menu together*/
    menuItem1.appendChild(menuHeader1);
    menuItem1.appendChild(menuBody1);

    menuItem2.appendChild(menuHeader2);
    menuItem2.appendChild(menuBody2);

    menuItem3.appendChild(menuHeader3);
    menuItem3.appendChild(menuBody3);

    textSectionMenu.appendChild(menuItem1);
    textSectionMenu.appendChild(menuItem2);
    textSectionMenu.appendChild(menuItem3);

    /*Stitch everything together*/
    menuPage.appendChild(headerText);
    menuPage.appendChild(textSectionMenu);
    mainContainer.appendChild(menuPage);
};