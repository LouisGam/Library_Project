# Project: Library
## Introduction
Let's create a Book class and create a small Library app.

Library Project Exerise Repo

## Getting Started
Open your command line and navigate to your repos directory (if you do not have a repos folder, then you can use mkdir repos to create one)
Use this template repository to start a new project in your repos folder: git clone <repo_name>
cd repo_name to navigate into your new repo directory
Start Visual Studio Code and select 'Open Folder'. Then select repo_name to open the folder in the editor (or just type code . in your terminal inside the repo directory)
Follow the instructions on the README.md file to complete exercises
Open the index.html file to get started
## Steps
1. In your index.html
1. Add a label and input box for the title
1. Add a label and input box for the author
1. Add a label and checkbox for the read property
1. Add a submit button to add a new book
1. In your app.js, Create a class Book that has the following properties:
- Id (number)
- Title (string)
- Author (string)
- Read (boolean)
1. Create a class Library that has the following properties and methods:
Book count (number)
- Books (array of books)
- markRead method that will:
- Take in a parameter checkbox and id
- Loop through the library books
- If the book id is the same as the param id, change the book read property to true, the checkbox checked attribute to true, and the checked disabled attribute to true
- addBook method that will:
- Select the title input value, author input value, and read checkbox value
- Use the book constructor to create a new book, passing in the input value, author value, and read checkbox value as params
- Create a new table row
- Create new table cells title, author and read properties of the newly added book
Append the new table cells to the newly created row
- Select the table body
- Append the new row to the table body
- Increment library bookCount by one
- Select the Add Book button from your index.html
- Add an event listener to the button element that listens for a click event, and calls the library addBook
BONUS
1. Add a method to the Library class that removes a book from the books array
1. Update your UI on the index.html page to have a Remove button per book item, with an event listener for 'click' events to call the removeBook Library method
Hint: Use the book id property to find, then remove the book

