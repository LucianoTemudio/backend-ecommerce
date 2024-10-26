import { Schema, model } from "mongoose"; 

const collection = "users";
const schema = new Schema({
    email: { type: String, required: true, unique: true, index: true },
    password: { type: String, required: true },
    photo: {
      type: String,
      default: "../../../../public/assets/avatar.jpg",
    },
    role: { type: String, default: 0 },
});

const User = model(collection, schema);
export default User;