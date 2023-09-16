const express = require('express');
const router = express.Router();
const controller = require('../controller');


router.get('/' , controller.getBooks);
router.get('/:id' , controller.getBooksById);
router.post('/', controller.addBook);
router.delete('/:id', controller.deleteBook);
router.put('/price', controller.updateBookPrice);
router.put('/discount', controller.updateBookDiscount);

router.put('/quantityInStock', controller.updateBookquantityInStock);
router.put('/soldQuantity', controller.updateBooksoldQuantity);
router.put('/availabilityStatus', controller.updateBookavailabilityStatus);



 
 

 

// router.patch('/:productId',(req,res,next) =>{
    
//     res.status(200).json({
//         message: 'Updated product!',
     
//     });
   
// });

 


module.exports = router;