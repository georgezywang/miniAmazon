import { Int32 } from 'bson';
import mongoose from 'mongoose';

const incart = new mongoose.Schema
({
    uid_buyer: {type: Int32, required: true, unique: true},
    iid: {type: Int32, required: true, unique: true}
});

const incart_schema = mongoose.model("In Cart", incart)
export default incart_schema;