class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  get title() {
    return this._title;
  }
  get isCheckedOut() {
    return this._isCheckedOut;
  }
  get ratings() {
    return this._ratings;
  }
  toggleCheckOutStatus() {
    this._isCheckedOut ? this._isCheckedOut = false : this._isCheckedOut = true;
  }
  getAverageRating() {
    const lengthOfArray = this._ratings.length;
    let averageRating = this._ratings.reduce((currentSum, rating) => currentSum + rating, 0);
    averageRating = averageRating / lengthOfArray;
    return averageRating;
  }
  addRating(rating) {
    this._ratings.push(rating);
  }
  set isCheckedOut(isCheckedOut) {
    this._isCheckedOut = false;
  }
}
class Book extends Media {
  constructor(author, title, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }
  get author() {
    return this._author;
  }
  get pages() {
    return this._pages;
  }
}
class Movie extends Media {
  constructor(director, title, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }
  get director(){
    return this._director;
  }
  get runTime() {
    return this._runTime
  }
}
const bookInstance = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544)
bookInstance.toggleCheckOutStatus()
console.log(bookInstance.isCheckedOut)
bookInstance.addRating(4)
bookInstance.addRating(5)
bookInstance.addRating(5)
console.log(bookInstance.getAverageRating())
const speed = new Movie('Jan de Bont', 'Speed', 116)
speed.toggleCheckOutStatus()
console.log(speed.isCheckedOut)
speed.addRating(1)
speed.addRating(1)
speed.addRating(5)
console.log(speed.getAverageRating())