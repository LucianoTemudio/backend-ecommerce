import Product from "../models/product.model.js";

class ProductsMongoManager {
    async create(data) {
        try {
            const one = await Product.create(data)
            return one 
        } catch (error) {
            throw error
        }
    }

    async read(filter) {
        try {
            const all = await Product.find(filter).lean()
            return all
        } catch (error) {
            throw error
        }
    }

    async paginate (filter, paginate) {
        try {
            const all = await Product.paginate(filter, paginate)
            return all
        } catch (error) {
            throw error
        }
    }

    async readOne(pid) {
        try {
            const one = await Product.findById(pid).lean()
            return one
        } catch (error) {
            throw error
        }
    }

    async update(pid, data) {
        try {
            const opts = { new: true }
            const one = await Product.findByIdAndUpdate(pid, data, opts)
            return one
        } catch (error) {
            throw error
        }
    }

    async destroy(pid) {
        try {
            const one = await Product.findByIdAndDelete(pid)
            return one
        } catch (error) {
            throw error
        }
    }
}

const productsMongoManager = new ProductsMongoManager()
export default productsMongoManager