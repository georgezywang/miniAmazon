import { Double, Int32 } from 'bson';
import mongoose from 'mongoose';

const transaction = new mongoose.Schema
({
    tid: {type: Int32, required: true, unique: true},
    uid_buyer: {type: Int32, required: true, unique: true},
    uid_seller: {type: Int32, required: true, unique: true},
    iid: {type: Int32, required: true, unique: true},
    date_time: {type: String, required: true},
    quantity: {type: Int32, required: true},
    cost: {type: Double, required: true}
});

const transaction_schema = mongoose.model("Transaction", transactoin)
export default transaction_schema;