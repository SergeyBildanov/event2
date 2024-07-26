/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/filter.js
function filterBy(contacts, filterCallback) {
  return contacts.filter(filterCallback);
}
function containsText(data, search) {
  const clean = search.trim().toLowerCase();
  return data.toLowerCase().includes(clean);
}
;// CONCATENATED MODULE: ./src/js/task.js
class Task {
  constructor(name) {
    this.name = name;
  }
  static isEqual(task1, task2) {
    return task1.name === task2.name;
  }
}
;// CONCATENATED MODULE: ./src/js/task-widget.js


const filterCb = (search, task) => {
  return containsText(task.name, search);
};
class TaskWidget {
  constructor(element) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    if (!element) {
      throw new Error("Виджет не найден.");
    } else {
      this._element = element;
      this._pinned = element.querySelector(".pinned-container");
      this._container = element.querySelector(".tasks-container");
      this._filter = element.querySelector(".task-filter");
      this._tasks = [];
      this._filter.addEventListener("submit", e => {
        e.preventDefault();
        let task = new Task(e.target.firstElementChild.value);
        let equal = this._tasks.reduce((acc, item) => {
          acc = acc + Task.isEqual(item, task);
          return acc;
        }, false);
        if (!equal) {
          this._tasks.push(task);
        }
        this.renderTasks();
        this._filter.reset();
      });
      this._filter.addEventListener("input", e => {
        this.filter(e.target.value);
      });
      this._container.addEventListener("click", e => {
        if (e.target.closest("#radio")) {
          this._pinned.appendChild(e.target.closest(".task"));
          this._tasks = this._tasks.filter(task => {
            return task.name !== e.target.previousElementSibling.textContent;
          });
          this._pinned.classList.toggle("hidden");
          this._pinned.previousElementSibling.classList.toggle("hidden");
        }
      });
    }
  }
  renderTask(task) {
    return `<div class="task">
        <label for="radio">${task.name}</label>
        <input id="radio" type="radio">
      </div>`;
  }
  filter(str) {
    const filterCallback = filterCb.bind(null, str);
    if (str) {
      this.renderItems(filterBy(this._tasks, filterCallback));
    } else {
      this.renderTasks();
    }
  }
  renderItems(arr) {
    this._clear();
    arr.forEach(item => {
      this._container.insertAdjacentHTML("beforeEnd", this.renderTask(item));
    });
    if (this._container.children.length) {
      this._container.previousElementSibling.classList.add("hidden");
    } else {
      this._container.previousElementSibling.classList.remove("hidden");
    }
  }
  renderTasks() {
    this.renderItems(this._tasks);
  }
  _clear() {
    let array = Array.from(this._container.children);
    for (let i = 0; i < array.length; i++) {
      array[i].remove();
    }
  }
}
;// CONCATENATED MODULE: ./src/js/app.js

let taskWidget = new TaskWidget(".widget");
console.log(taskWidget);
;// CONCATENATED MODULE: ./src/index.js



// TODO: write your code in app.js
/******/ })()
;