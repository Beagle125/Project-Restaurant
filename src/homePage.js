export const homePageLoader = (mainContainer) => {
    /*Create the homePageContainer div*/
    const homePageContainer = document.createElement('div');
    homePageContainer.id = 'homePageContainer';

    /*Create homePage1 and homePage2 div*/
    const homePage1 = document.createElement('div');
    const homePage2 = document.createElement('div');
    homePage1.id = 'homePage1';
    homePage2.id = 'homePage2';

    /*Create homePage1 elements*/
    const homePageTexts = document.createElement('div');
    const headerText1 = document.createElement('p');
    const highlightText1 = document.createElement('span');
    const breakLine1 = document.createElement('br');
    const bodyText1 = document.createElement('p');
    const arrow = document.createElement('div');
    const arrowSpan = document.createElement('span');
    homePageTexts.className = 'homePageTexts';
    headerText1.className = 'headerText';
    highlightText1.className = 'highlightText';
    bodyText1.className = 'bodyText';
    arrow.className = 'scroll-down-arrow';


    headerText1.textContent = 'The Art of Tea,';
    highlightText1.textContent = 'Re-imagined';
    bodyText1.textContent = 'Bring balance to your taste buds';
    arrowSpan.innerHTML = '&#8595';

    /*Create homePage2 element*/
    const textSection1 = document.createElement('div');
    const headerText2 = document.createElement('p');
    const highlightText2 = document.createElement('span');
    const bodyText2 = document.createElement('p');
    const breakLine2 = document.createElement('br');
    const breakLine3 = document.createElement('br');
    const breakLine4 = document.createElement('br');
    const bodySpan1 = document.createElement('span');
    const bodySpan2 = document.createElement('span');
    textSection1.className = 'textSection';
    headerText2.className = 'headerText';
    highlightText2.className = 'highlightText';
    bodyText2.className = 'bodyText';

    headerText2.textContent = 'Tea is more than';
    highlightText2.textContent = 'hot-leaf juice!';
    bodySpan1.textContent = 'For centuries The Jasmine Dragon is committed to serving high-quality tea to the higher echelons of Earth Kingdom Society. Our philosophy is rooted in innovation but grounded in solid principles of tea-making.';
    bodySpan2.textContent = 'Our founder has an unbridled love for tea, and created The Jasmine Dragon to share this fiery passion! Today we continue that calling, where all our customers are treated with a first-class experience.';

    /*Stitch homePage2 elements together*/
    headerText2.appendChild(highlightText2);
    headerText2.insertBefore(breakLine2, highlightText2);

    textSection1.appendChild(headerText2);

    bodyText2.appendChild(bodySpan1);
    bodyText2.appendChild(bodySpan2);
    bodyText2.insertBefore(breakLine3, bodySpan2);
    bodyText2.insertBefore(breakLine4, bodySpan2);

    textSection1.appendChild(bodyText2);

    homePage2.appendChild(textSection1);

    /*Stitch homePage1 elements together*/
    headerText1.appendChild(highlightText1);
    headerText1.insertBefore(breakLine1, highlightText1);

    homePageTexts.appendChild(headerText1);
    homePageTexts.appendChild(bodyText1);


    arrow.appendChild(arrowSpan);

    homePage1.appendChild(homePageTexts);
    homePage1.appendChild(arrow);

    /*Stitch everything to the DOM*/
    homePageContainer.appendChild(homePage1);
    homePageContainer.appendChild(homePage2);

    mainContainer.appendChild(homePageContainer);
};