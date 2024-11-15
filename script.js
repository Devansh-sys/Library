document.addEventListener('DOMContentLoaded', function(){
    const myLibrary = [];


    function Book (title,author,pages,readOrNot){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.readOrNot = readOrNot;
    }

    function addBookToLibrary(title,author,pages,readOrNot) {
        let newBook = new Book(title,author,pages,readOrNot);
        myLibrary.push(newBook);

    }


    function createCard(book){
        const booksContainer = document.querySelector('.bookCardsContainer');
        const cardContainer = document.createElement('div');
        cardContainer.setAttribute('class','cardContainer');

        //creating the child elements of cardConatainer

        const titleContainer = document.createElement('div');
        titleContainer.setAttribute('class','title');
        titleContainer.textContent = book.title;
        const dividingLine = document.createElement('hr');

        const detailsContainer = document.createElement('div');
        detailsContainer.setAttribute('class','details');

        //creating elements which are inside the details
        const listContainer = document.createElement('ul');
        //creating li elements which are into ul
        const list1 = document.createElement('li');
        list1.textContent = book.author;
        const list2 = document.createElement('li');
        list2.textContent = book.pages;
        const list3 = document.createElement('li');
        list3.className = 'status';
        list3.textContent = book.readOrNot;

        listContainer.append(list1,list2,list3);

        detailsContainer.appendChild(listContainer);

        cardContainer.append(titleContainer,dividingLine,detailsContainer);

        booksContainer.appendChild(cardContainer);

    }

    function iterateLibrary(library){
        library.forEach(function(item){
            createCard(item);
        })
    }


    document.getElementById('menubar').onclick = function(){
        document.querySelector('.formContainer').classList.add('open');
        document.querySelector('.bookCardsContainer').classList.add('opened');
    }

    document.querySelector('.closeButton').onclick = function(){
        document.querySelector('.formContainer').classList.remove('open');
        document.querySelector('.bookCardsContainer').classList.remove('opened');
    }

    addBookToLibrary("The Hobbit","j.k rowling","350","not read");
    addBookToLibrary("immortals of meluha","amish","400","read");
    addBookToLibrary("miles to go","devansh","100","not read");
    addBookToLibrary("miles to go","devansh","100","not read");
    addBookToLibrary("miles to go","devansh","100","not read");
    addBookToLibrary("miles to go","devansh","100","not read");
    addBookToLibrary("miles to go","devansh","100","not read");
    addBookToLibrary("miles to go","devansh","100","not read");
    addBookToLibrary("miles to go","devansh","100","not read");
    addBookToLibrary("miles to go","devansh","100","not read");
    addBookToLibrary("miles to go","devansh","100","not read");
    addBookToLibrary("miles to go","devansh","100","not read");
    addBookToLibrary("miles to go","devansh","100","not read");
    addBookToLibrary("miles to go","devansh","100","not read");
    addBookToLibrary("miles to go","devansh","100","not read");
    addBookToLibrary("miles to go","devansh","100","not read");
    addBookToLibrary("miles to go","devansh","100","not read");
    addBookToLibrary("miles to go","devansh","100","not read");
    addBookToLibrary("miles to go","devansh","100","not read");
    addBookToLibrary("miles to go","devansh","100","not read");
    addBookToLibrary("miles to go","devansh","100","not read");
    addBookToLibrary("miles to go","devansh","100","not read");
    addBookToLibrary("miles to go","devansh","100","not read");
    addBookToLibrary("miles to go","devansh","100","not read");
    addBookToLibrary("miles to go","devansh","100","not read");
    addBookToLibrary("miles to go","devansh","100","not read");
    addBookToLibrary("miles to go","devansh","100","not read");
    addBookToLibrary("miles to go","devansh","100","not read");
    addBookToLibrary("miles to go","devansh","100","not read");
    addBookToLibrary("miles to go","devansh","100","not read");
    addBookToLibrary("miles to go","devansh","100","not read");
    addBookToLibrary("miles to go","devansh","100","not read");
    addBookToLibrary("miles to go","devansh","100","not read");

    iterateLibrary(myLibrary);


})
