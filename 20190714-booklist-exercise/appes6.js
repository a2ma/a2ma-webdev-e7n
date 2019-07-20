class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    addBookToList(book) {
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

    deleteBook(target) {
        if (target.className === 'delete') {
            if(confirm('Are you sure you want to delete this book?')){
                target.parentElement.parentElement.remove();
            }
        }
    }

    clearFields() {
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }

    showAlert(message, className) {
        // create a div
        const div = document.createElement('div');
        // add class to div
        div.className = `alert ${className}`;
        // add text to div
        div.appendChild(document.createTextNode(message));

        // get parent
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');

        // insert alert
        container.insertBefore(div, form);

        // disappear after 5 seconds
        setTimeout(function () {
            document.querySelector('.alert').remove();
        }, 5000);
    }
}

// event listener for adding book
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

        console.log(ui);

        // validate books
        if (title == '' || author == '' || isbn == '') {
            // error alert
            ui.showAlert('Please fill in all fields!', 'error');
        } else {
            // add book to list
            ui.addBookToList(book);
            ui.showAlert('Book successfully added!', 'success');
            // clear fields
            ui.clearFields();
        }


        e.preventDefault();
    }
);

// event listener for deletion
document.getElementById('book-list').addEventListener('click', function (e) {
    const ui = new UI();

    ui.deleteBook(e.target);

    // show message
    ui.showAlert('Book removed', 'success');

    console.log('deleted' + e.target);

    e.preventDefault();
});