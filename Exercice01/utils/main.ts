interface Author {
    name: string;
    birthYear: number;
    genre: string[];
}

interface Book {
    title: string;
    author: Author;
    nbPages: number;
    isAvailable: boolean;
}

function createBook(title: string, author: Author, nbPages: number): Book {
    let book: Book = {
        title: title,
        author: author,
        nbPages: nbPages,
        isAvailable: true
    };
    return book;
}

let toggleAvailability = (book: Book) => {
    book.isAvailable = !book.isAvailable;
    return book.isAvailable;
}

class Library {
    constructor(public books: Book[] = []) {}

    addBook(book: Book) {
        this.books.push(book);
    }

    removeBook(title: string) {
        this.books = this.books.filter(book => book.title !== title);
    }

    /* autre possibilité

    removeBook(title: string): void {
        const index = this.books.findIndex(book => book.title === title);
        if (index !== -1) {
            this.books.splice(index, 1);
        }
    }
    */

    findBookByTitle(title: string) {
        return this.books.find(book => book.title === title);
    }

    listAvailableBooks() {
        return this.books.filter(book => book.isAvailable);
    }   

    getBooksByAuthor(authorName: string): Book[] {
        return this.books.filter(book => book.author.name === authorName);
    }
}

// Testing
const author1: Author = { name: "WTF", birthYear: 1980, genre: ["Science Fiction", "Fantasy"] };
const author2: Author = { name: "404 Not FOUND", birthYear: 1990, genre: ["Science Fiction", "Fantasy"] };

const book1 = createBook("Dénoncez vous", author1, 1);
const book2 = createBook("Mais ou est internet ?", author2, 404);

const library = new Library();
library.addBook(book1);
library.addBook(book2);

console.log("All Books:", library.books);
console.log("Available Books:", library.listAvailableBooks());
console.log("Books by Author WTF:", library.getBooksByAuthor("WTF"));

library.removeBook("Dénoncez vous");
console.log("After Removing 'Dénoncez vous':", library.books);

toggleAvailability(book2);
console.log("After Toggling Availability of 'Mais ou est internet ?':", book2.isAvailable);