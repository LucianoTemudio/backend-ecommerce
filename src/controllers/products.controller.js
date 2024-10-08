import productsManager from "../data/products.manager.js";

function index(req, res, next) {
    try {
        return res.status(200).json({
            message: "CODER COMMERCE API",
        });
    } catch (error) {
        return next(error);
        }
}

async function read(req, res, next) {
    try {
        let { category } = req.query;
        let response;
        if (!category) {
            response = await productsManager.read();
        } else {
            response = await productsManager.read(category);
        }
        if (response.length > 0) {
            return res.status(200).json({ message: "PRODUCTS READ", response });
        } else {
            const error = new Error("PRODUCTS NOT FOUND");
            error.statusCode = 404;
            throw error;
        }
    } catch (error) {
        return next(error);
        }
}

async function readOne (req, res, next) {
    try {
        const { pid } = req.params;
        const response = await productsManager.readOne(pid);
        if (response) {
            return res.status(200).json({ message: "PRODUCT READ", response })
        } else {
            const error = new Error("PRODUCT NOT FOUND");
            error.statusCode = 404;
            throw error;
        }
    } catch (error) {
        return next(error);
    }

}     

async function create(req, res, next) {
    try {
        const data = req.body;
        const response = await productsManager.create(data);
        if (response) {
            return res.status(201).json({ message: "PRODUCT CREATED", response });
        } else {
            const error = new Error("UNABLE TO CREATE PRODUCT");
            error.statusCode = 404;
            throw error;           
        }
    } catch (error) {
        return next(error);
    }
}

async function update(req,res, next) {
    try {
        const { pid } = req.params;
        const newData = req.body;
        const response = await productsManager.update(pid, newData);
        if ( !response ) {
            const error = new Error(`Product with id ${pid} not found`);
            error.statusCode = 404;
            throw error;
        }
        return res.status(202).json({ message: "PRODUCT UPDATED", response })
    } catch (error) {
        return next(error);
    }
}

async function destroy(req, res, next) {
    try {
        const { pid } = req.params;
        const response = await productsManager.destroy(pid);
        if (!response) {
            const error = new Error(`Product with id ${pid} not found`);
            error.statusCode(404);
            throw error;
        }
        return res.status(200).json({ message: "PRODUCT DELETED", response })
    } catch (error) {
        return next(error);         
    }
}

async function showProducts(req, res, next) {
    try {
        let { category } = req.query;
        let all;

        if (!category) {
            all = await productsManager.read();
        } else {
            all = await productsManager.read(category);
        }
        if (all.length > 0) {
            return res.render("products", { products:all })
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
        let { category } = req.query;
        let all;

        if (!category) {
            all = await productsManager.read();
        } else {
            all = await productsManager.read(category);
        }
        if (all.length > 0) {
            return res.render("index", { products:all })
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
        const { pid } = req.params;
        const response = await productsManager.readOne(pid);
        if (response) {
            return res.render("oneproduct", { product: response[0] })
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
    index,
    read,
    readOne,
    create,
    update,
    destroy,
    showProducts,
    showOneProduct,
    showProductsIndex,
    productsAdmin
}