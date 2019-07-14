// book constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// UI constructor
function UI() { }

// add function to the prototype
UI.prototype.addBookToList = function (book) {

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

        console.log(book);

        e.preventDefault();
    }
);