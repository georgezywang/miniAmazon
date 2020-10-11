import { Double, Int32} from 'bson';
import mongoose from 'mongoose';

const seller = new mongoose.Schema
({
    uid: {type: Int32, required: true, unique: true},
    username: {type: String, required: true, unique: true},
    account_name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    balance: {type: Double, required: true},
    address: {type: String, required: true},
    isSeller: {type: Boolean, required: true, default: true}
});

const seller_schema = mongoose.model("Seller", seller)
export default seller_schema;