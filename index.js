import express from "express";
import { envConfig } from "./config/dotenv.js";
import db from "./config/databse.js";
import bodyParser from "body-parser";
import bookModel from "./models/bookModel.js";
import cartModel from "./models/cartModel.js";
import imageUploads from "./middleware/imageUploads.js";
import fs from "fs";


const app = express();
const PORT = envConfig.PORT || 3000;
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads'));

app.get('/', (req, res) => {
    cartModel.find()
    .then((data)=>{
        return res.render('index.ejs',{data});
    })
    .catch((err)=>{
        console.log(err);
    })
});


app.post('/', imageUploads, (req, res) => {

    if (req.file) {
        req.body.image = req.file.path;
    };
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
    bookModel.find({})
        .then((data) => {
            console.log(data);
            
            return res.render('./pages/view-book.ejs', { data });
        })
        .catch((err) => {
            console.log(err);
        })
});


app.post('/book/cart/:id', async (req, res) => {
    try {
        const bookId = req.params.id;
        
        const bookData = await bookModel.findById(bookId);

        if (!bookData) {
            return res.redirect('/view-book');
        }

        await cartModel.create({
            name: bookData.name,
            image: bookData.image,
            author: bookData.author,
            publisher: bookData.publisher,
            price: bookData.price
        });

        console.log("Data Added To Cart Successfully");
        res.redirect('/view-book');

    } catch (err) {
        console.log("Error adding to cart:", err);
        res.redirect('/view-book');
    }
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

app.get('/view-cart',(req,res)=>{

    cartModel.find()
    .then((data)=>{
        return res.render('pages/view-cart.ejs',{data});
    })
    .catch((err)=>{
        console.log(err);
    })

})

app.get('/cart/delete/:id', (req, res) => {

    const dltBook = req.params.id;

    cartModel.findByIdAndDelete(dltBook)
        .then((book) => {
            fs.unlinkSync(book.image);
            console.log("Product deleted successfully");
            return res.redirect('/view-cart');
        })
        .catch((err) => {
            console.log(err);
        })
})

app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
    }
    console.log(`Server started on port ${PORT}`);
});
