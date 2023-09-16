const pool = require('.././db');
const queries = require('./queries');

const getBooks = (req,res) => {
   pool.query(queries.getBooks, (error, result) =>{
    if(error) throw error;
    res.status(200).json(result.rows);
   });
};

const getBooksById = (req,res) => {

    const id = parseInt(req.params.id);

    pool.query(queries.getBooksById,[id], (error, result) =>{
     if(error) throw error;
     res.status(200).json(result.rows);
    });
 };

const addBook = (req,res) =>{
    const {bookName, author, publicationDate, category, price, discount, numberOfPages, quantityInStock, soldQuantity, availabilityStatus, Edition, isbn} =req.body;
    // check if isbn exists
    pool.query(queries.checkIsbnExists,[isbn], (error,result) =>{
        if (result.rows.length){
            res.send("Book isbn already exists");
        }
    
        else{
            pool.query(queries.addBook,[bookName, author, publicationDate, category, price, discount, numberOfPages, quantityInStock, soldQuantity, availabilityStatus, Edition, isbn], (error,results) =>{
                if(error) throw error;
                res.status(201).send(bookName, " created Successfully!");
            })
        }
    });
};

const deleteBook = (req,res) =>{
    const id = req.params.id;
    // check if id exists
    pool.query(queries.getBooksById,[id], (error,results) =>{
        const noBookFound = !results.rows.length;
         if (noBookFound){
            res.send("Book does not exist in the database");
        }
        else{
            pool.query(queries.deleteBook,[id],(error,results) =>{
                if(error) throw error;
                res.status(200).send( " Book Removed Successfully!");
         
            });
        }
    });
};

const updateBookPrice = (req,res) =>{
     const {id,price} = req.body;
    // check if id exists
  
    pool.query(queries.getBooksById,[id], (error,results) =>{
        const noBookFound = !results.rows.length;
         if (noBookFound){
            res.send("Book does not exist in the database");
        }
        else{
            pool.query(queries.updateBookPrice,[price,id],(error,results) =>{
                if(error) throw error;
                res.status(200).send( " Book Price Updated Successfully!");
         
            });
        }
    });
};

const updateBookDiscount = (req,res) =>{
    const {id,discount} = req.body;
   // check if id exists
 
   pool.query(queries.getBooksById,[id], (error,results) =>{
       const noBookFound = !results.rows.length;
        if (noBookFound){
           res.send("Book does not exist in the database");
       }
       else{
           pool.query(queries.updateBookDiscount,[discount,id],(error,results) =>{
               if(error) throw error;
               res.status(200).send( " Book Discount Updated Successfully!");
        
           });
       }
   });
};

const updateBookquantityInStock = (req,res) =>{
    const {id,quantityInStock} = req.body;
   // check if id exists
 
   pool.query(queries.getBooksById,[id], (error,results) =>{
       const noBookFound = !results.rows.length;
        if (noBookFound){
           res.send("Book does not exist in the database");
       }
       else{
           pool.query(queries.updateBookquantityInStock,[quantityInStock,id],(error,results) =>{
               if(error) throw error;
               res.status(200).send( " Book Quantity In Stock updated Successfully!");
        
           });
       }
   });
};

const updateBooksoldQuantity = (req,res) =>{
    const {id,soldQuantity} = req.body;
   // check if id exists
 
   pool.query(queries.getBooksById,[id], (error,results) =>{
       const noBookFound = !results.rows.length;
        if (noBookFound){
           res.send("Book does not exist in the database");
       }
       else{
           pool.query(queries.updateBooksoldQuantity,[soldQuantity,id],(error,results) =>{
               if(error) throw error;
               res.status(200).send( " Book Sold Quantity Updated Successfully!");
        
           });
       }
   });
};
const updateBookavailabilityStatus = (req,res) =>{
    const {id,availabilityStatus } = req.body;
   // check if id exists
 
   pool.query(queries.getBooksById,[id], (error,results) =>{
       const noBookFound = !results.rows.length;
        if (noBookFound){
           res.send("Book does not exist in the database");
       }
       else{
           pool.query(queries.updateBookavailabilityStatus,[availabilityStatus ,id],(error,results) =>{
               if(error) throw error;
               res.status(200).send( " Book Availability Status Updated Successfully!");
        
           });
       }
   });
};

 

module.exports = {
    getBooks,
    getBooksById,
    addBook,
    deleteBook,
    updateBookPrice,
    updateBookDiscount,
    updateBooksoldQuantity,
    updateBookquantityInStock,
    updateBookavailabilityStatus,
    
};