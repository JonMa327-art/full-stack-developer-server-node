//imports mongoose
import mongoose from 'mongoose';

//creates the schema for the tuits
const schema = mongoose.Schema({
    tuit: String,
    likes: Number,
    postedBy: {
        username: String
    }
},
    //The collection name
    { collection: 'tuits' });

//exporting scheme to be used in other places
export default schema;