
# challenge 1 
1. I used the functions, "if ... and else if ..." to write a function that could grade a students mark according to instructions provided
2. Used let mark = 80 to test the code and was successful
3. tried to declatter the code by generalising the parameters I used

# challenge 2
1. I came up with the function calculateDemeritPoints(speed);
2. I declared the variables :
const speedLimit = 70; const kmPerPoint = 5; to help me simplify the function.
3. used the function
if (speed < speedLimit + kmPerPoint) {
      return "Ok";
    } else {
      const points = Math.floor((speed - speedLimit) / kmPerPoint);} to ensure the programme is able identify when to return "Ok" and when to move foward to calculate deduction points 
4. within the same if function I added another if function 
if (points >= 12) {
        return "License suspended";
      } else {
        return "Points: " + points;
      }
to be ensure the prompt is also able to give the response "license suspended" when the calulated points excede 12.

# Challenge 3 
1. declared these variables as I researched the KRA website
 const basicSalary = parseFloat(prompt("Enter your basic salary: "));
    const benefits = parseFloat(prompt("Enter your benefits: "));
    const grossSalary = basicSalary + benefits;
    const nssfDeductions = Math.min(0.06 * basicSalary, 2000);
    const taxableIncome = grossSalary - nssfDeductions;
    const payee = calculatePayee(taxableIncome);
    const nhifDeductions = calculateNhifDeductions(grossSalary);
    const netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;
2. To calculate payee, I came up with the function "calculatePayee (taxableIncome)" and used the if statement to evaluate the payee for the different salary brackets provided by KRA.
If the taxable income was above 960,000, the if statement should be 
if (taxableIncome > 960000) {
      payee += 0.35 * (taxableIncome - 960000);
      taxableIncome = 960000;}
3. I then calculated the NSSF deductions from the KRA website according to each tax bracket. for example 
if (grossSalary >= 6000) {
      if (grossSalary <= 7999) {
        nhifDeductions = 150;
        ....}
4. This means that that if I ran the function, 
  function calculateNetsalary() 
the programme would calculate the value according to the tax bracket in the expression, guided by the three functions.