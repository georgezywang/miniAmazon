import { Int32 } from 'bson';
import mongoose from 'mongoose';

const selllist = new mongoose.Schema
({
    uid_seller: {type: Int32, required: true, unique: true},
    iid: {type: Int32, required: true, unique: true}
});

const selllist_schema = mongoose.model("Sell List", selllist)
export default selllist_schema;