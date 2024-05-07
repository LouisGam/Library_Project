 const addBookButton = document.getElementById("button");
class Book {
  constructor(id, title, author, read) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.read = read;
  }
}

class Library {
  constructor(bookCount, books) {
    this.bookCount = bookCount;
    this.books = books;
  }

  markRead(checkBox, id) {
    console.log('i ran (markRead)');
    for (let i = 0; i < this.books.length; i++) {
      //if the book id is = to parameter id
      if (this.books[i].id == id) {
        this.books[i].read = true;
        checkBox.checked = true;
        checkBox.disabled = true;
      }
    }
  }
    addBook() {
        console.log('i ran');
        const title = document.getElementById("title");
        const author = document.getElementById("author");
        const read = document.getElementById("read");
        const book = new Book(this.bookCount, title.value, author.value, read.checked); 
        this.books.push(book);
        const tableRow = document.createElement("tr");
        const titleCell = document.createElement("td");
        const authorCell = document.createElement("td");
        const readCell = document.createElement("input");
        readCell.type = "checkbox";
        readCell.checked = book.read;
        readCell.addEventListener('click', (event) => {
            this.markRead(readCell, book.id);
        })
        titleCell.textContent = book.title;
        authorCell.textContent = book.author;
        readCell.textContent = book.read;
        tableRow.append(titleCell, authorCell, readCell);
        const tableBody = document.getElementById("libraryBody");
        tableBody.append(tableRow);
        this.bookCount++;
    }

}

const library = new Library(0, []);

addBookButton.addEventListener("click", (event) => {
event.preventDefault();
library.addBook();
});
