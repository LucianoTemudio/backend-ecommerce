function isValidData(req, res , next) {
    try {
        const { title, photo, category, price, stock } = req.body;
        if (!title || !photo || !category || !price || !stock) {
            const error = new Error("Title, photo, category, price, and stock are required fields.")
            error.statusCode = 400;
            throw error;
        } else {
            return next();
        }
    } catch (error) {
        throw error;
    }
};

export default isValidData;