function isValidData(req, res , next) {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            const error = new Error("email and password are required fields.")
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