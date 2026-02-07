import express from "express";
import { envConfig } from "./config/dotenv.js";
import db from "./config/databse.js";
import bodyParser from "body-parser";
import bookModel from "./models/bookModel.js";
import imageUploads from "./middleware/imageUploads.js";
import fs from "fs";


const app = express();
const PORT = envConfig.PORT || 3000;
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads'));

app.get('/', (req, res) => {
    return res.render('index.ejs');
});


app.post('/', imageUploads, (req, res) => {

    if (req.file) {
        req.body.image = req.file.path;
    }

    console.log(req.body);


    bookModel.create(req.body)
        .then(() => {
            console.log("Product added successfully");
        })
        .catch((err) => {
            console.log(err);
        })
    return res.redirect(res.get('Referrer') || '/');
});

app.get('/view-book', (req, res) => {
    bookModel.find()
        .then((data) => {
            console.log(data.image);
            return res.render('pages/view-book.ejs', { data });
        })
        .catch((err) => {
            console.log(err);
        })
});

app.get('/book/delete/:id', (req, res) => {

    const dltBook = req.params.id;

    bookModel.findByIdAndDelete(dltBook)
        .then((book) => {
            fs.unlinkSync(book.image);
            console.log("Product deleted successfully");
            return res.redirect('/view-book');
        })
        .catch((err) => {
            console.log(err);
        })
})

app.get('/book/edit/:id', (req, res) => {
    const editBook = req.params.id;
    bookModel.findById(editBook)
        .then((data) => {
            return res.render('pages/edit-book.ejs', { data });
        })
        .catch((err) => {
            console.log(err);
        })
})

app.post('/book/update/:id', imageUploads, (req, res) => {
    const updateId = req.params.id;
    if (req.file) {
        bookModel.findById(updateId)
            .then((book) => {
                if (book && book.image) {
                    try {
                        fs.unlinkSync(book.image);
                    } catch (e) {
                        console.log("Error deleting old image:", e);
                    }
                }
            })
            .catch((err) => {
                console.log(err);
            });
        req.body.image = req.file.path;
    }

    bookModel.findByIdAndUpdate(updateId, req.body)
        .then(() => {
            console.log("Product updated successfully");
            return res.redirect('/view-book');
        })
        .catch((err) => {
            console.log(err);
        })
});

app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
    }
    console.log(`Server started on port ${PORT}`);
});
