document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('btn');
    const employeeList = document.getElementById('employee-list');
    const successMessage = document.createElement('p');
    successMessage.classList.add('success-message');
    successMessage.style.display = 'none';
    successMessage.style.color = 'green';
    successMessage.textContent = 'Success: Employee Added!';
    successMessage.style.paddingTop = '30px';
    successMessage.style.paddingBottom = '30px';
    addButton.insertAdjacentElement('afterend', successMessage);
    const errorMessage = document.createElement('p'); // Create element for error message
    errorMessage.classList.add('error-message'); // Add class for styling
    errorMessage.style.display = 'none'; // Initially hide the message
    errorMessage.textContent = 'Error: Please make sure all the fields are filled before adding an employee!'; // Set the message content
    addButton.insertAdjacentElement('afterend', errorMessage); // Append the message after the button
    
    let employeeCount = 0;
    const employeeText = document.getElementById('employee-text');

    addButton.addEventListener('click', function() {
        const name = document.getElementById('name').value;
        const profession = document.getElementById('profession').value;
        const age = document.getElementById('age').value;

        if (name.trim() === '' || profession.trim() === '' || age.trim() === '') {
            errorMessage.style.display = 'block'; // Show error message if any field is empty
            setTimeout(function() {
                errorMessage.style.display = 'none';
            }, 3000); // Hide error message after 3 seconds
            return; // Exit function if any field is empty
        }

        employeeCount++;

        const employeeContainer = document.createElement('div');
        employeeContainer.classList.add('employee-container');

        const employeeDetails = document.createElement('div');
        employeeDetails.classList.add('employee-details');
        employeeDetails.innerHTML = `
            <p>${employeeCount}. Name: ${name}  Profession: ${profession}  Age: ${age}</p>
        `;

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-btn');
        deleteButton.textContent = 'Delete User';

        deleteButton.addEventListener('click', function() {
            employeeContainer.remove();
            employeeCount--;
            if (employeeCount === 0) {
                employeeText.style.display = 'block';
            }
        });

        employeeContainer.appendChild(employeeDetails);
        employeeContainer.appendChild(deleteButton);

        employeeList.appendChild(employeeContainer);

        document.getElementById('name').value = '';
        document.getElementById('profession').value = '';
        document.getElementById('age').value = '';

        successMessage.style.display = 'block';
        successMessage.style.whiteSpace = 'nowrap';

        setTimeout(function() {
            successMessage.style.display = 'none';
        }, 2000);

        employeeText.style.display = 'none'; // Hide the "You have 0 Employees." text
    });
});
