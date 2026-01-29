class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }
  get name(){
    return this._name;
  }
  get level() {
    return this._level;
  }
  get numberOfStudents() {
    return this._numberOfStudents;
  }
  quickFacts(){
    console.log(`${this.name()} educates ${this.numberOfStudents()} students at the ${this.level()} school level.`);
  }
  pickSubstituteTeacher([substituteTeachers]) {
    let randomNum = Math.floor(Math.random() * (substituteTeachers.length - 1));
    return substiteTeachers[randomNum];
  }
  set numberOfStudents(newNumberOfStudents) {
    (typeof newNumberOfstudents == 'number') ? this._numberOfStudents = newNumberOfStudents : console.log('Invalid input: numberOfStudents must be set to a Number.');
  }
}
class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    super(name, numberOfStudents);
    super(level) = 'primary';
    this._pickupPolicy = pickupPolicy;
  }
  get pickupPolicy() {
    return this._pickupPolicy;
  }

}