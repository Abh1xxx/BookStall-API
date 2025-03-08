# 📚 Bookstall API

![Express.js](https://img.shields.io/badge/Express.js-4.18.2-000000?style=flat&logo=express)
![Node.js](https://img.shields.io/badge/Node.js-18.x-339933?style=flat&logo=node.js)
![REST API](https://img.shields.io/badge/REST-API-blue)
![CRUD Operations](https://img.shields.io/badge/CRUD-Operations-green)

A RESTful API for managing books in a virtual bookstall built with Express.js. Handles CRUD operations with validation and detailed logging.

## 🌟 Features

- **Full CRUD Functionality**: Create, Read, Update, Delete books
- **Request Validation**: Middleware for data integrity
- **Case-Insensitive Search**: Find books by title regardless of casing
- **Detailed Console Logging**: Real-time operation tracking
- **Error Handling**: Clear error messages for API consumers

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm (v9+)

### Installation
```bash
git clone https://github.com/yourusername/bookstall-api.git
cd bookstall-api
npm install
node server.js

Server runs at http://localhost:4677
📋 API Endpoints
Method	Endpoint	Description
GET	/	Root welcome message
GET	/bookstall	Bookstall entry point
GET	/bookstall/getAllBooks	Retrieve all books
POST	/bookstall/addbook	Add new book
GET	/bookstall/getBookByTile/:title	Get book by title
DELETE	/bookstall/deleteBookByTitle/:title	Delete book by title
🛠️ Usage Examples
Add Book
bash
Copy

curl -X POST http://localhost:4677/bookstall/addbook \
-H "Content-Type: application/json" \
-d '{"title": "Dune", "author": "Frank Herbert", "price": 15.99}'
