import { Int32, Double} from 'bson';
import mongoose from 'mongoose';

const user = new mongoose.Schema
({
    uid: {type: Int32, required: true, unique: true},
    username: {type: String, required: true, unique: true},
    account_name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    balance: {type: Double, required: true},
    address: {type: String, required: true},
});

const user_schema = mongoose.model("User", user)
export default user_schema;