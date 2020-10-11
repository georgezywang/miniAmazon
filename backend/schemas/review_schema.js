import { Int32 } from 'bson';
import mongoose from 'mongoose';

const review = new mongoose.Schema
({
    uid_buyer: {type: Int32, required: true, unique: true},
    iid: {type: Int32, required: true, unique: true},
    item_rating: {type: Int32, required: true},
    time_reviewed: {type: String, required: true},
    seller_rating: {type: Int32, required: true},
    text: {type: String, required: false}
});

const review_schema = mongoose.model("Review", review)
export default review_schema;