import usersManager from "../data/users.manager.js";

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
        let { role } = req.query;
        let response;
        if (!role) {
            response = await usersManager.read();
        } else {
            response = await usersManager.read(role);
        }
        if (response.length > 0) {
            return res.status(200).json({ message: "USERS READ", response });
        } else {
            const error = new Error("USERS NOT FOUND");
            error.statusCode = 404;
            throw error;
        }
    } catch (error) {
        return next(error);
        }
}

async function readOne (req, res, next) {
    try {
        const { uid } = req.params;
        const response = await usersManager.readOne(uid);
        if (response) {
            return res.status(200).json({ message: "USER READ", response })
        } else {
            const error = new Error("USER NOT FOUND");
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
        const response = await usersManager.create(data);
        if (response) {
            return res.status(201).json({ message: "USER CREATED", response });
        } else {
            const error = new Error("UNABLE TO CREATE USER");
            error.statusCode = 404;
            throw error;           
        }
    } catch (error) {
        return next(error);
    }
}

async function update(req,res, next) {
    try {
        const { uid } = req.params;
        const newData = req.body;
        const response = await usersManager.update(uid, newData);
        if ( !response ) {
            const error = new Error(`User with id ${uid} not found`);
            error.statusCode = 404;
            throw error;
        }
        return res.status(202).json({ message: "USER UPDATED", response })
    } catch (error) {
        return next(error);
    }
}

async function destroy(req, res, next) {
    try {
        const { uid } = req.params;
        const response = await usersManager.destroy(uid);
        if (!response) {
            const error = new Error(`User with id ${uid} not found`);
            error.statusCode(404);
            throw error;
        }
        return res.status(200).json({ message: "USER DELETED", response })
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
    destroy
}