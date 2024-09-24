function isValidData(req, res , next) {
    try {
        const { photo, email, password, role } = req.body;
        if (!photo || !email || !password || !role) {
            const error = new Error("Photo, email, password, and role are required fields.")
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