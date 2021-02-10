const newButton = document.querySelector("#new-book");
const bookForm = document.querySelector("#form");
const shelf = document.getElementById("book-shelf");
const closeBtn = document.querySelector("#close");

let titleInput = document.getElementById("title");
let authorInput = document.getElementById("author");
let pagesInput = document.getElementById("pages");
let readInput = document.getElementById("read");
let submitBtn = document.getElementById("submit");
let removeBtn = document.getElementById("close");

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

let displayBooks = function (newBook) {
    let ulstring = `
        <ul>
            <li>${newBook.title}</li>
            <li>${newBook.author}</li>
            <li>${newBook.pages}</li>
            <li>${newBook.read}</li>
        </ul>`

    shelf.innerHTML += ulstring;
}

let clearForm = function () {
    bookForm.reset();
}

function addBookToLibrary(e) {

    e.preventDefault();
    let title = titleInput.value;
    let author = authorInput.value;
    let pages = pagesInput.value;
    let read = readInput.value;


    let newBook = new Book(title, author, pages, read);
    displayBooks(newBook);
    clearForm();

}

function newform() {
    let x = document.getElementById("pop-up");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function removeForm() {
    let x = document.getElementById("pop-up");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

bookForm.addEventListener('submit', addBookToLibrary);