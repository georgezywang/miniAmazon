import { Double, Int32 } from 'bson';
import mongoose from 'mongoose';

const item = new mongoose.Schema
({
    iid: {type: Int32, required: true, unique: true},
    iname: {type: String, required: true},
    price: {type: Double, required: true},
    description: {type: String, required: false},
    quantity: {type: Int32, required: true},
    location: {type: String, required: true},
    delivery: {type: String, required: true}
});

const item_schema = mongoose.model("Item", item)
export default item_schema;