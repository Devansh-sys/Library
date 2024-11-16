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
    addBookToLibrary("The Hobbit","j.k rowling","350","not read");
    addBookToLibrary("immortals of meluha","amish","400","read");
    addBookToLibrary("miles to go","devansh","100","not read");

    iterateLibrary(myLibrary);


    function createCard(book,index){
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
        list3.textContent = 'read Status';
        const checkBox = document.createElement('input');
        checkBox.setAttribute('type','checkbox');
        checkBox.setAttribute('value','read');
        checkBox.style.cssText = 'width:18px;height:18px;';
        checkBox.checked = book.readOrNot === 'read';
        list3.append(checkBox);

        const deleteButton = document.createElement('button');
        deleteButton.setAttribute('type','button');
        deleteButton.setAttribute('value',index);
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'deleteButton';
        listContainer.append(list1,list2,list3);

        detailsContainer.appendChild(listContainer);

        cardContainer.append(titleContainer,dividingLine,detailsContainer,deleteButton);

        booksContainer.appendChild(cardContainer);

    }





    function iterateLibrary(library){
        const booksContainer = document.querySelector('.bookCardsContainer');
        booksContainer.textContent = '';
        library.forEach(function(item,index){
            createCard(item,index);
            
        })
        const removeBtn = document.querySelectorAll(".deleteButton");
        const removeButtons = Array.from(removeBtn);
        console.log(removeButtons);

        removeButtons.forEach((button) => {
            button.addEventListener("click", () => {
                console.log(`${button.value} clicked`)
                let item = removeButtons.indexOf(button);
                library.splice(item, 1);
                console.log(library);
                iterateLibrary(library);
            });
        });
    }

    document.getElementById('menubar').onclick = function(){
        document.querySelector('.formContainer').classList.add('open');
        document.querySelector('.bookCardsContainer').classList.add('opened');
    }

    document.querySelector('.closeButton').onclick = function(){
        document.querySelector('.formContainer').classList.remove('open');
        document.querySelector('.bookCardsContainer').classList.remove('opened');
    }

    document.querySelector('#myForm').addEventListener('submit', (event)=>{
        event.preventDefault();

        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const pages = document.getElementById('pages').value;
        const readOrNot = document.querySelector('input[name="readStatus"]:checked')?.value;
        addBookToLibrary(title, author, pages, readOrNot);

        iterateLibrary(myLibrary);
    })

})
