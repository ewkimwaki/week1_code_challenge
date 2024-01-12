function gradeStudent() {
    let marks = prompt("Enter student marks (0-100): ");
    //student marks will range from 0-100
    if (marks >= 80) {
      return "A";
    } else if (marks >= 60) {
      return "B";
    } else if (marks >= 50) {
      return "C";
    } else if (marks >= 40) {
      return "D";
    } else {
      return "E";
    }
  }
  console.log(gradeStudent());
  //The function gradeStudent() prompts the user to enter student marks between 0 and 100

