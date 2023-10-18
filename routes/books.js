const express = require('express')
const router = express.Router();
const {getAllBooks,createBook,getBook,updateBook,deleteBook} = require('../controllers/books')


router.route('/').get(getAllBooks).post(createBook).patch(updateBook).delete(deleteBook)
router.route('/:id').get(getBook).patch(updateBook).delete(deleteBook)


module.exports = router