const myLibrary = [];


function Book (title,author,pages,readOrNot){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readOrNot = readOrNot;
}

function addBookToLibrary(title,author,pages,readOrNot) {
    newBook = new Book(title,author,pages,readOrNot);
    myLibrary.push(newBook);

}


// function createCard(book){
//     const cardContainer = document.createElement('div');
//
// }