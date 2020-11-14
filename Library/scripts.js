let myLibrary = [];

//Creating the book constructor.
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    if (read) {
      return `${title} by ${author}, ${pages} pages, read.`;
    } else {
      return `${title} by ${author}, ${pages} pages, not read yet.`;
    }
  };
}

//Getting the DOM elements
const popUpForm = document.querySelector("#popup-form");
const newBook = document.querySelector("#new-book-button");
const addBook = document.querySelector("#confirm-add");
const closeForm = document.querySelector("#close-form");

//Bugfix: Prevent form from submitting as it refreshes the page and the DOM, deleting the created divs
popUpForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

//Functionality to add new book
newBook.addEventListener("click", () => {
  popUpForm.style.visibility = "visible";
});
closeForm.addEventListener("click", () => {
  popUpForm.style.visibility = "hidden";
});
function addBookToLibrary(title, author, pages, read) {
  //
  let addedBook = new Book(title, author, pages, read);
  myLibrary.push(addedBook);
  updateLibrary(addedBook);
}
addBook.addEventListener("click", () => {
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let pages = document.querySelector("#pages").value;
  let read = checkRead();
  addBookToLibrary(title, author, pages, read);
  popUpForm.style.visibility = "hidden";
});

function checkRead() {
  let yes = document.querySelector("#yes");
  if (yes.checked) {
    return true;
  } else {
    return false;
  }
}
const library = document.querySelector(".all-books");
function updateLibrary(book) {
  let index = myLibrary.indexOf(book);
  let addedBook = myLibrary[index];

  let colDiv = document.createElement("div");
  colDiv.classList.add("col-12", "col-md-4", "mb-3");
  library.appendChild(colDiv);

  let cardDiv = document.createElement("div");
  cardDiv.classList.add("card");
  colDiv.appendChild(cardDiv);

  let cardHeaderDiv = document.createElement("div");
  cardHeaderDiv.classList.add("card-header", "bg-dark", "text-white");
  cardHeaderDiv.textContent = new Date();
  cardDiv.appendChild(cardHeaderDiv);

  let deleteIcon = document.createElement("i");
  deleteIcon.classList.add("fa", "fa-trash");
  deleteIcon.setAttribute("aria-hidden", "true");
  deleteIcon.addEventListener("click", () => {
    colDiv.remove();
    myLibrary.splice(index, 1);
  });
  cardHeaderDiv.appendChild(deleteIcon);

  let cardBodyDiv = document.createElement("div");
  cardBodyDiv.classList.add("card-body");
  cardDiv.appendChild(cardBodyDiv);

  let cardTitleH5 = document.createElement("h5");
  cardTitleH5.classList.add("card-title");
  cardTitleH5.textContent = addedBook.title;
  cardBodyDiv.appendChild(cardTitleH5);

  let cardText = document.createElement("p");
  cardText.classList.add("card-text", "book-desc");
  cardText.textContent = addedBook.info();
  cardBodyDiv.appendChild(cardText);

  let readButton = document.createElement("button");
  readButton.classList.add("btn", "btn-primary", "read-btn");
  readButton.setAttribute("type", "button");
  readButton.textContent = addedBook.read ? "Read" : "Not read";
  if (addedBook.read) readButton.classList.add("btn-success");
  readButton.addEventListener("click", () => {
    readButton.classList.toggle("btn-success");
    addedBook.read = !addedBook.read;
    if (readButton.textContent == "Read") {
      readButton.textContent = "Not read";
    } else {
      readButton.textContent = "Read";
    }
  });
  cardBodyDiv.appendChild(readButton);
}
