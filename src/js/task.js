export default class Task {
  constructor(name) {
    this.name = name;
  }
  static isEqual(task1, task2) {
    return task1.name === task2.name;
  }
}
