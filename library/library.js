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
	div.innerHTML = '';

	for (const book of myLibrary) {
		console.log(book);
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


let theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, true);
addBookToLibrary(theHobbit);

let chamberOfSecrets = new Book("Harry Potter and the Chamber of Secrets", "J.K. Rowling", 341, false);
addBookToLibrary(chamberOfSecrets);

let threeBodyProblem = new Book("The Three Body Problem", "Cixin Liu", 416, true);
addBookToLibrary(threeBodyProblem);
