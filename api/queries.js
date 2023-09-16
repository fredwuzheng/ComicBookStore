const getBooks = "SELECT * FROM books";
const getBooksById = "SELECT * FROM books WHERE id = $1";
const checkIsbnExists = "SELECT b FROM books b WHERE b.isbn = $1";
const addBook = "INSERT INTO books (bookName, author, publicationDate, category, price, discount, numberOfPages, quantityInStock, soldQuantity, availabilityStatus, Edition, isbn) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)";
const deleteBook = "DELETE FROM books WHERE id = $1";
const updateBookPrice = "UPDATE books SET price = $1 WHERE id = $2" ;
const updateBookDiscount = "UPDATE books SET discount = $1 WHERE id = $2" ;
const updateBookquantityInStock = "UPDATE books SET quantityInStock = $1 WHERE id = $2" ;
const updateBooksoldQuantity = "UPDATE books SET soldQuantity = $1 WHERE id = $2" ;
const updateBookavailabilityStatus = "UPDATE books SET availabilityStatus = $1 WHERE id = $2" ;


module.exports = {
    getBooks,
    getBooksById,
    checkIsbnExists,
    addBook,
    deleteBook,
    updateBookPrice,
    updateBookDiscount,
    updateBookquantityInStock,
    updateBooksoldQuantity,
    updateBookavailabilityStatus,


};