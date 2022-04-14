//loads the mongoose library
import mongoose from 'mongoose';
//loads the schema
import tuitsSchema from './tuits-schema.js'

//creates smongoose model from the schema
const tuitsModel = mongoose.model('TuitModel', tuitsSchema);
export default tuitsModel;