interface Author {
    name: string;
    birthYear: number;
    genre: string;
}

interface Book {
    title: string;
    author: string;
    nbPages: number;
    isAvailable: boolean;
}

function createBook(title: string, author: string, nbPages: number): Book {
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

    findBook(title: string) {
        return this.books.find(book => book.title === title);
    }

    listAvailableBooks() {
        return this.books.filter(book => book.isAvailable);
    }   

    getBooksByAuthor(authorName: string): Book[]{
        return this.books.filter(book => book.author === authorName)
    }

}

const book1 = createBook("Dénoncez vous", "WTF",1)
const book2 = createBook("Mais ou est internet ?", "404 not found", 404)

const library = new Library();
library.addBook(book1);
library.addBook(book2);


console.log("All Books:", library.books);
console.log("Available Books:", library.listAvailableBooks());
console.log("Books by Author One:", library.getBooksByAuthor("Author One"));

library.removeBook("Book One");
console.log("After Removing 'Book One':", library.books);

toggleAvailability(book2);
console.log("After Toggling Availability of 'Book Two':", book2.isAvailable);