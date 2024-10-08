import fs from 'fs';
import crypto from 'crypto';

class UsersManager {

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

    async read(role) {
        try {
            const data = await fs.promises.readFile(this.path, "utf-8");
            const parseData = JSON.parse(data);
            console.log(parseData);
            
            if (role) {
                const filteredData = parseData.filter(
                    (user) => user.role === role
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

    async readOne(uid) {
        try {
            const data = await fs.promises.readFile(this.path, "utf-8");
            const parseData = JSON.parse(data);
            const filteredUser = parseData.filter((user) => user.id === uid);
            return filteredUser;
        } catch (error) {
            console.log(error);
        }
    }

    async create(data) {
        try {
            data.id = crypto.randomBytes(12).toString("hex");
            data.isOnline = "False";
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

    async update(uid, newData) {
        try {
          const data = await fs.promises.readFile(this.path, "utf-8");
          const parseData = JSON.parse(data);
          const index = parseData.findIndex((user) => user.id === uid);
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

      async destroy(uid) {
        try {
            const data = await fs.promises.readFile(this.path, "utf-8");
            const parseData = JSON.parse(data);
            const filteredData = parseData.filter((user) => user.id !== uid);
            if (parseData.length === filteredData.length) {
              return null;
            }
            const stringFilteredData = JSON.stringify(filteredData);
            await fs.promises.writeFile(this.path, stringFilteredData);
            return `User with id ${uid} deleted`;
            
        } catch (error) {
            console.log(error);
            throw error;            
        }
      }

};


const usersManager = new UsersManager("./src/data/fs/files/users.json")
export default usersManager;