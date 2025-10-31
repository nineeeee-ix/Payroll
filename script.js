document.getElementById('payrollForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const employee = {
    id: document.getElementById('idNumber').value.trim(),
    lname: document.getElementById('lastName').value.trim(),
    fname: document.getElementById('firstName').value.trim(),
    mname: document.getElementById('middleName').value.trim(),
    position: document.getElementById('position').value.trim(),
    rate: parseFloat(document.getElementById('rate').value),
    days: parseFloat(document.getElementById('days').value)
  };

  employee.gross = employee.rate * employee.days;
  employee.sss = employee.gross * 0.05;
  employee.pagibig = employee.gross * 0.03;
  employee.philhealth = employee.gross * 0.02;
  employee.tax = employee.gross * 0.05;
  employee.totalDeduction = employee.sss + employee.pagibig + employee.philhealth + employee.tax;
  employee.net = employee.gross - employee.totalDeduction;

  localStorage.setItem('payrollData', JSON.stringify(employee));

  window.location.href = 'result.html';
});
