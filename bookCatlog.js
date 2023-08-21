/* eslint-disable class-methods-use-this */
export default class BookCatlog {
  constructor() {
    this.dataPromise = fetch('data.json');
  }

  addElementToParent(book) {
    const parentElement = document.createElement('tr');
    Object.keys(book).forEach((key) => {
      const element = document.createElement('td');
      element.textContent = book[key];
      parentElement.appendChild(element);
    });
    return parentElement;
  }

  addTableRowElementToTable(parent, data) {
    const tableBody = document.createElement('tbody');
    tableBody.classList.add('js-table-body');
    data.forEach((book) => {
      const bookRow = this.addElementToParent(book);
      tableBody.appendChild(bookRow);
    });
    parent.appendChild(tableBody);
  }

  renderBooks(filterTag, filterValue) {
    const bookData = JSON.parse(sessionStorage.getItem('bookData'));
    const table = document.querySelector('.js-all-books');
    if (filterTag != null) {
      const filterBookData = bookData.filter((book) => book[filterTag] === filterValue);
      this.addTableRowElementToTable(table, filterBookData);
      return;
    }
    this.addTableRowElementToTable(table, bookData);
  }

  removePreviousTableBody() {
    const table = document.querySelector('.js-all-books');
    if (table.childNodes.length === 1) return;
    const tbody = document.querySelector('.js-table-body');
    table.removeChild(tbody);
  }

  getInputData(selector) {
    const searchByInput = document.querySelector(selector);
    const searchByValue = searchByInput.value;
    searchByInput.value = '';
    return searchByValue;
  }
}
