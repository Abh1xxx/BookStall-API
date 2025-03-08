let books=[
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", price: 1925 },
    { id: 2, title: "1984", author: "George Orwell", price: 1949 },
    { id: 3, title: "To Killprice Mockingbird", author: "Harper Lee", price: 1960 }
]
const rootbookstall=(req,res)=>{
    res.send("Welcome to the Bookstall section! Browse and manage books here.");
    console.log("Bookstall route accessed --> Response sent successfully.");
    console.log("--------------------------------------------------");
}

//getAllBooks
const getAllBooks=(req,res)=>{
    try {
        console.log("📚 Fetching all book details...");
        console.log("--------------------------------");
        
        if(books.length===0){
            res.status(200).json({message:"No books available"})
            console.log("⚠️ No books found in the database.");
        }
        else{
            console.log(`✅ Retrieved ${books.length} books successfully.`);            res.json(books);
        }
        console.log("--------------------------------------------------");

    } catch (error) {
        console.log(error);
        res.status(error.status ||500).json({error:error.message||"Internal server error"})
        console.error("❌ Error fetching books:", error);
        console.log("--------------------------------------------------");

    }
}

//addBooks
const addBooks=(req,res)=>{
    try {
        console.log("📚 Attempting to add a new book...");
        console.log("---------------------------------");
        //validation pending
        const {title,author,price}=req.body
        const newBook={title,author,price}
        books.push(newBook)
        res.status(201).json(newBook);
        console.log(`✅ Book added successfully: "${title}" by ${author} (Price: $${price})`);
        console.log("--------------------------------------------------");
    } catch (error) {
        console.log(error);
        res.status(error.status ||500).json({error:error.message||"Internal server error"})
        console.log("--------------------------------------------------");
    }
}

//getBookByTile
const getBookByTile=(req,res)=>{
    try {
        console.log("Searching by Title");
        console.log("-------------------");
        console.log(`🔍 Searching for book: "${req.params.title}"`);
        if ( books.length === 0) {
            console.log("⚠️ No books found in the database.");
            return res.status(404).json({ error: "No books available" });
        }
        const book=books.find((book)=>book.title.toLowerCase()===req.params.title.toLowerCase())
        if(!book)
        {
            console.log(`❌ Book not found: "${req.params.title}"`);
            return res.status(404).json({ error: 'Book not found' });
        }
        res.json(book);
        console.log(`✅ Found book: "${book.title}" by ${book.author} (Price: $${book.price})`);
        console.log("--------------------------------------------------");
    } catch (error) {
        console.log(error);
        res.status(error.status ||500).json({error:error.message||"Internal server error"})
        console.log("--------------------------------------------------");

    }
}

//deleteBookByTitle
const deleteBookByTitle=(req,res)=>{
    try {        
        const bookTitle=req.params.title
        console.log("🗑️ Delete request received...");
        console.log("---------------------------------");

        // Check if books array exists (to prevent errors)
        if (!books || books.length === 0) {
            console.log("⚠️ No books available in the database.");
            return res.status(404).json({ error: "No books available" });
        }

        console.log(`🔍 Searching for book: "${bookTitle}"`);     
         // Find if the book exists
         const bookExists = books.some(b => b.title.toLowerCase() === bookTitle.toLowerCase());

         if (!bookExists) {
             console.log(`❌ Book not found: "${bookTitle}"`);
             console.log("---------------------------------");
             return res.status(404).json({ error: `Book "${bookTitle}" not found` });
         }
         console.log(`✅ Book found: "${bookTitle}" --> Preparing to delete...`)
        // Delete the book
        books = books.filter(b => b.title.toLowerCase() !== bookTitle.toLowerCase());
        console.log(`✅ Book "${bookTitle}" deleted successfully.`);

        res.status(200).json({ message: `Book "${bookTitle}" deleted successfully`, books });
        console.log("--------------------------------------------------");
    } catch (error) {
        console.log(error);
        res.status(error.status ||500).json({error:error.message||"Internal server error"})
        console.log("--------------------------------------------------");
    }
}

module.exports={
                addBooks,
                getAllBooks,
                getBookByTile,
                rootbookstall,
                deleteBookByTitle
            }