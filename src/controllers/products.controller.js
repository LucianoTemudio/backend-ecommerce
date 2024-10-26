import productsMongoManager from "../data/mongo/managers/product.mongo.js";

async function create(req, res, next) {
    try {
        const data = req.body;
        const response = await productsMongoManager.create(data);
        if (response) {
            return res.status(201).json({ message: "PRODUCT CREATED", response: response._id });
        } else {
            const error = new Error("UNABLE TO CREATE PRODUCT");
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
        const response = await productsMongoManager.read(filter)

        if (response.length > 0) {
            return res.status(200).json({ message: "PRODUCTS READ", response: response });
        } else {
            const error = new Error("UNABLE TO READ PRODUCTS");
            error.statusCode = 404;
            throw error;           
        }
    } catch (error) {
        
    }
}

async function paginate(req, res, next) {
    try {
        const { page, limit } = req.query;
        const response = await productsMongoManager.paginate({}, {page, limit})
        console.log(response)
        if (response.docs.length > 0) {
            return res.status(200).json({ message: "PRODUCTS READ", response: response }); 
        } else {
            const error = new Error("UNABLE TO READ PRODUCTS");
            error.statusCode = 404;
            throw error;             
        }
    } catch (error) {
        return next(error)
    }
}

async function readOne(req, res, next) {
    try {
        const { pid } = req.params
        const response = await productsMongoManager.readOne(pid)
        if (response) {
            return res.status(200).json({ message: "PRODUCT READ", response: response });
        } else {
            const error = new Error("UNABLE TO READ PRODUCT");
            error.statusCode = 404;
            throw error;           
        }
    } catch (error) {
        
    }
}

async function update(req, res, next) {
    try {
        const { pid } = req.params
        const data = req.body
        const response = await productsMongoManager.update(pid, data)
        if (response) {
            return res.status(200).json({ message: "PRODUCT UPDATED", response: response });
        } else {
            const error = new Error("UNABLE TO UPDATE PRODUCT");
            error.statusCode = 404;
            throw error;           
        }
    } catch (error) {
        
    }
}

async function destroy(req, res, next) {
    try {
        const { pid } = req.params
        const response = await productsMongoManager.destroy(pid)
        if (response) {
            return res.status(200).json({ message: "PRODUCT DELETED", response: response });
        } else {
            const error = new Error("UNABLE TO DELETE PRODUCT");
            error.statusCode = 404;
            throw error;           
        }
        
    } catch (error) {
        
    }
}

async function showProducts(req, res, next) {
    try {
        const filter = req.query
        const response = await productsMongoManager.read(filter)

        if (response.length > 0) {
            return res.render("products", { products:response })
        } else {
            const error = new Error("PRODUCTS NOT FOUND");
            error.statusCode = 404;
            throw error;
        }

    } catch (error) {
        return next(error)
    }
}

async function showProductsIndex(req, res, next) {
    try {
        const filter = req.query
        const response = await productsMongoManager.read(filter)

        if (response.length > 0) {
            return res.render("index", { products:response })
        } else {
            const error = new Error("PRODUCTS NOT FOUND");
            error.statusCode = 404;
            throw error;
        }

    } catch (error) {
        return next(error)
    }
}

async function showOneProduct(req, res,next) {
    try {
        const { pid } = req.params
        const response = await productsMongoManager.readOne(pid)
        if (response) {
            return res.render("oneproduct", { product: response })
        } else {
            const error = new Error("PRODUCT NOT FOUND");
            error.statusCode = 404;
            throw error;
        }
    } catch (error) {
        return next(error);
    }
}

async function productsAdmin(req, res, next) {
    try {
        return res.render("manageproducts");
    } catch (error) {
        return next(error);
    }
}

export {
    create,
    read,
    paginate,
    readOne,
    update,
    destroy,
    showProducts,
    showProductsIndex,
    showOneProduct,
    productsAdmin
}