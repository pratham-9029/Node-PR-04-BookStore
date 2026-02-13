<div align="center">

# ⚡ FUTURISTIC BOOK MANAGEMENT SYSTEM ⚡

### `>> Redefining Book Management in the Digital Age <<`

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js"/>
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white" alt="Express"/>
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB"/>
  <img src="https://img.shields.io/badge/EJS-B4CA65?style=for-the-badge&logo=ejs&logoColor=black" alt="EJS"/>
  <img src="https://img.shields.io/badge/Multer-FF6C37?style=for-the-badge&logo=files&logoColor=white" alt="Multer"/>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/License-MIT-cyan.svg?style=flat-square" alt="License"/>
  <img src="https://img.shields.io/badge/Version-1.0.0-blue.svg?style=flat-square" alt="Version"/>
  <img src="https://img.shields.io/badge/Status-Production-success.svg?style=flat-square" alt="Status"/>
</p>

```ascii
╔═══════════════════════════════════════════════════════════╗
║  A Next-Gen Full-Stack CRUD Application for Book Store   ║
║  Featuring: Real-time Management | Image Upload | Cart   ║
╚═══════════════════════════════════════════════════════════╝
```

</div>

## ⚙️ QUICK START

### `// INITIALIZE_ENVIRONMENT.SH`

```bash
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# STEP 1: Clone the Repository
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
git clone https://github.com/yourusername/futuristic-book-store.git
cd futuristic-book-store
```

```bash
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# STEP 2: Install Dependencies
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
npm install
```

```bash
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# STEP 3: Environment Configuration
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# Create a .env file in the root directory
```

**`.env` Configuration:**

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/bookstore
```

```bash
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# STEP 4: Launch the Application
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
npm start
```

<div align="center">

### ✨ **Application Now Running at** [`http://localhost:3000`](http://localhost:3000) ✨

</div>

---

### 🧬 **CRUD FLOW BREAKDOWN**

<table>
<thead>
<tr>
<th align="center">Operation</th>
<th align="center">Route</th>
<th align="center">Method</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td align="center">🔍 <b>READ</b></td>
<td><code>/view-book</code></td>
<td><code>GET</code></td>
<td>Fetches all books from database and renders catalog view</td>
</tr>
<tr>
<td align="center">➕ <b>CREATE</b></td>
<td><code>/</code></td>
<td><code>POST</code></td>
<td>Handles new book submission with image upload via Multer</td>
</tr>
<tr>
<td align="center">✏️ <b>UPDATE</b></td>
<td><code>/book/update/:id</code></td>
<td><code>POST</code></td>
<td>Updates book details; replaces old image if new one uploaded</td>
</tr>
<tr>
<td align="center">🗑️ <b>DELETE</b></td>
<td><code>/book/delete/:id</code></td>
<td><code>GET</code></td>
<td>Removes book from database and deletes associated image file</td>
</tr>
<tr>
<td align="center">🛒 <b>ADD TO CART</b></td>
<td><code>/book/cart/:id</code></td>
<td><code>POST</code></td>
<td>Clones book data to cart collection for checkout management</td>
</tr>
<tr>
<td align="center">📦 <b>VIEW CART</b></td>
<td><code>/view-cart</code></td>
<td><code>GET</code></td>
<td>Displays all items in cart with total calculation</td>
</tr>
<tr>
<td align="center">❌ <b>REMOVE FROM CART</b></td>
<td><code>/cart/delete/:id</code></td>
<td><code>GET</code></td>
<td>Removes item from cart collection</td>
</tr>
</tbody>
</table>

---

## 📂 PROJECT STRUCTURE

```
FUTURISTIC-BOOK-STORE/
│
├── 📁 config/
│   ├── databse.js          # MongoDB connection logic
│   └── dotenv.js           # Environment variable loader
│
├── 📁 middleware/
│   └── imageUploads.js     # Multer configuration for file uploads
│
├── 📁 models/
│   ├── bookModel.js        # Mongoose schema for books
│   └── cartModel.js        # Mongoose schema for cart items
│
├── 📁 views/
│   ├── index.ejs           # Homepage with cart preview
│   └── pages/
│       ├── view-book.ejs   # Book catalog page
│       ├── edit-book.ejs   # Edit book form
│       └── view-cart.ejs   # Shopping cart page
│
├── 📁 uploads/             # User-uploaded book cover images
│
├── 📄 index.js             # Main Express server & route definitions
├── 📄 package.json         # Dependencies & scripts
├── 📄 .env.example         # Environment variable template
└── 📄 README.md            # You are here!
```

---

## 🔧 TECHNOLOGY STACK

<div align="center">

|        Layer        |     Technology     | Purpose                             |
| :-----------------: | :----------------: | :---------------------------------- |
|     **Backend**     | Node.js + Express  | Server-side runtime & web framework |
|    **Database**     | MongoDB + Mongoose | NoSQL database & ODM                |
| **Template Engine** |        EJS         | Dynamic HTML rendering              |
|  **File Handling**  |       Multer       | Image upload middleware             |
|   **Environment**   |       dotenv       | Configuration management            |
|  **Body Parsing**   |    body-parser     | Form data extraction                |

</div>

---

---

## 💻 DEVELOPMENT WORKFLOW

```bash
# Development Mode (with auto-restart)
npm install -g nodemon
nodemon index.js

# Production Mode
npm start

# Database Management
# Ensure MongoDB is running on port 27017
mongod --dbpath /path/to/data
```

---

## 🎨 FEATURE ROADMAP

- [x] Core CRUD operations for books
- [x] Image upload and storage system
- [x] Shopping cart functionality
- [x] Responsive EJS templates
- [x] MongoDB integration
- [ ] User authentication & authorization
- [ ] Payment gateway integration
- [ ] Advanced search & filtering
- [ ] Book recommendations engine
- [ ] Multi-language support
- [ ] Dark mode UI theme
- [ ] RESTful API for mobile app
- [ ] Real-time inventory tracking

---

## 🐛 TROUBLESHOOTING

<details>
<summary><b>MongoDB Connection Failed</b></summary>

```bash
# Ensure MongoDB is running
systemctl status mongodb  # Linux
brew services start mongodb-community  # macOS

# Check connection string in .env
MONGODB_URI=mongodb://localhost:27017/bookstore
```

</details>

<details>
<summary><b>Image Upload Not Working</b></summary>

- Verify `uploads/` directory exists and has write permissions
- Check Multer configuration in `middleware/imageUploads.js`
- Ensure file size limits are not exceeded (default: 5MB)
</details>

<details>
<summary><b>Port Already in Use</b></summary>

```bash
# Find process using port 3000
lsof -i :3000  # macOS/Linux
netstat -ano | findstr :3000  # Windows

# Kill the process or change PORT in .env
```

</details>

---

## 🤝 CONTRIBUTING

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📜 LICENSE

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 📞 CONTACT & SUPPORT

<div align="center">

**Built with 💚 by Pratham**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/yourusername)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/yourusername)
[![Portfolio](https://img.shields.io/badge/Portfolio-FF5722?style=for-the-badge&logo=google-chrome&logoColor=white)](https://yourportfolio.com)

---

### ⭐ Star this repository if you find it helpful!

```ascii
╔═══════════════════════════════════════════════════╗
║   Thank you for exploring this project! 🚀       ║
║   Happy Coding & Keep Building Cool Stuff! ⚡    ║
╚═══════════════════════════════════════════════════╝
```

</div>
