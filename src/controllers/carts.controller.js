import cartMongoManager from "../data/mongo/managers/cart.mongo.js";

async function create(req, res, next) {
    try {
        const data = req.body;
        const response = await cartMongoManager.create(data);
        if (response) {
            return res.status(201).json({ message: "CART CREATED", response: response._id });
        } else {
            const error = new Error("UNABLE TO CREATE CART");
            error.statusCode = 404;
            throw error;           
        }
    } catch (error) {
        return next(error);
    }
}

async function read(req, res, next) {
    try {
        const filter = req.query
        const response = await cartMongoManager.read(filter)
        
        if (response.length > 0) {
            return res.status(200).json({ message: "CARTS READ", response: response });
        } else {
            const error = new Error("UNABLE TO READ CARTS");
            error.statusCode = 404;
            throw error;           
        }
    } catch (error) {
        
    }
}

async function readOne(req, res, next) {
    try {
        const { cid } = req.params
        const response = await cartMongoManager.readOne(cid)
        if (response) {
            return res.status(200).json({ message: "CART READ", response: response });
        } else {
            const error = new Error("UNABLE TO READ CART");
            error.statusCode = 404;
            throw error;           
        }
    } catch (error) {
        
    }
}

async function update(req, res, next) {
    try {
        const { cid } = req.params
        const data = req.body
        const response = await cartMongoManager.update(cid, data)
        if (response) {
            return res.status(200).json({ message: "CART UPDATED", response: response });
        } else {
            const error = new Error("UNABLE TO UPDATE CART");
            error.statusCode = 404;
            throw error;           
        }
    } catch (error) {
        
    }
}

async function destroy(req, res, next) {
    try {
        const { cid } = req.params
        const response = await cartMongoManager.destroy(cid)
        if (response) {
            return res.status(200).json({ message: "CART DELETED", response: response });
        } else {
            const error = new Error("UNABLE TO DELETE CART");
            error.statusCode = 404;
            throw error;           
        }
        
    } catch (error) {
        
    }
}

async function cart(req, res,next) {
    try {
        const filter = req.query
        const response = await cartMongoManager.read(filter)
        if (response.length > 0) {
            return res.render("cart", { cart: response })
        } else {
            const error = new Error("PRODUCT NOT FOUND");
            error.statusCode = 404;
            throw error;
        }
    } catch (error) {
        return next(error);
    }
}


export {
    read,
    readOne,
    create,
    update,
    destroy,
    cart
}