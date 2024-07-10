// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
    let employeesArray = [];
   
    while (true) {
      employeeObject = {};

      let firstName = prompt('Enter first name:');
      let lastName = prompt('Enter last name:');
      let salary = prompt('Enter salary:');
      if (isNaN(salary)) {
        employeeObject.salary = 0;
      };

      employeeObject.firstName = firstName;
      employeeObject.lastName = lastName;
      employeeObject.salary = salary;

      employeesArray.push(employeeObject);

      addEmployee = confirm('Do you want to add another employee?');
      if (!addEmployee) {
        break;
      };
    }; 
    return employeesArray; 
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  let numEmployee = employeesArray.length;
  let salaryTotal = 0;
  let salaryAverage;
  let salary;
  let conversionIndicator;
  let decimal;
  let mainInteger;

  for (let i = 0; i < employeesArray.length; i++) {
    salary = employeesArray[i]['salary'];
    salary = String(salary);
    if (salary.indexOf('.') !== -1) {
      conversionIndicator = true;
    } else {
      conversionIndicator = false;
    };    
  };

  if (conversionIndicator) {
    for (let i = 0; i < employeesArray.length; i++) {
      salary = employeesArray[i]['salary'];
        decimal = parseFloat(salary);
        salaryTotal += decimal;
    };
    salaryAverage = salaryTotal / numEmployee;

    let salaryString = String(salaryAverage);
    let decimalIndex = salaryString.indexOf('.');
    let slicePoint = salaryString.length - decimalIndex;
    let final;

    if (slicePoint > 2) {
      salaryString = salaryString.slice(0, decimalIndex + 3);
      final = parseFloat(salaryString);
      final = Math.round(final);
    }; 
    final = parseFloat(salaryString);
    f = final.toLocaleString("en-US", { maximumFractionDigits: 2, minimumFractionDigits: 2});
    console.log(`The average salary between our ${numEmployee} employee(s) is $${f}`); 
    } else {
      for (let i = 0; i < employeesArray.length; i++) {
        salary = employeesArray[i]['salary'];
        mainInteger = parseFloat(salary);
        salaryTotal += mainInteger;
    };
    salaryAverage = salaryTotal / numEmployee;
    let final = salaryAverage.toLocaleString("en-US", { maximumFractionDigits: 2, minimumFractionDigits: 2});
    console.log(`The average salary between our ${numEmployee} employee(s) is ${final}`); 
  };
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  let randomIndex = Math.floor(Math.random() * employeesArray.length);
  let firstName = employeesArray[randomIndex]['firstName'];
  let lastName = employeesArray[randomIndex]['lastName'];

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