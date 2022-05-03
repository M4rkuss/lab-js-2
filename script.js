// 1)
// class Student {
//   static count = 0;
//   constructor (FIO, dateOfBirth, tel, school, groupNumber) {
//     this._FIO = FIO;
//     this._dateOfBirth = dateOfBirth;
//     this._tel = tel;
//     this._school = school;
//     this._groupNumber = groupNumber;
//     Student.count++;
//   }
//   output() {
//     document.write(`${this._FIO}, ${this._dateOfBirth}, ${this._tel}, ${this._school}, ${this._groupNumber}`)
//   }
//   set FIO (name) {
//     if (name !== "") this._FIO = name;
//   }
//   get FIO () {
//     return this._FIO;
//   }
//   static showCounter () {
//     console.log(Student.count)
//   }
// }
//
// let student = new Student ("Buchatskiy Mark Dmitrievich", "10.07.2003", "+380956230328", "ITStep", "F14")
// student.FIO = "Buchatskiy Daniel Dmitrievich"
// console.log(student.FIO)
// Student.showCounter()
// student.output()

// 2)
class Circle {
  constructor (radius) {
    this._radius = radius;
  }
  get radius () {
    return this._radius;
  }
  set newRadius (newRadius) {
    this._radius = newRadius;
  }
  get diameter () {
    return (this.radius * 2)
  }
  square () {
    return `Площадь окружности - ${(3.14 * this.radius ** 2)} кв. ед.`
  }
  circleLength () {
    return `Длина окружности - ${3.14 * this.diameter}`
  }
}

let circle = new Circle(10);
circle.newRadius = 15
console.log(circle.radius)
console.log(circle.diameter)
console.log(circle.square())
console.log(circle.circleLength())