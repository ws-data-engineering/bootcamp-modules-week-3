// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
    let employeesArray = [];
   
    while (true) {
      employeeObject = {};

      employeeObject.firstName = prompt('Enter first name:');
      if (employeeObject.firstName === null || employeeObject.firstName === '') {
        return;
      };

      employeeObject.lastName = prompt('Enter last name:');
      if (employeeObject.lastName === null || employeeObject.lastName === '') {
        return;
      };

      employeeObject.salary = parseInt(prompt('Enter salary:'));
      if (employeeObject.salary === null || employeeObject.salary === '') {
        return;
      } else if (isNaN(employeeObject.salary)) {
        employeeObject.salary = 0;
      };

      employeesArray.push(employeeObject);

      employeeObject.addEmployee = prompt('Do you want to add another employee?');
      if (employeeObject.addEmployee === null || employeeObject.addEmployee === '') {
        return;
      };
      if (employeeObject.addEmployee === 'No') {
        return employeesArray;
      };
      if (employeeObject.addEmployee === 'Yes') {
        continue;
      };
    };  
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  let numEmployee = employeesArray.length;
  let salaryTotal = 0;
  let salaryAverage;

  for (let i = 0; i < employeesArray.length; i++) {
    salaryTotal += employeesArray[i]['salary'];
  };

  salaryAverage = salaryTotal / numEmployee;

  console.log(`The average salary between our (${numEmployee}) employee(s) is $${salaryAverage}`); 
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee

  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  const firstName = employeesArray[randomIndex]['firstName'];
  const lastName = employeesArray[randomIndex]['lastName'];

  console.log(`Congratulations to ${firstName} ${lastName}, our random drawing winner!`);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
