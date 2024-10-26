function isValidData(req, res , next) {
    try {
        const { title, category, stock } = req.body;
        if (!title || !category || !stock) {
            const error = new Error("Title, category, and stock are required fields.")
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