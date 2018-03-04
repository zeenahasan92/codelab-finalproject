var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('mongodb://zezeninja92:thesecretwindow@ds245218.mlab.com:45218/prefinal92').then(function () {
    console.log("DataBase Connected!")
}).catch(function (error) {
    console.log(error.message)
});

var Books = mongoose.model('Books', {
    bookName: String,
    isbnNo: String,
    authorName: String,
    publishYear: Number,
    image: String

});
/* GET home page. */
router.get('/home', function (req, res) {
    res.render('homepage')
});
/* GET AddBooks page. */
router.get('/books', function (req, res, next) {
    res.render('addBooks');
});
/* GET Admin page. */
router.get('/admin', function (req, res) {
    res.render('AdminLog')
});
router.get('/api/books', function (req, res) {
    Books.find(function (error, books) {
        res.json(books);
    })
});

// ThIS IS THE ROUTER OF OF POST REQUEST
router.post('/api/books', function (req, res) {
    var newBook = new Books(req.param('book'));
    newBook.save().then(function () {
        res.json({
            isSuccess: true,
            message: "Book is Saved!"
        });
    }).catch(function (error) {
        res.json({
            isSuccess: false,
            message: error.message
        });
    });
});
// ThIS IS THE ROUTER OF OF DELETE REQUEST
router.delete('/api/books', function (req, res) {
    var delId = req.param('id');
    Books.findByIdAndRemove(delId).then(function () {
        res.json({
            isSuccess: true,
            message: "Book is deleted!"
        });
    }).catch(function (error) {
        res.json({
            isSuccess: false,
            message: error.message
        });
    });
});

// ThIS IS THE ROUTER OF OF EDIT REQUEST

router.put('/api/books', function (req, res) {
    var editing = req.param('book');
    Books.findByIdAndUpdate(editing._id, editing).then(function () {
        res.json({
            isSuccess: true,
            message: "Book is Updated!"
        });
    }).catch(function (error) {
        res.json({
            isSuccess: false,
            message: error.message
        });
    });


});
module.exports = router;
