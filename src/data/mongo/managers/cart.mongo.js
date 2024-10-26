import Cart from "../models/cart.model.js"

class CartMongoManager {
    async create(data) {
        try {
            const one = await Cart.create(data)
            return one 
        } catch (error) {
            throw error
        }
    }

    async read(filter) {
        try {
            const all = await Cart.find(filter).lean()
            return all
        } catch (error) {
            throw error
        }
    }

    async readOne(cid) {
        try {
            const one = await Cart.findById(cid)
            return one
        } catch (error) {
            throw error
        }
    }

    async update(cid, data) {
        try {
            const opts = { new: true }
            const one = await Cart.findByIdAndUpdate(cid, data, opts)
            return one
        } catch (error) {
            throw error
        }
    }

    async destroy(cid) {
        try {
            const one = await Cart.findByIdAndDelete(cid)
            return one
        } catch (error) {
            throw error
        }
    }
}

const cartMongoManager = new CartMongoManager()
export default cartMongoManager