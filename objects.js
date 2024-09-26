
// Create a Person with few properties and inherit to student via constructor


var Person1 = {
    id: 1,
    name: "Alice",
    age: 20,
    getDetails: function() {
        return `
            ${this.id},
            ${this.name},
            ${this.age}
        `
    }
}

console.log("Person object created: ");
console.log(Person1.getDetails());

var Student1 = new Object(Person1)

console.log("Student object created: ");
Student1.id = 101;
Student1.major = "Math";

Student1.getDetails = function() {

    return `
        ${this.id},
        ${this.name},
        ${this.age},
        ${this.major}
    `
}

console.log("Student overide methods in Person");
console.log(Student1.getDetails());

// Create a Person with few properties and inherit to student via Object.create

var Person2 = {
    id: 2,
    name: "Bob",
    age: 20,
    getDetails : function() {
        return `
            ${this.id},
            ${this.name},
            ${this.age}
        `
    }
}

console.log("Person object created: ");
console.log(Person2.getDetails());


var Student2 = Object.create(Person2);

Student2.id = 201;
Student2.major = "Construction";
Student2.title = "Builder";

Student2.getDetails = function() {
    return `
        ${this.id},
        ${this.name},
        ${this.age},
        ${this.major},
        ${this.title}
    `
}

console.log("Student overide methods in Person");
console.log(Student2.getDetails());

// Create three objects and merge their properties

var Major1 = {
    majorId : 123,
    college : "Engineering",
    degree : "Computer Science"
}

var Course1 = {
    courseId : 101,
    title : "OOP",
    college : "Engineering",
    degree : "Computer Science"
}

var CourseDetail = {
    courseId : 101,
    credits : 4,
    duration : 0.5
    }

var CourseInfo = Object.assign(Major1, Course1, CourseDetail);

console.log(CourseInfo);
