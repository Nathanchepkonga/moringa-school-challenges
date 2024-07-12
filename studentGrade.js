function getGrade(marks) {
    if (marks > 79) {
        return 'A';
    } else if (marks >= 60) {
        return 'B';
    } else if (marks >= 50) {
        return 'C';
    } else if (marks >= 40) {
        return 'D';
    } else {
        return 'E';
    }
}

// Example usage:
const marks = parseInt(prompt("Enter the student's marks (0-100): "), 10);
const grade = getGrade(marks);
console.log(`The student's grade is: ${grade}`);
