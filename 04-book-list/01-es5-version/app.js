// Book constructor
function Book(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}


// UI constructor
function UI(){
}


// addBookToList to prototype
UI.prototype.addBookToList  = function(book){
    const list = document.getElementById('book-list');
    // Create row element
    const tr = document.createElement('tr');
    // Create columns
    tr.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">x</a></td>
        `;
    list.appendChild(tr);
}

// Delete book from the list
UI.prototype.deleteBookFromList = function(target){
    if(target.classList.contains('delete')){
        target.parentElement.parentElement.remove();
    }
}

// Clear the fields
UI.prototype.clearTheFields = function(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = "";
    document.getElementById('isbn').value = "";
}

// Show alert
UI.prototype.showAlert = function(message, className){
    const div = document.createElement('div');
    // Apply class names
    div.className = `alert ${className}`;
    // Change text
    div.appendChild(document.createTextNode(message));
    // Get parent
    const container = document.querySelector('.container');
    // Get sibling
    const form = document.getElementById('book-form');
    // Insert new div before sibling
    container.insertBefore(div, form);

    // Timeout after 3 seconds
    setTimeout(function(){
        document.querySelector('.alert').remove();
    },2000);
}


function Store(){

}

// Get Books from Local storage
Store.getBooks = function(){
    let books;
    if(localStorage.getItem('books')){
        books = JSON.parse(localStorage.getItem('books'));
    }else{
        books = [];
    }
    return books;
}

// Display books on the list
Store.displayBooks = function(){
    // Get books array from local storage
    const books = Store.getBooks();

    // Loop through array and display them
    if(books.length>0){
        books.forEach(book => {
            const ui = new UI;
            ui.addBookToList(book);
        });
    }        
}

// Add book to local storage
Store.addBook = function(book){
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
}

// Delete book from local Storage
Store.deleteBook = function(target){
    const parent = target.parentElement.parentElement;
    const childrenArray = Array.from(parent.children);
    const bookToBeDeleted = new Book(childrenArray[0].textContent, childrenArray[1].textContent, childrenArray[2].textContent);

    const books = Store.getBooks();
    
    let i;
    for(let index in books){
        const book = books[index];
        
        if(book.title === bookToBeDeleted.title && book.author === bookToBeDeleted.author && book.isbn === bookToBeDeleted.isbn){
            i = index;
        }
    }

    // delete the book from books array
    books.splice(i,1);

    // Store the new books array
    localStorage.setItem('books', JSON.stringify(books));
}



// Event listeners

// Form Submission
document.getElementById('book-form').addEventListener('submit', function(e){
    
    
    // Get form values
    const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;

    
    // Instantiate UI
    const ui = new UI();


    // Validation
    if(title === '' || author === '' || isbn === ''){
        

        // Error alert
        ui.showAlert('Please fill all the blanks', 'error');

    }else{


        // Creating book
        const book = new Book(title, author, isbn);        


        // Add book to the list
        ui.addBookToList(book);

        // Add to local storage
        Store.addBook(book);

        // Show alert
        ui.showAlert('Book successfully added', 'success')


        // Clear the fields
        ui.clearTheFields();
    }   


    e.preventDefault();
});


// Deleting the list
document.getElementById('book-list').addEventListener('click', function(e){
    e.preventDefault();
    // Instantiating UI
    const ui = new UI();

    // Deleting the book
    ui.deleteBookFromList(e.target);

    // Deleting the book from local storage
    Store.deleteBook(e.target);

    // Show the alert
    ui.showAlert('Book removed', 'success')
    
});


// Displaying the list
document.addEventListener('DOMContentLoaded', Store.displayBooks);