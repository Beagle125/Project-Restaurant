export const homePageLoader = (mainContainer) => {
    /*Create the homePageContainer div*/
    const homePageContainer = document.createElement('div');
    homePageContainer.id = 'homePageContainer';

    /*Create homePage1 and homePage2 div*/
    const homePage1 = document.createElement('div');
    const homePage2 = document.createElement('div');
    homePage1.id = 'homePage1';
    //homePage2.id = 'homePage2'; this is to be changed

    /*Create homePage1 elements*/
    const homePageTexts = document.createElement('div');
    const headerText1 = document.createElement('p');
    const highlightText1 = document.createElement('span');
    const breakLine1 = document.createElement('br');
    const bodyText1 = document.createElement('p');
    homePageTexts.className = 'homePageTexts';
    headerText1.className = 'headerText';
    highlightText1.className = 'highlightText';
    bodyText1.className = 'bodyText';

    headerText1.textContent = 'The Art of Tea,';
    highlightText1.textContent = 'Re-imagined';
    bodyText1.textContent = 'Bring balance to your taste buds';

    /*Stitch homePage1 elements together*/
    headerText1.appendChild(highlightText1);
    headerText1.insertBefore(breakLine1, highlightText1);

    homePageTexts.appendChild(headerText1);
    homePageTexts.appendChild(bodyText1);

    homePage1.appendChild(homePageTexts);

    /*Stitch everything to the DOM*/
    homePageContainer.appendChild(homePage1);
    //homePageContainer.appendChild(homePage2); this is to be changed

    mainContainer.appendChild(homePageContainer);
};