export default class HolbertonCourse {
    constructor(name, length, students) {
        this._name = this._validateString(name, "name");
        this._length = this._validateNumber(length, "length");
        this._students = this._validateArray(students, "students");
    }

    get name() {
        return this._name;
    }
    set name(value) {
        this._name = this._validateString(value, "name");
    }

    get length() {
        return this._length;
    }
    set length(value) {
        this._length = this._validateNumber(value, "length");
    }

    get students() {
        return this._students;
    }
    set students(value) {
        this._students = this._validateArray(value, "students");
    }

    _validateString(value, attributeName) {
        if (typeof value !== "string") {
            throw new TypeError(`${attributeName} must be a string.`);
        }
        return value;
    }

    _validateNumber(value, attributeName) {
        if (typeof value !== "number" || isNaN(value) || !isFinite(value)) {
            throw new TypeError(`${attributeName} must be a number.`);
        }
        return value;
    }

    _validateArray(value, attributeName) {
        if (!Array.isArray(value)) {
            throw new TypeError(`${attributeName} must be an array.`);
        }
        return value;
    }
}
