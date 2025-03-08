const validateBook = (req, res, next) => {
    console.log("🔍 Validating book data...");

    const { title, author, price } = req.body;

    if (!title ) {
        console.log("❌ Validation failed: Title is required.");
        return res.status(400).json({ error: " Title is required" });
    }
    if ( !author) {
        console.log("❌ Validation failed: Author is required.");
        return res.status(400).json({ error: " Author is required" });
    }

    if (price !== undefined && (isNaN(price) || price <= 0)) {
        console.log("❌ Validation failed: Price must be a positive number.");
        return res.status(400).json({ error: "Price must be a positive number" });
    }

    console.log("✅ Validation successful. Proceeding to next Controller...");
    next();
};


module.exports={validateBook}