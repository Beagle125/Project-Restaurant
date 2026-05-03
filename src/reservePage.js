export const reservePageLoader = (mainContainer) => {
    /*Create the reservePage div*/
    const reservePage = document.createElement('div');
    reservePage.id = 'reservePage';

    /*Create all the elements in the reservePage*/
    const reserveForm = document.createElement('form');
    reserveForm.className = 'reserveForm';

    const headerText = document.createElement('p');
    const highlightText = document.createElement('span');
    headerText.className = 'headerText';
    highlightText.className = 'highlightText';
    headerText.innerHTML = 'Save the date,<br>enjoy real ';
    highlightText.innerText = 'tea';

    const formItem1 = document.createElement('div');
    const label1 = document.createElement('label');
    const input1 = document.createElement('input');
    formItem1.className = 'formItem';
    label1.className = 'bodyText';
    label1.textContent = 'First Name';
    input1.type = 'text';
    input1.placeholder = 'Toph';

    const formItem2 = document.createElement('div');
    const label2 = document.createElement('label');
    const input2 = document.createElement('input');
    formItem2.className = 'formItem';
    label2.className = 'bodyText';
    label2.textContent = 'Last Name';
    input2.type = 'text';
    input2.placeholder = 'Beifong';

    const formItem3 = document.createElement('div');
    const label3 = document.createElement('label');
    const input3 = document.createElement('input');
    formItem3.className = 'formItem';
    label3.className = 'bodyText';
    label3.textContent = 'Reservation Date';
    input3.type = 'date';

    const button = document.createElement('button');
    button.className = 'bodyText';
    button.type = 'button';
    button.textContent = 'Submit Reservation'

    /*Stitch the form together*/
    headerText.appendChild(highlightText);

    formItem1.appendChild(label1);
    formItem1.appendChild(input1);

    formItem2.appendChild(label2);
    formItem2.appendChild(input2);

    formItem3.appendChild(label3);
    formItem3.appendChild(input3);

    reserveForm.appendChild(headerText);
    reserveForm.appendChild(formItem1);
    reserveForm.appendChild(formItem2);
    reserveForm.appendChild(formItem3);
    reserveForm.appendChild(button);

    /*Stitch everything together*/
    reservePage.appendChild(reserveForm);
    mainContainer.appendChild(reservePage);
};