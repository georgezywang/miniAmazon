import { Int32 } from 'bson';
import mongoose from 'mongoose';

const category = new mongoose.Schema
({
    category_name: {type: String, required: true, unique: true},
    iid: {type: Int32, required: true, unique: true}
});

const category_schema = mongoose.model("Categoty", category)
export default category_shcema;