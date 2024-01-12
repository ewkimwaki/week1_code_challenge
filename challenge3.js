// the function to calculate the net salary 
function calculateNetSalary() {
    const basicSalary = parseFloat(prompt("Enter your basic salary: "));
    const benefits = parseFloat(prompt("Enter your benefits: "));
    const grossSalary = basicSalary + benefits;
    const nssfDeductions = Math.min(0.06 * basicSalary, 2000);
    const taxableIncome = grossSalary - nssfDeductions;
    const payee = calculatePayee(taxableIncome);
    const nhifDeductions = calculateNhifDeductions(grossSalary);
    const netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;
  //all these declared variables are largely calulated based on the KRA website 
    console.log(`Gross Salary: KES ${grossSalary.toFixed(2)}`);
    console.log(`NSSF Deductions: KES ${nssfDeductions.toFixed(2)}`);
    console.log(`Taxable Income: KES ${taxableIncome.toFixed(2)}`);
    console.log(`Payee: KES ${payee.toFixed(2)}`);
    console.log(`NHIF Deductions: KES ${nhifDeductions.toFixed(2)}`);
    console.log(`Net Salary: KES ${netSalary.toFixed(2)}`);
  }
// to calculate the payee charged according to basic salary,
function calculatePayee(taxableIncome) {
    let payee = 0; // I used 0 for the purposes of code functionality
    if (taxableIncome > 960000) {
      payee += 0.35 * (taxableIncome - 960000);
      taxableIncome = 960000;
    }
    if (taxableIncome > 561200) {
      payee += 0.3 * (taxableIncome - 561200);
      taxableIncome = 561200;
    }
    if (taxableIncome > 360000) {
      payee += 0.325 * (taxableIncome - 360000);
      taxableIncome = 360000;
    }
    if (taxableIncome > 100000) {
      payee += 0.25 * (taxableIncome - 100000);
    }
    payee += 0.1 * taxableIncome;
    return payee;
  }

  //to calculate NSSF deductions
  function calculateNhifDeductions(grossSalary) {
    let nhifDeductions = 0; // I used 0 for purposes of code functionality//
    if (grossSalary >= 6000) {// I calculated the NSSF deductions aside from the KRA website before using them in the if statements
      if (grossSalary <= 7999) {
        nhifDeductions = 150;
      } else if (grossSalary <= 11999) {
        nhifDeductions = 300;
      } else if (grossSalary <= 14999) {
        nhifDeductions = 400;
      } else if (grossSalary <= 19999) {
        nhifDeductions = 500;
      } else if (grossSalary <= 24999) {
        nhifDeductions = 600;
      } else if (grossSalary <= 29999) {
        nhifDeductions = 750;
      } else if (grossSalary <= 34999) {
        nhifDeductions = 850;
      } else if (grossSalary <= 39999) {
        nhifDeductions = 900;
      } else if (grossSalary <= 44999) {
        nhifDeductions = 950;
      } else if (grossSalary <= 49999) {
        nhifDeductions = 1000;
      } else if (grossSalary <= 59999) {
        nhifDeductions = 1100;
      } else if (grossSalary <= 69999) {
        nhifDeductions = 1200;
      } else if (grossSalary <= 79999) {
        nhifDeductions = 1300;
      } else if (grossSalary <= 89999) {
        nhifDeductions = 1400;
      } else if (grossSalary <= 99999) {
        nhifDeductions = 1500;
      } else {
        nhifDeductions = 1700;
      }
    }
    return nhifDeductions;
  }
  
  console.log(calculateNetSalary(50000));
