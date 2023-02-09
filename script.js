const table = document.querySelector(".table > tbody");

let myLibrary = [];

function Book(name, author, pages, status) {
  // Constructor
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

function addBookToLibrary() {}

function makeTableCol(textValue) {
  let col = document.createElement("td");
  col.textContent = textValue;
  return col;
}

function makeTableDeleteButton() {
  let col = document.createElement("td");
  let button = document.createElement("button");
  button.textContent = "DELETE";
  col.appendChild(button);
  return col;
}

function makeTableStatusButton(value) {
  let col = document.createElement("td");
  let button = document.createElement("button");
  button.textContent = value == "read" ? "READ" : "NOT READ";
  col.appendChild(button);
  return col;
}

function createRowsDOM() {
  let bookRows = document.createDocumentFragment();

  myLibrary.forEach((book) => {
    let row = document.createElement("tr");
    // Create columns and assign to row
    row.appendChild(makeTableCol(book.name));
    row.appendChild(makeTableCol(book.author));
    row.appendChild(makeTableCol(book.pages));
    row.appendChild(makeTableStatusButton(book.status));
    // Add delete button
    row.appendChild(makeTableDeleteButton());
    // Append row to bookRows
    bookRows.append(row);
  });

  table.appendChild(bookRows);
}

const newBook = new Book("test", "safd", "455", "read");
myLibrary.push(newBook);

createRowsDOM();
