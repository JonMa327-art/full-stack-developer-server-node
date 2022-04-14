//imports the tuits model which contains the schema
import tuitsModel from './tuits-model.js';
const findAllTuits = () => tuitsModel.find();
const createTuit = (tuit) => tuitsModel.create(tuit);
const deleteTuit = (tid) => tuitsModel.deleteOne({ _id: tid });
const updateTuit = (tid, tuit) => tuitsModel.updateOne({ _id: tid }, { $set: tuit })


//contains all of the functions
const funcs = {
    findAllTuits,
    createTuit,
    deleteTuit,
    updateTuit
}

export default funcs;