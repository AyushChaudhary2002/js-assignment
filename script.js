// eslint-disable-next-line import/extensions
import BookCatlog from './bookCatlog.js';

const bookCatlog = new BookCatlog();

bookCatlog.dataPromise.then((response) => {
  response.json().then((data) => {
    data.sort((a, b) => a.price - b.price);
    sessionStorage.setItem('bookData', JSON.stringify(data));
    bookCatlog.renderBooks(null, null);
  });
}).catch((err) => {
  console.log(err);
});

const searchById = document.querySelector('.js-form-bookId');
searchById.addEventListener('submit', (e) => {
  e.preventDefault();
  const searchByIdValue = bookCatlog.getInputData('.js-input-bookId');
  bookCatlog.removePreviousTableBody();
  bookCatlog.renderBooks('bookId', searchByIdValue);
});

const searchByGenre = document.querySelector('.js-form-genre');
searchByGenre.addEventListener('submit', (e) => {
  e.preventDefault();
  const searchByGenreValue = bookCatlog.getInputData('.js-input-genre');
  bookCatlog.removePreviousTableBody();
  bookCatlog.renderBooks('genre', searchByGenreValue);
});

const searchByPrice = document.querySelector('.js-form-price');
searchByPrice.addEventListener('submit', (e) => {
  e.preventDefault();
  const searchByPriceValue = parseInt(bookCatlog.getInputData('.js-input-price'), 10);
  bookCatlog.removePreviousTableBody();
  bookCatlog.renderBooks('price', searchByPriceValue);
});
sessionStorage.clear();
