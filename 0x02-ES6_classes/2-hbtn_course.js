export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  set name(name) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw TypeError('Name must be a string');
    }
  }

  get name() {
    return this._name;
  }

  set length(length) {
    if (typeof length === 'number') {
      this._length = length;
    } else {
      throw TypeError('Length must be a number');
    }
  }

  get length() {
    return this._length;
  }

  set students(students) {
    if (Array.isArray(students)) {
      for (const student of students) {
        if (!(typeof student === 'string')) {
          throw TypeError('Students must be an array of strings');
        }
      }
      this._students = students;
    } else {
      throw TypeError('Students must be an array of strings');
    }
  }

  get students() {
    return this._students;
  }
}
