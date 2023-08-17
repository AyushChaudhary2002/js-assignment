import fs from 'fs';
import short from 'short-uuid';

class Book {
  constructor() {
    this.genres = [
      'Mystery',
      'Science Fiction',
      'Fantasy',
      'Romance',
      'Thriller',
      'Historical Fiction',
      'Horror',
      'Adventure',
      'Non-fiction',
      'Biography',
      'Self-help',
    ];
    this.bookData = [];
  }

  generateBookData() {
    for (let bookCount = 0; bookCount < 100; bookCount += 1) {
      const book = {
        bookId: short.generate(),
        genre: this.genres[Math.floor(Math.random() * 100) % this.genres.length],
        price: Math.floor(Math.random() * 10000),
      };
      this.bookData.push(book);
    }
    return this.bookData;
  }
}

const data = JSON.stringify(new Book().generateBookData());
fs.writeFileSync('data.json', data);
