const Pool = require("pg").Pool;

const pool  = new Pool({
    user: 'fred',
    host: 'localhost',
    database: 'books',
    password: 'test',
    port: 5432,
});

async function createTable() {
    const client = await pool.connect();
  
    try {
      await client.query(`
        CREATE TABLE books (
            ID SERIAL PRIMARY KEY,
            bookName VARCHAR(255),
            author VARCHAR(255),
            publicationDate DATE,
            category VARCHAR(255),
            price numeric,
            discount numeric,
            numberOfPages int,
            quantityInStock int,
            soldQuantity int,
            availabilityStatus VARCHAR(255),
            Edition VARCHAR(255), 
            isbn VARCHAR(255)
        );
    
      `);
      console.log('Table created successfully!');
    } catch (error) {
      console.error('Error creating table:', error);
    } finally {
      client.release();
    }
  }

  // Call the createTable function (only once to create the table)
  createTable();