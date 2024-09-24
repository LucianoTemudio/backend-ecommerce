import fs from 'fs';
import crypto from 'crypto';

class ProductsManager {

    constructor(path) {
        this.path = path;
        this.exists();
    }

    exists() {

        const exist = fs.existsSync(this.path);
        if (!exist) {
            fs.writeFileSync(this.path, JSON.stringify([]));
            console.log("File created!");
        } else {console.log("File already exists")};
    };

    async read(category) {
        try {
            const data = await fs.promises.readFile(this.path, "utf-8");
            const parseData = JSON.parse(data);
            console.log(parseData);
            
            if (category) {
                const filteredData = parseData.filter(
                    (product) => product.category === category
                );
                return filteredData;
            } else {
                return parseData;
            }   
        } catch (error) {
            console.log(error);
            throw error;
        }
    };

    async readOne(pid) {
        try {
            const data = await fs.promises.readFile(this.path, "utf-8");
            const parseData = JSON.parse(data);
            const filteredProduct = parseData.filter((product) => product.id === pid);
            return filteredProduct;
        } catch (error) {
            console.log(error);
        }
    }

    async create(data) {
        try {
            data.id = crypto.randomBytes(12).toString("hex");
            const dataAll = await fs.promises.readFile(this.path, "utf-8");
            const parseData = JSON.parse(dataAll);
            parseData.push(data);
            const stringParseData = JSON.stringify(parseData, null, 2);
            await fs.promises.writeFile(this.path, stringParseData);
            return data.id;
        } catch (error) {
            console.log(error);
            
        }
    }

    async update(pid, newData) {
        try {
          const data = await fs.promises.readFile(this.path, "utf-8");
          const parseData = JSON.parse(data);
          const index = parseData.findIndex((product) => product.id === pid);
          if (index === -1) {
            return null;
          }
          parseData[index] = { ...parseData[index], ...newData };
          const stringParseData = JSON.stringify(parseData, null, 2);
          await fs.promises.writeFile(this.path, stringParseData);
          return parseData[index];
        } catch (error) {
          console.log(error);
          throw error;
        }
      }

      async destroy(pid) {
        try {
            const data = await fs.promises.readFile(this.path, "utf-8");
            const parseData = JSON.parse(data);
            const filteredData = parseData.filter((product) => product.id !== pid);
            if (parseData.length === filteredData.length) {
              return null;
            }
            const stringFilteredData = JSON.stringify(filteredData);
            await fs.promises.writeFile(this.path, stringFilteredData);
            return `Product with id ${pid} deleted`;
            
        } catch (error) {
            console.log(error);
            throw error;            
        }
      }

};


const productsManager = new ProductsManager("./src/data/fs/files/products.json")
export default productsManager;
