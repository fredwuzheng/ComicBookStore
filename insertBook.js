const Pool = require("pg").Pool;

const pool  = new Pool({
    user: 'fred',
    host: 'localhost',
    database: 'books',
    password: 'test',
    port: 5432,
});

async function insertComicBook(bookName, author, publicationDate, category, price, discount, numberOfPages, quantityInStock, soldQuantity, availabilityStatus, Edition, isbn) {
    const client = await pool.connect();
  
    try {
      const query = `
        INSERT INTO books (bookName, author, publicationDate, category, price, discount, numberOfPages, quantityInStock, soldQuantity, availabilityStatus, Edition, isbn)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
        RETURNING id;
      `;
      const values = [bookName, author, publicationDate, category, price, discount, numberOfPages, quantityInStock, soldQuantity, availabilityStatus, Edition, isbn];
  
      const result = await client.query(query, values);
      const insertedBookId = result.rows[0].id;
      console.log(`Inserted book with ID ${insertedBookId}`);
    } catch (error) {
      console.error('Error inserting book:', error);
    } finally {
      client.release();
    }
}

insertComicBook('Spider-Man: The Amazing Spider-Man Vol. 1', 'Stan Lee, Steve Ditko', '1963-03-10', 'Comic', 9.99, 1.00, 32, 100, 50, 'In Stock', 'First Edition', '978-0785199613');
insertComicBook('Batman: The Dark Knight Returns', 'Frank Miller', '1986-02-01', 'Comic', 12.99, 1.25, 224, 75, 40, 'In Stock', 'First Edition', '978-1563893421');
insertComicBook('X-Men: Days of Future Past', 'Chris Claremont, John Byrne', '1981-01-10', 'Comic', 8.95, 1.00, 144, 50, 25, 'In Stock', 'First Edition', '978-0785164536');
insertComicBook('Wonder Woman: The Hiketeia', 'Greg Rucka', '2002-02-01', 'Comic', 14.49, 1.50, 96, 30, 15, 'In Stock', 'First Edition', '978-1563896910');
insertComicBook('The Sandman: Preludes & Nocturnes', 'Neil Gaiman', '1989-01-01', 'Comic', 11.99, 1.25, 240, 60, 30, 'In Stock', 'First Edition', '978-1401225759');
insertComicBook('Superman: Birthright', 'Mark Waid, Leinil Francis Yu', '2004-09-01', 'Comic', 10.99, 1.00, 192, 80, 35, 'In Stock', 'First Edition', '978-1401202521');
insertComicBook('The Walking Dead: Volume 1', 'Robert Kirkman, Tony Moore', '2003-11-01', 'Comic', 9.95, 1.00, 144, 120, 80, 'In Stock', 'First Edition', '978-1582406725');
insertComicBook('Watchmen', 'Alan Moore, Dave Gibbons', '1986-09-01', 'Comic', 15.95, 1.50, 416, 40, 15, 'In Stock', 'First Edition', '978-0930289232');
insertComicBook('Sandman Mystery Theatre: The Tarantula', 'Matt Wagner, Guy Davis', '1993-11-01', 'Comic', 11.49, 1.25, 192, 35, 20, 'In Stock', 'First Edition', '978-1563891410');
insertComicBook('The Incredible Hulk: The Return of the Beast', 'Peter David, Dale Keown', '1990-03-01', 'Comic', 9.99, 1.00, 64, 55, 25, 'In Stock', 'First Edition', '978-0871355919');