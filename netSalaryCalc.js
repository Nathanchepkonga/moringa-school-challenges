function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;

    // Simple placeholder calculations for tax, NHIF, and NSSF
    const tax = grossSalary * 0.1; // Example: 10% tax
    const nhifDeduction = 200; // Fixed NHIF deduction
    const nssfDeduction = 200; // Fixed NSSF deduction

    const netSalary = grossSalary - tax - nhifDeduction - nssfDeduction;
    return {
        grossSalary: grossSalary,
        tax: tax,
        nhifDeduction: nhifDeduction,
        nssfDeduction: nssfDeduction,
        netSalary: netSalary
    };
}

// Example usage:
const basicSalary = parseFloat(prompt("Enter the basic salary: "));
const benefits = parseFloat(prompt("Enter the benefits: "));
const salaryDetails = calculateNetSalary(basicSalary, benefits);
console.log(`Gross Salary: ${salaryDetails.grossSalary}`);
console.log(`Tax: ${salaryDetails.tax}`);
console.log(`NHIF Deduction: ${salaryDetails.nhifDeduction}`);
console.log(`NSSF Deduction: ${salaryDetails.nssfDeduction}`);
console.log(`Net Salary: ${salaryDetails.netSalary}`);
