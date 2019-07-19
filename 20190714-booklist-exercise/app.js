// book constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// UI constructor
function UI() { }

// add book function to the prototype
UI.prototype.addBookToList = function (book) {
    const list = document.getElementById('book-list');

    // create tr element in list
    const row = document.createElement('tr');
    // insert columns into table row
    row.innerHTML =
        `<td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</a></td>`

    list.appendChild(row);
}

// add clear function to the prototype
UI.prototype.clearFields = function () {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}

// event listeners

document.getElementById('book-form').addEventListener('submit',
    function (e) {

        // form values
        const title = document.getElementById('title').value,
            author = document.getElementById('author').value,
            isbn = document.getElementById('isbn').value;


        // instantiate book
        const book = new Book(title, author, isbn);

        // instantiate UI
        const ui = new UI();

        // add book to list
        ui.addBookToList(book);

        // clear fields
        ui.clearFields();

        e.preventDefault();
    }
);