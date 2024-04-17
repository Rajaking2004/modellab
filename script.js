
function Student(name, id) {
  this.name = name;
  this.id = id;
  this.events = [];
}

Student.prototype.addEvent = function(event) {
  this.events.push(event);
}


Student.prototype.displayDetails = function() {
  console.log("Student Name:", this.name);
  console.log("Student ID:", this.id);
  console.log("project Attended:");
  this.events.forEach(function(event) {
    console.log("- " + event);
  });
}

function addEventToStudent(student, event) {
  student.addEvent(event);
  console.log("Event added successfully!");
}

// Example usage
var student1 = new Student("raja", 123);
var student2 = new Student("gokul", 456);

addEventToStudent(student1, "smartindia");
addEventToStudent(student1, "psg");
addEventToStudent(student2, "innovo");

console.log("Student 1 Details:");
student1.displayDetails();

console.log("\nStudent 2 Details:");
student2.displayDetails();
