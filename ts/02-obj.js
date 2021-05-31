var Student = /** @class */ (function () {
    function Student() {
    }
    Student.prototype.name = function () {
        console.log("typeScript");
    };
    return Student;
}());
var student = new Student();
student.name();
