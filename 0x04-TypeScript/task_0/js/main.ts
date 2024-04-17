interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}
const studentA : Student = {
  firstName: "Dijaunte",
  lastName: "Murray",
  age: 19,
  location: "Alabama"
}

const studentB : Student = {
  firstName: "Shai-Gilgeous",
  lastName: "Alexander",
  age: 21,
  location: "Pensilvenyia"
}

studentList: Student[] = [studentA, studentB];


const table = document.createElement('table');
const tbody = document.createElement('tbody');

studentList.forEach((student) => {
  const row = document.createElement("tr");
  const firstNameCell = document.createElement("td");
  const locationCell = document.createElement("td");

  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);
