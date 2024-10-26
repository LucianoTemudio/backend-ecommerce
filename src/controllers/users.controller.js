import usersMongoManager from "../data/mongo/managers/user.mongo.js";

async function create(req, res, next) {
    try {
        const data = req.body;
        const response = await usersMongoManager.create(data);
        if (response) {
            return res.status(201).json({ message: "USER CREATED", response: response._id });
        } else {
            const error = new Error("UNABLE TO CREATE USER");
            error.statusCode = 404;
            throw error;           
        }
    } catch (error) {
        return next(error);
    }
}

async function read(req, res, next) {
    try {
        const response = await usersMongoManager.read()
        if (response.length > 0) {
            return res.status(200).json({ message: "USERS READ", response: response });
        } else {
            const error = new Error("UNABLE TO READ USERS");
            error.statusCode = 404;
            throw error;           
        }
    } catch (error) {
        
    }
}

async function readOne(req, res, next) {
    try {
        const { uid } = req.params
        const response = await usersMongoManager.readOne(uid)
        if (response) {
            return res.status(200).json({ message: "USER READ", response: response });
        } else {
            const error = new Error("UNABLE TO READ USER");
            error.statusCode = 404;
            throw error;           
        }
    } catch (error) {
        
    }
}

async function update(req, res, next) {
    try {
        const { uid } = req.params
        const data = req.body
        const response = await usersMongoManager.update(uid, data)
        if (response) {
            return res.status(200).json({ message: "USER UPDATED", response: response });
        } else {
            const error = new Error("UNABLE TO UPDATE USER");
            error.statusCode = 404;
            throw error;           
        }
    } catch (error) {
        
    }
}

async function destroy(req, res, next) {
    try {
        const { uid } = req.params
        const response = await usersMongoManager.destroy(uid)
        if (response) {
            return res.status(200).json({ message: "USER DELETED", response: response });
        } else {
            const error = new Error("UNABLE TO DELETE USER");
            error.statusCode = 404;
            throw error;           
        }
        
    } catch (error) {
        
    }
}

async function showUsers (req, res, next) {
    try {
        const response = await usersMongoManager.read()

        if (response.length > 0) {
            return res.render("usersindex", { user: response })
        } else {
            const error = new Error("USERS NOT FOUND");
            error.statusCode = 404;
            throw error;
        }
    } catch (error) {
        return next(error);
        }
}

async function showOneUser (req, res, next) {
    try {
        const { uid } = req.params
        const response = await usersMongoManager.readOne(uid)
        if (response) {
            return res.render("userinfo", { user: response })
        } else {
            const error = new Error("USER NOT FOUND");
            error.statusCode = 404;
            throw error;
        }
    } catch (error) {
        return next(error);
    }
}

async function usersAdmin(req, res, next) {
    try {
        return res.render("manageusers");
    } catch (error) {
        return next(error);
    }
}

async function usersLogIn(req, res, next) {
    try {

        return res.render("userlogin")

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
    usersAdmin,
    showUsers,
    showOneUser,
    usersLogIn
}