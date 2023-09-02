const myLibrary = [];

function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
	this.readYet = function() {
		return read ? "read" : "not read yet";
	}
	this.info = function() {
		const ifRead = this.readYet();
		return `${title} by ${author}, ${pages} pages, ${ifRead}`;
	}
}

function addBookToLibrary(book) {
	myLibrary.push(book);
	displayGrid();
}

// Rerender the whole grid, this could probably be smarter, like appending to the grid when adding a book
function displayGrid() {
	let div = document.querySelector("#library");
	
	// Clears the grid
	div.replaceChildren();

	for (const book of myLibrary) {
		let card = document.createElement("div");
		card.classList.add("card")

		let title = document.createElement("h2");
		title.innerText = book.title;

		let author = document.createElement("p");
		author.innerText = book.author;

		let pages = document.createElement("p");
		pages.innerText = `${book.pages} pages`;
		
		let read = document.createElement("p");
		read.innerText = book.readYet();

		card.appendChild(title);
		card.appendChild(author);
		card.appendChild(pages);
		card.appendChild(read);

		div.appendChild(card);
	}
}

function dislayeNewBookForm() {
	const dialog = document.querySelector("#new-book-dialog");
	dialog.showModal();
}

function closeNewBookForm() {
	const dialog = document.querySelector("#new-book-dialog");
	const form = document.querySelector('#new-book-form');
	dialog.close();
	form.reset();
}

function createBookFromForm(data) {
	const book = new Book(data.get("title"), data.get("author"), data.get("pages"), data.has("read"));
	addBookToLibrary(book);
}

let theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, true);
addBookToLibrary(theHobbit);

let chamberOfSecrets = new Book("Harry Potter and the Chamber of Secrets", "J.K. Rowling", 341, false);
addBookToLibrary(chamberOfSecrets);

let threeBodyProblem = new Book("The Three Body Problem", "Cixin Liu", 416, true);
addBookToLibrary(threeBodyProblem);

let newBookBtn = document.querySelector('#new-book');
newBookBtn.addEventListener("click", () => dislayeNewBookForm());

let closeBtn = document.querySelector('#close');
closeBtn.addEventListener("click", () => closeNewBookForm());

let form = document.querySelector('#new-book-form');
form.addEventListener("submit", (e) => {
	e.preventDefault();
	const fd = new FormData(form);
	console.log(fd);
	createBookFromForm(fd);
	closeNewBookForm();
});
